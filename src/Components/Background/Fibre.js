import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./Fibre.css";
import "./ColorMaterial";
import clamp from "clamp";

import styled from "styled-components";

import {
  ChromaticAberration,
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  DotScreen,
  HueSaturation,
} from "react-postprocessing";

import { BlendFunction } from "postprocessing";

var colors = require("nice-color-palettes");

console.log(colors.length);
let pallete = colors[96];

const Fibre = () => {
  const easeInOutQuint = function (pos) {
    if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 5);
    return 0.5 * (Math.pow(pos - 2, 5) + 2);
  };

  const tempObject = new THREE.Object3D();
  function Box({ count }) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame((state) => {
      //mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
      //console.log(state);

      let i = 0;
      let time = state.clock.getElapsedTime() % 6;
      let playhead = time / 6;
      let number = count;
      for (let x = 0; x <= number; x++) {
        for (let z = 0; z <= number; z++) {
          let offset =
            Math.sqrt((x / number - 0.5) ** 2 + (z / number - 0.5) ** 2) /
            Math.sqrt(0.5 ** 2 + 0.5 ** 2);
          const id = i++;
          let progress = easeInOutQuint(
            clamp((playhead - 0.4 * offset) / 0.6, 0, 1)
          );
          tempObject.position.set(
            30 * (x / number - 0.5) + progress * 1.5,
            offset * 0,
            30 * (z / number - 0.5)
          );
          //tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(x / 4 + time);
          tempObject.rotation.y = progress * Math.PI * 2;
          let sine = Math.sin(progress * Math.PI);
          const scale = 1;
          tempObject.scale.set(
            scale + 0.5 * sine,
            scale + 0.5 * sine,
            scale + 0.5 * sine
          );
          tempObject.updateMatrix();
          mesh.current.setMatrixAt(id, tempObject.matrix);
        }
      }
      mesh.current.instanceMatrix.needsUpdate = true;
    });
    return (
      <instancedMesh ref={mesh} args={[null, null, 1000]}>
        <boxBufferGeometry args={[0.3, 3.3, 0.3]} />
        {/* <meshStandardMaterial color={"hotpink"} /> */}
        <colorMaterial
          color={pallete[1]}
          color1={pallete[2]}
          color2={pallete[3]}
          attach="material"
        />
      </instancedMesh>
    );
  }

  function CameraMovement() {
    useFrame(({ clock, camera }) => {
      var rotSpeed = 0.0003;
      var x = camera.position.x;
      var y = camera.position.y;
      var z = camera.position.z;
      camera.position.y = y * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
      camera.position.z = z * Math.cos(rotSpeed) - y * Math.sin(rotSpeed);
    });
    return null;
  }

  return (
    <React.Fragment>
      <StyledName>
        "Only those who attempt the absurd, can achieve the impossible"
      </StyledName>
      <Canvas
        onCreated={({ gl }) => {
          gl.setClearColor(pallete[4]);
        }}
        camera={{ position: [0, 10, 0] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} count={20} />
        <EffectComposer>
          <ChromaticAberration offset={[-0.001, 0.005]} />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          {/* <DotScreen
          blendFunction={BlendFunction.NORMAL} // blend mode
          angle={Math.PI * 0.5} // angle of the dot pattern
          scale={0.9} // scale of the dot pattern
        /> */}
          <HueSaturation
            blendFunction={BlendFunction.NORMAL} // blend mode
            hue={0} // hue in radians
            saturation={0.2} // saturation in radians
          />
        </EffectComposer>
        <CameraMovement />
        <OrbitControls />
      </Canvas>
    </React.Fragment>
  );
};

export default Fibre;

const StyledName = styled.div`
  font-size: 4em;
  text-align: center;
  margin-top: 20%;
  margin-left: 10%;
  margin-right: 10%;
  color: #fcedd8;
  font-family: "Niconne", cursive;
  font-weight: 700;
  text-shadow: 5px 5px 0px #eb452b;
  position: absolute;
  z-index: 2;
`;
