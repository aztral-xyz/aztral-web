const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 256;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

const audioElement = document.createElement('audio');
audioElement.src = 'assets/audio/background.mp3';
audioElement.loop = true;
audioElement.play();

const source = audioContext.createMediaElementSource(audioElement);
source.connect(analyser);
analyser.connect(audioContext.destination);

function visualizeAudio() {
    requestAnimationFrame(visualizeAudio);
    analyser.getByteFrequencyData(dataArray);

    
}
