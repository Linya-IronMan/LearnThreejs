import * as THREE from "three";
import "./App.css";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function App() {
	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera(
		45, // 视角越大，看到的内容越多
		window.innerWidth / window.innerHeight, // 宽高比
		0.1, // 近平面
		1000 //  远平面 相机最远能看到物体的距离
	);

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry(1, 1, 1);

	const material = new THREE.MeshBasicMaterial({ color: "0x00ff00" });

	// 创建网格
	const cube = new THREE.Mesh(geometry, material);

	// 世界坐标辅助器
	const axesHelper = new THREE.AxesHelper(5);

	// 添加轨道控制器
	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;

	controls.dampingFactor = 0.01;

	scene.add(controls);

	scene.add(axesHelper);
	scene.add(cube);

	camera.position.z = 5;
	camera.position.y = 5;
	camera.position.x = 5;
	camera.lookAt(0, 0, 0);

	function animate() {
		requestAnimationFrame(animate);
		controls.update();

		// 旋转
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		renderer.render(scene, camera);
	}

	animate();

	return <></>;
}

export default App;
