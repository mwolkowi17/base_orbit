import * as THREE from 'three';

const color1 = 0xFFFFFF;
const intensity1 = 0.2;
export const light2 = new THREE.DirectionalLight(color1, intensity1);
light2.position.set(-10, 10, 0);
light2.target.position.set(-5, 0, 0);
