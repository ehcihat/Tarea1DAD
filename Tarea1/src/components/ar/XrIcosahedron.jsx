import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


function XrIcosahedron() {

    const icoRef = useRef();
    
    

    useFrame((state, delta) => {
        console.log(icoRef)    
        icoRef.current.rotation.x += delta;
    
    });

return (<>
    {}
    <OrbitControls />
    {}
    <ambientLight />
    {}
    <mesh ref={icoRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1,0]}/>
        <meshStandardMaterial color='red' />
    </mesh>
     

    </>

)
}

export default XrIcosahedron;
