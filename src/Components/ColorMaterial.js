import * as THREE from "three";
import { extend } from "react-three-fiber";

class ColorMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 1.0 },
        color: { value: new THREE.Color(0.2, 0.0, 0.1) },
        color1: { value: new THREE.Color(0.2, 0.0, 0.1) },
        color2: { value: new THREE.Color(0.2, 0.0, 0.1) },
      },
      vertexShader: `varying vec2 vUv;
      varying vec3 vNormal;
        void main(){
            vUv = uv;
            vNormal = normal;
            gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); 
        }`,
      fragmentShader: `uniform float time;
        uniform vec3 color;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec3 vNormal;
        varying vec2 vUv;
        void main(){  
            float c0 = abs(dot(vNormal, vec3(1.,0.,0.)));
            float c1 = abs(dot(vNormal, vec3(0.,1.,0.)));
            float c2 = abs(dot(vNormal, vec3(0.,0.,1.)));
            vec3 finalColor = c0*color + c1*color1 + c2*color2;
            gl_FragColor.rgba = vec4(finalColor, 1.0); 
        }`,
    });
  }
  get color() {
    return this.uniforms.color.value;
  }
  get color1() {
    return this.uniforms.color1.value;
  }
  get color2() {
    return this.uniforms.color2.value;
  }
  get time() {
    return this.uniforms.time.value;
  }
  set time(v) {
    return (this.uniforms.time.value = v);
  }
}

extend({ ColorMaterial });
