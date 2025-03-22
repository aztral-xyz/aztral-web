class HologramAnimator {
    constructor() {
        this.initNeuroInterface();
        this.initDataNodePulses();
    }

    initNeuroInterface() {
        gsap.from(".neuro-interface", {
            duration: 2,
            opacity: 0,
            y: 100,
            ease: "power4.out"
        });
    }

    initDataNodePulses() {
        document.querySelectorAll('.data-node').forEach(node => {
            node.addEventListener('mouseover', () => {
                gsap.to(node, {
                    duration: 0.3,
                    scale: 1.1,
                    boxShadow: '0 0 40px #00f3ff'
                });
            });
            
            node.addEventListener('mouseout', () => {
                gsap.to(node, {
                    duration: 0.3,
                    scale: 1,
                    boxShadow: '0 0 20px #00f3ff'
                });
            });
        });
    }
}
