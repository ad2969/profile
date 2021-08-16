import React, { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useTrail, a } from "@react-spring/three";

import "./styles.scss";

const MAX_SCALE = 0.02;
const MIN_SCALE = 0.005;

const GRID_LENGTH = 25;
const GRID_DEPTH = 15;
const GRID_BOX_SIZE = 6;

const CityGrid: React.FunctionComponent = () => {
    const [buildingGrid, setBuildingGrid] = useState<any[]>([]);

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
        const grid: any[] = [];
        for (let i = GRID_DEPTH; i >= 0; i--) {
            for (let j = 0; j < GRID_LENGTH; j++) {
                const building = getRandomBuidingModel().clone();
                const scaleNum = Math.random() * (MAX_SCALE - MIN_SCALE + 0.02) + MIN_SCALE;

                grid.push({
                    scale: [scaleNum, scaleNum, scaleNum],
                    position: [j * GRID_BOX_SIZE, 0, i * GRID_BOX_SIZE],
                    building
                });
            }
        }

        setBuildingGrid(grid);

        return null;
    };

    useEffect(() => {
        // do nothing if not loaded
        if (!buildingModels) return;

        // generate the grid
        generateGrid();
    }, [buildingModels]); // eslint-disable-line react-hooks/exhaustive-deps

    const trail = useTrail(buildingGrid.length, {
        immediate: false,
        config: { duration: 70, clamp: true },
        // to: { scale: buildingGrid.length ? [0.009, 0.0001, 0.009] : [0.009, 0.0001, 0.009] }
        // visible: !!buildingGrid.length
        scale: buildingGrid.length ? [MAX_SCALE, MAX_SCALE, MAX_SCALE] : [MAX_SCALE, 0, MAX_SCALE],
        from: { scale: [MAX_SCALE, 0, MAX_SCALE] },
        to: { scale: [MAX_SCALE, MAX_SCALE, MAX_SCALE] }
    });

    return (
        <group position={[-GRID_LENGTH * 3, -10, -GRID_DEPTH * 3]}>
            <mesh receiveShadow castShadow>
                {buildingGrid.map((grid, i) => (
                    <a.primitive
                        object={grid.building}
                        key={i}
                        scale={trail[i].scale}
                        // scale={grid.scale}
                        position={grid.position}
                        // visible={trail[i].visible}
                    />
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
