import * as THREE from 'three';

const materialB = new THREE.MeshBasicMaterial({ color: 0x0000FFFF });
const points = [];
points.push(new THREE.Vector3(- 10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
//points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometryB = new THREE.BufferGeometry().setFromPoints(points);
export const line = new THREE.Line(geometryB, materialB);