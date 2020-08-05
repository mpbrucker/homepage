function vertexShader() {
    return `
    varying vec2 vUv; 

    void main() {
      vUv = uv; 
      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
    `
}

function fragmentShader() {
    return `
    uniform vec3 colorA; 
    uniform vec3 colorB; 
    varying vec3 vUv;

    void main() {
        gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);
    }
    `
}

AFRAME.registerComponent('custom-shader', {
    init: function() {
        let uniforms = {
            colorB: {type: 'vec3', value: new THREE.Color(0xACABE5)},
            colorA: {type: 'vec3', value: new THREE.Color(0x74ebd5)}
        };

        let material =  new THREE.ShaderMaterial({
            uniforms: uniforms,
            fragmentShader: fragmentShader(),
            vertexShader: vertexShader(),
        });

        this.el.getObject3D('mesh').material = material;
    }
})

AFRAME.registerComponent('point-at-camera', {
    // schema: {default: 0.5}

    init: function() {
        console.log('init');
        this.raycaster = new THREE.Raycaster();
        this.mousePos = new THREE.Vector3();
        this.pos = new THREE.Vector3();
        this.camera = document.querySelector("[camera]").getObject3D('camera');
        console.log(this.camera)

        document.addEventListener('mousemove', (e) => this.update(e));
    },

    update: function(e) {
        if (e) {
            this.mousePos.set(
                ( event.clientX / window.innerWidth ) * 2 - 1,
                - ( event.clientY / window.innerHeight ) * 2 + 1,
                -5 );
            // this.mousePos.unproject(this.camera);
            // this.mousePos.sub( this.camera.position ).normalize();


            // let distance = (-1- this.camera.position.z) / this.mousePos.z;

            this.pos.copy( this.camera.position ).add( this.mousePos.multiplyScalar( 100 ) );
            this.el.object3D.lookAt(this.pos);
        }
    }
})

function animate() {
    
}