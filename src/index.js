import * as THREE from 'three';
import { Scene } from 'three';
import {cube} from './cube.js';
import {line} from './line.js';
import {light} from './hemi_light.js';
import {light2} from  './directional_light.js';


// input segment
const btn = document.getElementById("action");

btn.addEventListener("click", function () {
    //Do something here
    let boxwidthinput = document.getElementById("myInput").value;
    let boxwidthinputnumber = parseFloat(boxwidthinput);
    if (boxwidthinputnumber != 0) {
        cube.scale.x = boxwidthinputnumber;
    }

    //cube.position.x=2;
});
// position segment

const btnposition = document.getElementById("actionPosition");

btnposition.addEventListener("click", function(){
    let boxpositionxinput = document.getElementById("positionInput").value;
    let boxpositionxinputnumber = parseFloat(boxpositionxinput);
    if (boxpositionxinputnumber != 0) {
        cube.position.x = boxpositionxinputnumber;
    }
})
//cube.position.x=2; do zrobienia




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

cube.add(line);
scene.add(cube);
scene.add(light);
scene.add(light2);
scene.add(light2.target);

camera.position.z = 5;


const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);


};

animate();