//CaliperRenderer

var bRad = window.prompt("Enter the bottom radius","1");
var tRad = window.prompt("Enter the top radius","1");
var height = window.prompt("Enter the height","3");

////////
//Vars//
////////

var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xFF0000}));
var cylGeo = new THREE.CylinderGeometry(tRad, bRad, height, 20);
//Cyl (top radius, bot radius, height, number of sides)
var cyl = new THREE.Mesh(cylGeo, new  THREE.MeshBasicMaterial({color: 0xffff00}));
var plane = new THREE.Mesh(new THREE.CubeGeometry(10,.1,10), new THREE.MeshBasicMaterial({color: 0xff888888}));
var light = new THREE.AmbientLight(0x404040);
var cam = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var contr = new THREE.OrbitControls(cam, renderer.domElement);

///////
//Pos//
///////

//Cube
cube.position.x = -3;
cube.position.z = 3;
cube.position.y = 1;

//Cylinder
cyl.position.x = 0;
cyl.position.y = height/2;

//Plane
plane.position.y = 0;

//Camera
cam.position.set(5,5,5);
cam.lookAt(scene.position);

//Render
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

//Controls
contr.enableDamping = true;
contr.dampingFactor = 0.25;
contr.enableZoom = false;


///////
//Add//
///////

scene.add(cube);
scene.add(plane);
scene.add(light);
scene.add(cam);
scene.add(cyl);

///////
//Evt//
///////

window.addEventListener('resize', onWindowResize, false);

function onWindowResize(){
	cam.aspect = window.innerWidth/window.innerHeight;
	cam.updateProjectionMatrix
	renderer.setSize(window.innerWidth, window.innerHeight);
};


var render = function () {
	requestAnimationFrame(render);
	renderer.render(scene, cam);
};
render();
