import { useLoader } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelHelp = ({position})=>{
    const { product } = useSelector(
        (state) => state.productDetails
    );
    const modelUrl = product.modelUrl

    const gltf = useLoader(GLTFLoader, modelUrl);
    
    return (
        <Suspense fallback={null}>
            <primitive position={position} object={gltf.scene}/>
        </Suspense>
    )
}

export default ModelHelp
