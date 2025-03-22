class DNACursor {
    constructor() {
        this.cursor = document.getElementById('dna-cursor');
        this.initCursorTracking();
        this.initTrailEffect();
    }

    initCursorTracking() {
        document.addEventListener('mousemove', (e) => {
            gsap.to(this.cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        });
    }

    initTrailEffect() {
        setInterval(() => {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            document.body.appendChild(trail);
            gsap.to(trail, {
                x: this.cursor.offsetLeft,
                y: this.cursor.offsetTop,
                opacity: 0,
                duration: 1,
                onComplete: () => trail.remove()
            });
        }, 50);
    }
}
