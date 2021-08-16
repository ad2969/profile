import React, { useRef, Suspense } from "react";
import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import CityGrid from "./cityGrid";

import "./styles.scss";

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });

const City: React.FunctionComponent = () => {
    const MouseMoveControl = () => {
        const { camera, gl } = useThree();
        const { domElement } = gl;

        const controls = useRef();

        useFrame(({ camera, mouse }) => {
            camera.position.set(mouse.x * 5, camera.position.y, camera.position.z);
            // camera.rotation.set(camera.rotation._x, mouse.x * 0.01, 0);
            controls.current && (controls.current as any).dispose();
            controls.current && (controls.current as any).update();
        });

        // @ts-ignore
        return <orbitControls ref={controls} args={[camera, domElement]} />;
    };

    return (
        // Canvas sets up the following:
        // Tranlucent THREE.WebGLRenderer -->
        //  {   antialias=true,
        //      alpha=true,
        //      powerPreference="high-performance",
        //      setClearAlpha(0)
        //  }
        // THREE.Perspective camera
        // THREE.Scene
        // THREE.Raycaster
        // Resize observer
        <Canvas
            camera={{ fov: 20, near: 1, far: 1000, position: [0, 50, 200] }} // THREE.Perspective camera props
            orthographic={false} // THREE.Orthographic camera
            shadows={true} // THREE.PCFSoftShadowMap
        >
            {/* EFFECTS */}
            <fog attach="fog" args={["#fff", 1, 300]} />

            <group>
                {/* LIGHTS */}
                <ambientLight intensity={0.01} />
                <spotLight args={["#fff", 1]} position={[0, 100, -50]} angle={1} castShadow />
                <pointLight args={["#f00", 0.01]} position={[0, 0, 0]} castShadow />

                {/* BUILDINGSs */}
                <Suspense fallback={<mesh></mesh>}>
                    <CityGrid />
                </Suspense>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
                    <planeGeometry
                        args={[200, 200]}
                    />
                    <meshStandardMaterial
                        color="#aaa"
                        metalness={0}
                        emissive="#000"
                        roughness={0}
                    />
                </mesh>
            </group>
            {/* <axesHelper args={5} /> */}
            <MouseMoveControl />
        </Canvas>
    );
};

export default City;
