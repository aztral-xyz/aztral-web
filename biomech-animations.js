class BiomechAnimator {
    constructor() {
        this.initFloatingDNA();
        this.initNeuralPulses();
    }

    initFloatingDNA() {
        gsap.to("#dna-loader", {
            duration: 10,
            rotationY: 360,
            repeat: -1,
            ease: "none"
        });
    }

    initNeuralPulses() {
        const synapses = document.querySelectorAll('.synapse-node');
        synapses.forEach(node => {
            setInterval(() => {
                gsap.to(node, {
                    duration: 0.5,
                    scale: 1.2,
                    yoyo: true,
                    repeat: 1
                });
            }, Math.random() * 2000 + 1000);
        });
    }
}

new BiomechAnimator();
