export const fragmentShader = `
    uniform float time;
    uniform vec2 resolution;
    varying vec2 vUv;

    void main() {
        vec2 uv = vUv * 2.0 - 1.0;
        uv.x *= resolution.x / resolution.y;

        float wave = sin(uv.x * 10.0 + time) * 0.1;
        vec3 color = vec3(0.1, 0.0, 0.3) + vec3(0.0, 0.0, wave);

        gl_FragColor = vec4(color, 1.0);
    }
`;
