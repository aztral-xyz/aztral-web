class BioParticleSystem {
    constructor() {
        this.particles = [];
        this.initDNAStrandParticles();
    }

    initDNAStrandParticles() {
        for (let i = 0; i < 1000; i++) {
            this.particles.push({
                position: new THREE.Vector3(
                    Math.sin(i * 0.1) * 10,
                    i * 0.2,
                    Math.cos(i * 0.1) * 10
                ),
                velocity: new THREE.Vector3(
                    Math.random() * 0.1 - 0.05,
                    Math.random() * 0.1 - 0.05,
                    Math.random() * 0.1 - 0.05
                ),
                color: new THREE.Color().setHSL(i/1000, 0.9, 0.5)
            });
        }
        this.createTHREEScene();
    }

    createTHREEScene() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('cyber-jungle').appendChild(this.renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.particles.length * 3);
        const colors = new Float32Array(this.particles.length * 3);

        this.particles.forEach((particle, i) => {
            positions[i*3] = particle.position.x;
            positions[i*3+1] = particle.position.y;
            positions[i*3+2] = particle.position.z;
            
            colors[i*3] = particle.color.r;
            colors[i*3+1] = particle.color.g;
            colors[i*3+2] = particle.color.b;
        });

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        this.particleSystem = new THREE.Points(
            geometry,
            new THREE.PointsMaterial({ size: 0.5, vertexColors: true })
        );
        
        this.scene.add(this.particleSystem);
        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        this.particles.forEach((particle, i) => {
            particle.position.add(particle.velocity);
            
            if (particle.position.length() > 50) {
                particle.position.set(0, 0, 0);
            }
        });

        this.particleSystem.geometry.attributes.position.needsUpdate = true;
        this.renderer.render(this.scene, this.camera);
    }
}

new BioParticleSystem();
