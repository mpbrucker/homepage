var scene;
var camera;
var renderer;
var cube;
var composer;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    composer = new EffectComposer(renderer);
    composer.setSize(window.innerWidth, window.innerHeight);
    var renderPass = new THREE.RenderPass( scene, camera );
    composer.addPass(renderPass);


    initScene();
}

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}

function initScene() {
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    camera.position.x = 3;
}