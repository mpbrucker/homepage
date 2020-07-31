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
                0.5 );
            this.mousePos.unproject(this.camera);
            this.mousePos.sub( this.camera.position ).normalize();


            let distance = (-5 - this.camera.position.z) / this.mousePos.z;

            this.pos.copy( this.camera.position ).add( this.mousePos.multiplyScalar( distance ) );
            console.log(this.pos);
            this.el.object3D.lookAt(this.pos);
        }
    }
})