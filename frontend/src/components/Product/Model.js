import React from 'react';
import {Canvas} from "@react-three/fiber";
import { ARButton, XR } from '@react-three/xr';
import ModelHit from './ModelHit';
import "./Model.css";

const Model = () => {
    return (
        <>
            <ARButton sessionInit={{requiredFeatures:["hit-test"]}}/>
            <Canvas dpr={[1,2]} shadows style={{"position":"absolute"}}>
                <XR>
                    <ModelHit/>
                </XR>
            </Canvas>
        </>
    )
}

export default Model
