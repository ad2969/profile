import React, { useRef, Suspense, RefObject } from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DeviceOrientationControls } from "components/three/legacy/DeviceOrientationControls";

import CityGrid from "./cityGrid";

import "./styles.scss";

interface Props {
    status: boolean;
}

const CAMERA_DEFAULT = { X: 0, Y: 50, Z: 250 };

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });
const dummyVec = new THREE.Vector3();

const City: React.FunctionComponent<Props> = ({ status }) => {
    const MouseMoveControl = () => {
        const { camera, gl } = useThree();
        const { domElement } = gl;

        const cam = useRef<THREE.PerspectiveCamera>() as RefObject<THREE.PerspectiveCamera>;
        const scene = new THREE.Scene();
        const oControls = useRef();
        const doControls = useRef<DeviceOrientationControls>();
        doControls.current = new DeviceOrientationControls(new THREE.PerspectiveCamera());

        const scrollElement = document.documentElement;
        const scrollMaximum = scrollElement ? scrollElement.scrollHeight - window.innerHeight : window.innerHeight;

        useFrame(({ camera, mouse }) => {
            if (oControls.current) {
                (oControls.current as any).dispose();
                (oControls.current as any).update();
            }
            const newScrollMultiplier = scrollElement ? scrollElement.scrollTop / scrollMaximum || 0 : 0;
            const newZoomValue = CAMERA_DEFAULT.Z - newScrollMultiplier * (CAMERA_DEFAULT.Z * 0.85);
            const newZoomAngle = CAMERA_DEFAULT.Y - newScrollMultiplier * (CAMERA_DEFAULT.Y * 0.85);

            let deviceOrientationOffset = 0;
            if (doControls.current) {
                (doControls.current as any).update();

                const gamma = (doControls.current as any).deviceOrientation.gamma || 0;
                deviceOrientationOffset = gamma / 5;
            }

            const newCameraX = mouse.x * 5 - deviceOrientationOffset;
            camera.position.lerp(dummyVec.set(newCameraX, newZoomAngle, newZoomValue), 0.05);

            if (cam.current) {
                (cam.current as any).position.copy(camera.position);
                (cam.current as any).updateMatrixWorld();
                gl.render(scene, cam.current);
            }
        });

        return <React.Fragment>
            <perspectiveCamera ref={cam} />
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
            className="city-canvas"
            camera={{ fov: 20, near: 1, far: 1000, position: [CAMERA_DEFAULT.X, CAMERA_DEFAULT.Y, CAMERA_DEFAULT.Z] }} // THREE.Perspective camera props
            orthographic={false} // THREE.Orthographic camera
            shadows={true} // THREE.PCFSoftShadowMap
        >
            {/* EFFECTS */}
            <fog attach="fog" args={["#fff", 1, 270]} />

            <group>
                {/* LIGHTS */}
                <ambientLight intensity={0.01} />
                <spotLight args={["#fff", 1]} position={[0, 100, -50]} angle={1} castShadow />
                {/* <pointLight args={["#f00", 0.01]} position={[0, 0, 0]} castShadow /> */}

                {/* BUILDINGSs */}
                <Suspense fallback={<mesh></mesh>}>
                    <CityGrid status={status}/>
                </Suspense>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
                    <planeGeometry args={[200, 200]} />
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
