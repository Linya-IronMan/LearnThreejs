import * as THREE from "three";

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(100, 100, 100);

const material = new THREE.MeshLambertMaterial({
	color: 0xfff000,
	transparent: true,
	opacity: 0.5,
});

const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);

scene.add(mesh);

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const pointLight = new THREE.PointLight(0xffffff, 1.0);
// 强度
pointLight.intensity = 1.0;
pointLight.decay = 0.0; // 不随着距离衰减
pointLight.position.set(400, 200, 300);
scene.add(pointLight);

const width = 800;
const height = 500;

const camera = new THREE.PerspectiveCamera(20, width / height, 0.1, 3000);
camera.position.set(200, 200, 200);

camera.lookAt(mesh.position);
// camera.lookAt(0, 10, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);
