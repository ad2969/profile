import React, { useRef, Suspense } from "react";
import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DeviceOrientationControls } from "three/examples/jsm/controls/DeviceOrientationControls";

import CityGrid from "./cityGrid";

import "./styles.scss";

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });
extend({ DeviceOrientationControls });

const City: React.FunctionComponent = () => {
    const MouseMoveControl = () => {
        const { camera, gl } = useThree();
        const { domElement } = gl;

        const oControls = useRef();
        const doControls = useRef();

        useFrame(({ camera, mouse }) => {
            if (oControls.current) {
                (oControls.current as any).dispose();
                (oControls.current as any).update();
            }

            let deviceOrientationOffset = 0;
            if (doControls.current) {
                const gamma = (doControls.current as any).deviceOrientation.gamma || 0;
                deviceOrientationOffset = gamma / 90;
                (doControls.current as any).dispose();
                (doControls.current as any).update();
            }

            const newMouseX = mouse.x * 5 - deviceOrientationOffset;
            console.log(doControls.current, deviceOrientationOffset, newMouseX);
            camera.position.set(newMouseX, camera.position.y, camera.position.z);
        });

        return <React.Fragment>
            {// @ts-ignore
                <deviceOrientationControls ref={doControls} args={[camera, domElement]} />}
            {// @ts-ignore
                <orbitControls ref={oControls} args={[camera, domElement]} />}
        </React.Fragment>;
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
