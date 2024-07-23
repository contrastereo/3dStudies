import * as Three from 'three';

//initial size
const canvas = document.querySelector('canvas') as HTMLCanvasElement;

//Scene
const scene = new Three.Scene();

//Red Cube
const geometry = new Three.BoxGeometry(1, 1, 1);
const material = new Three.MeshBasicMaterial({ color: 'red' });
const mesh = new Three.Mesh(geometry, material);
scene.add(mesh);

const sizes = { width: 800, height: 600 };

//Camera
const camera = new Three.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 0.5;
camera.position.y = 0.2;
scene.add(camera);

// Renderer
const renderer = new Three.WebGLRenderer({
	canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
