var DitherShader = {

	uniforms: {
		"tDiffuse": { value: null },
		"tDither": { type: "t", value: null },
		"resolution": { value: new THREE.Vector3() },
		"time": { value: 0.0 },
	},

    vertexShader: `
	varying vec2 vUv;
	uniform float time;
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
			vec2 uv = gl_FragCoord.xy / vec2(8.0, 8.0);

			vec4 color = texture2D( tDiffuse, vUv );
			vec4 ditherColor = texture2D(tDither, uv);
			
			vec4 pos = gl_FragCoord;
			float grey = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
			// grey = grey / 0.039;
			// grey = floor(grey + 0.5);
			// grey = grey * 0.039;
			// float gVal = 1.0 - 0.4*step(grey, ditherColor.r);
			// float rVal = 1.0 - 0.9*step(grey, ditherColor.r);
			// float bVal = 1.0 - 0.98*step(grey, ditherColor.r);
			float gVal = 1.0 - step(grey, ditherColor.r);
			float rVal = 1.0 - step(grey, ditherColor.r);
			float bVal = 1.0 - step(grey, ditherColor.r);
			gl_FragColor = vec4(rVal, gVal, bVal, 1.0); 
			// gl_FragColor = color;
			
		}
	`
};

export { DitherShader };