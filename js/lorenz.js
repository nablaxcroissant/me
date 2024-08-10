import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById("lorenz");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );
renderer.setAnimationLoop( animate );

parent = canvas.parentElement;
canvas.replaceWith(renderer.domElement);

const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
camera.position.z = 80;

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 50;
controls.maxDistance = 100;

class Lorenz {
    constructor(a, b, c, x, y, z) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    iterate() {
        this.update();
        return new THREE.Vector3(this.x, this.y, this.z);
    }

    update() {
        let dt = 0.01;
        let dx = this.a * (this.y - this.x);
        let dy = this.x * (this.b - this.z) - this.y;
        let dz = this.x * this.y - this.c * this.z;
        this.x += dx * dt;
        this.y += dy * dt;
        this.z += dz * dt;
    }
}

let lorenz = new Lorenz(10, 28, 8/3, 0, 1, 0);
let points = [];

for (let i = 0; i < 1000000; i++) {
    points.push(lorenz.iterate());
}

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const path = new THREE.Line(geometry, material);


scene.add(path);

let count = 10;
function animate() {
    geometry.setDrawRange(0, count);

    renderer.render( scene, camera );
    if (count < points.length) {
        count += 10;
    }
}
  


