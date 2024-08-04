import * as THREE from 'three';

export function lorenz() {
       

    const canvases = document.getElementsByClassName("bullet");

    const elements = Array.prototype.filter.call(canvases, (canvas) => {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( 25, 25 );
        renderer.setAnimationLoop( animate );
        renderer.domElement.style.display = "inline-block";

        canvas.setAttribute("width", 25);
        canvas.setAttribute("height", 25);

        parent = canvas.parentElement;
        canvas.replaceWith(renderer.domElement);

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 2;

        function animate() {

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        }
 
    });

}