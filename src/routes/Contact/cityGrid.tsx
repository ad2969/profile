import React, { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useTrail, a } from "@react-spring/three";

import "./styles.scss";

interface Props {
    status: boolean;
}

const MAX_SCALE = 0.009;
const MIN_SCALE = 0.001;

const GRID_LENGTH = 40;
const GRID_DEPTH = 40;
const GRID_BOX_SIZE = 5;
const SPECIAL_LENGTH = GRID_LENGTH / 2;
const SPECIAL_DEPTH_OFFSET = 3;
const SPECIAL_DEPTH = GRID_DEPTH / 2 - SPECIAL_DEPTH_OFFSET;

const CityGrid: React.FunctionComponent<Props> = ({ status }) => {
    const [buildingGrid, setBuildingGrid] = useState<any[][]>([]);

    // Credits to https://free3d.com/3d-model/19-low-poly-buildings-974347.html
    const buildingModels = useLoader(OBJLoader, [
        "building-1.obj",
        "building-2.obj",
        "building-3.obj",
        "building-4.obj",
        "building-5.obj",
        "building-6.obj",
        "building-7.obj",
        "building-8.obj",
        "building-9.obj",
        "building-10.obj",
        "building-11.obj",
        "building-12.obj",
        "building-13.obj",
        "building-14.obj",
        "building-15.obj",
        "building-16.obj",
        "building-17.obj",
        "building-18.obj",
        "building-19.obj"
    ]);
    const windowTextures = useLoader(TextureLoader, [
        "window-silhouette-afk.png",
        "window-silhouette-online.png"
    ]);

    const getRandomBuidingModel = () => {
        return buildingModels[Math.floor(Math.random() * Math.floor(buildingModels.length))];
    };

    const generateGrid = () => {
        const grid: any[][] = [];

        for (let i = GRID_DEPTH; i >= 0; i--) {
            let row: any[] = [];

            for (let j = 0; j < GRID_LENGTH; j++) {
                let building = null;
                let scaleNum = 0;

                // pick special building
                if (i === SPECIAL_DEPTH && j === SPECIAL_LENGTH) {
                    building = buildingModels[16].clone();
                    scaleNum = 0.03;
                // demolish spaces beside the special building
                } else if (i - SPECIAL_DEPTH > 0 && i - SPECIAL_DEPTH < 3 && Math.abs(j - SPECIAL_LENGTH) < 3) {
                    building = getRandomBuidingModel().clone();
                    scaleNum = MIN_SCALE;
                // minimize everything around the special building
                } else if (i - SPECIAL_DEPTH > 2 && i - SPECIAL_DEPTH < 6 && Math.abs(j - SPECIAL_LENGTH) < 2) {
                    building = getRandomBuidingModel().clone();
                    scaleNum = Math.random() * (MAX_SCALE / 5 - MIN_SCALE + 0.02) + MIN_SCALE;
                // minimize everything around the special building
                } else if (i - SPECIAL_DEPTH > 5 && i - SPECIAL_DEPTH < 10 && Math.abs(j - SPECIAL_LENGTH) < 2) {
                    building = getRandomBuidingModel().clone();
                    scaleNum = Math.random() * (MAX_SCALE / 3 - MIN_SCALE + 0.02) + MIN_SCALE;
                } else {
                    building = getRandomBuidingModel().clone();
                    scaleNum = Math.random() * (MAX_SCALE - MIN_SCALE + 0.02) + MIN_SCALE;
                }

                row.push({
                    scale: [scaleNum, scaleNum, scaleNum],
                    position: [j * GRID_BOX_SIZE, 0, i * GRID_BOX_SIZE],
                    model: building
                });
            }

            grid.push(row);
            row = [];
        }

        setBuildingGrid(grid);

        return null;
    };

    useEffect(() => {
        // do nothing if not loaded
        if (!buildingModels || !windowTextures) return;

        // generate the grid
        generateGrid();
    }, [buildingModels]); // eslint-disable-line react-hooks/exhaustive-deps

    const rowTrail = useTrail(buildingGrid.length, {
        immediate: false,
        config: { duration: 80, clamp: true },
        scale: buildingGrid.length ? [1, 1, 1] : [1, 0, 1],
        from: { scale: [1, 0, 1] },
        to: { scale: [1, 1, 1] }
    });

    return (
        <group position={[-GRID_LENGTH * 2.5, -10, -GRID_DEPTH * 2]}>
            <mesh receiveShadow castShadow>
                {buildingGrid.map((row, i) => (
                    <a.group key={i} scale={rowTrail[i].scale}>
                        {row.map((building, j) => (
                            <a.primitive
                                object={building.model}
                                key={j}
                                scale={building.scale}
                                position={building.position}
                            />
                        ))}
                    </a.group>
                ))}
                {/* SPECIAL BUILDING SHOULD JUST BE PERSISTENT */}
                {buildingGrid && buildingGrid.length && <primitive
                    object={buildingGrid[SPECIAL_DEPTH + SPECIAL_DEPTH_OFFSET * 2][SPECIAL_LENGTH].model}
                    scale={buildingGrid[SPECIAL_DEPTH + SPECIAL_DEPTH_OFFSET * 2][SPECIAL_LENGTH].scale}
                    position={buildingGrid[SPECIAL_DEPTH + SPECIAL_DEPTH_OFFSET * 2][SPECIAL_LENGTH].position}
                />}
                <meshPhysicalMaterial
                    color="#fff"
                    metalness={1}
                    emissive="#000"
                    roughness={0.1}
                />
            </mesh>
            <mesh rotation={[0, 0, 0]} position={[100, 13, 88.06]}>
                <planeGeometry args={[2, 1]}/>
                <meshBasicMaterial
                    // color={lightColor}
                    // metalness={1}
                    // emissive={lightColor}
                    // roughness={10}
                    map={status ? windowTextures[1] : windowTextures[0]}
                    attach="material"
                />
                {status && <pointLight args={["#ffff9e", 0.01]} position={[0, 0, 5]} castShadow />}
            </mesh>
        </group>
    );
};

export default CityGrid;
