import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
function Scene() {
 const gltf = useLoader(GLTFLoader, '/model.gltf')
 return <primitive object={gltf.scene} position={[0,0,-5]}/>
}
export default Scene