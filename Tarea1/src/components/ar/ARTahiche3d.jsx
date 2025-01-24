import "../../styles.css"
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./model.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.6} />
    </>
  );
};

export default function ARtahiche3d() {
  return (
    <div className="ARtahiche3d">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
