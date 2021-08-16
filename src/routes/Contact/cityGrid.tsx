import React, { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useTrail, a } from "@react-spring/three";

import "./styles.scss";

const MAX_SCALE = 0.009;
const MIN_SCALE = 0.001;

const GRID_LENGTH = 40;
const GRID_DEPTH = 40;
const GRID_BOX_SIZE = 5;

const CityGrid: React.FunctionComponent = () => {
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

    const getRandomBuidingModel = () => {
        return buildingModels[Math.floor(Math.random() * Math.floor(buildingModels.length))];
    };

    const generateGrid = () => {
        const grid: any[][] = [];

        for (let i = GRID_DEPTH; i >= 0; i--) {
            let row: any[] = [];

            for (let j = 0; j < GRID_LENGTH; j++) {
                const building = getRandomBuidingModel().clone();
                const scaleNum = Math.random() * (MAX_SCALE - MIN_SCALE + 0.02) + MIN_SCALE;

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

    // TODO: Optimise
    // Organize to animate "rows" at a time

    useEffect(() => {
        // do nothing if not loaded
        if (!buildingModels) return;

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
                <meshPhysicalMaterial
                    color="#fff"
                    metalness={0.58}
                    emissive="#000"
                    roughness={0.18}
                />
            </mesh>
        </group>
    );
};

export default CityGrid;
