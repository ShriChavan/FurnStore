import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Interactive, useHitTest, useXR } from '@react-three/xr';
import { useRef, useState } from 'react';
import ModelHelp from './ModelHelp';


const ModelHit = () => {
    const reticleRef = useRef();
    const [model,setModel] = useState([]);
    const {isPresenting} = useXR();

    useThree(({camera}) => {
        if (!isPresenting){
            camera.position.z = 3;
        }
    });

    useHitTest((hitMatrix,hit) => {
        hitMatrix.decompose(
            reticleRef.current.position,
            reticleRef.current.quaternion,
            reticleRef.current.scale
        );
        reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
    });

    const placeModel = (e) => {
        let position = e.intersection.object.position;
        let id = Date.now();
        setModel([{position, id}])
    }
    return (
        <>
            <OrbitControls/>
            <ambientLight intensity={3}/>
            {isPresenting && 
                model.map(({ position, id }) => {
                    return <ModelHelp key={id} position={position}/>
            })}
            {isPresenting && (
                <Interactive onSelect={placeModel}>
                <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
                    <ringGeometry args={[0.1,0.25,32]}/>
                </mesh>
                </Interactive>
            )}
            {!isPresenting && <ModelHelp/>}
            
        </>
    )
}

export default ModelHit
