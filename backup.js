if (!window.THREE) {
    console.warn('Three.js not loaded. Falling back to backup background.');
    document.getElementById('three-container').style.background = 'linear-gradient(45deg, #0a0a0a, #1a1a1a)';
}
