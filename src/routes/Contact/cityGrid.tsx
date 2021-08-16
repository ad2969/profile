import React from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import "./styles.scss";

const MAX_SCALE = 0.009;
const MIN_SCALE = 0.001;

const GRID_SIZE = 50;
const GRID_BOX_SIZE = 3.5;

const CityGrid: React.FunctionComponent = () => {
    const buildingModels = [
        useLoader(OBJLoader, "building-1.obj"),
        useLoader(OBJLoader, "building-2.obj"),
        useLoader(OBJLoader, "building-3.obj"),
        useLoader(OBJLoader, "building-4.obj"),
        useLoader(OBJLoader, "building-5.obj"),
        useLoader(OBJLoader, "building-6.obj"),
        useLoader(OBJLoader, "building-7.obj"),
        useLoader(OBJLoader, "building-8.obj"),
        useLoader(OBJLoader, "building-9.obj"),
        useLoader(OBJLoader, "building-10.obj"),
        useLoader(OBJLoader, "building-11.obj"),
        useLoader(OBJLoader, "building-12.obj"),
        useLoader(OBJLoader, "building-13.obj"),
        useLoader(OBJLoader, "building-14.obj"),
        useLoader(OBJLoader, "building-15.obj"),
        useLoader(OBJLoader, "building-16.obj"),
        useLoader(OBJLoader, "building-17.obj"),
        useLoader(OBJLoader, "building-18.obj"),
        useLoader(OBJLoader, "building-19.obj"),
    ];

    const getRandomBuidingModel = () => {
        return buildingModels[Math.floor(Math.random() * Math.floor(buildingModels.length))];
    };

    const generateGrid = () => {
        const grid: any[] = [];
        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                const building = getRandomBuidingModel().clone();
                const scaleNum = Math.random() * (MAX_SCALE - MIN_SCALE + 0.01) + MIN_SCALE;

                grid.push({
                    scale: [scaleNum, scaleNum, scaleNum],
                    position: [i * GRID_BOX_SIZE, 0, j * GRID_BOX_SIZE],
                    building
                });
            }
        }

        return grid;
    };

    return (
        <group position={[-GRID_SIZE * 1.75, -10, -GRID_SIZE * 2]}>
            <mesh receiveShadow castShadow>
                {generateGrid().map((grid, i) => (
                    <primitive
                        object={grid.building}
                        key={i}
                        scale={grid.scale}
                        position={grid.position}
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
