var DitherShader = {

	uniforms: {
		"tDiffuse": { value: null },
		"tDither": { type: "t", value: null },
		"resolution": { value: new THREE.Vector3() },
	},

    vertexShader: `
    varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}    
    `,
	fragmentShader: `
		uniform vec3 resolution;
		uniform sampler2D tDiffuse;
		uniform sampler2D tDither;
		uniform float test;
		varying vec2 vUv;

		void main () {
			vec2 uv = gl_FragCoord.xy / vec2(5.0, 5.0);

			vec4 color = texture2D( tDiffuse, vUv );
			vec4 ditherColor = texture2D(tDither, uv);
			
			vec4 pos = gl_FragCoord;
			float grey = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
			// grey = grey / 0.039;
			// grey = floor(grey + 0.5);
			// grey = grey * 0.039;
			gl_FragColor = vec4(step(ditherColor.r, grey)); 
			
		}
	`
};

export { DitherShader };