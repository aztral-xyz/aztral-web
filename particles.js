class QuantumButterflySimulator {
    constructor() {
        this.particleCount = 1337;
        this.butterflies = [];
        this.initQuantumField();
    }

    initQuantumField() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#quantum-field') });
        
        this.geometry = new THREE.BufferGeometry();
        this.material = new THREE.PointsMaterial({
            size: 0.8,
            vertexColors: true,
            transparent: true,
            blending: THREE.AdditiveBlending
        });

        this.initParticles();
        this.animate();
    }

    initParticles() {
        const positions = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);
        
        // Quantum positioning algorithm
        for(let i = 0; i < this.particleCount; i++) {
            positions[i*3] = (Math.random() - 0.5) * 100;
            positions[i*3+1] = (Math.random() - 0.5) * 100;
            positions[i*3+2] = (Math.random() - 0.5) * 100;
            
            // Chromodynamic coloring
            colors[i*3] = Math.sin(i) * 0.5 + 0.5;
            colors[i*3+1] = Math.cos(i * 0.1) * 0.5 + 0.5;
            colors[i*3+2] = Math.atan(i * 0.01) * 0.5 + 0.5;
        }

        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        this.particleSystem = new THREE.Points(this.geometry, this.material);
        this.scene.add(this.particleSystem);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        const positions = this.geometry.attributes.position.array;
        
        // Chaotic flutter algorithm
        for(let i = 0; i < this.particleCount; i++) {
            positions[i*3] += Math.sin(Date.now() * 0.001 + i) * 0.1;
            positions[i*3+1] += Math.cos(Date.now() * 0.001 + i) * 0.1;
            positions[i*3+2] += Math.tan(Date.now() * 0.001 + i) * 0.1;
        }

        this.geometry.attributes.position.needsUpdate = true;
        this.renderer.render(this.scene, this.camera);
    }
}
