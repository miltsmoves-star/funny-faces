// Face part options
const eyeOptions = ['👁️', '👀', '😳', '😵', '🤩'];
const noseOptions = ['👃', '🐽', '🔴', '🥕'];
const mouthOptions = ['😀', '😁', '😂', '🤪', '😝', '🤐'];

// Default face parts
const defaultFace = {
    eyes: '👁️',
    nose: '👃',
    mouth: '😀'
};

// Change eyes
function changeEyes(emoji) {
    const leftEye = document.getElementById('leftEye');
    const rightEye = document.getElementById('rightEye');
    
    leftEye.textContent = emoji;
    rightEye.textContent = emoji;
    
    // Add animation
    leftEye.style.animation = 'none';
    rightEye.style.animation = 'none';
    setTimeout(() => {
        leftEye.style.animation = 'blink 3s infinite';
        rightEye.style.animation = 'blink 3s infinite';
    }, 10);
}

// Change nose
function changeNose(emoji) {
    const nose = document.getElementById('nose');
    nose.textContent = emoji;
    
    // Add bounce animation
    nose.style.transform = 'scale(1.3)';
    setTimeout(() => {
        nose.style.transform = 'scale(1)';
    }, 200);
}

// Change mouth
function changeMouth(emoji) {
    const mouth = document.getElementById('mouth');
    mouth.textContent = emoji;
    
    // Add animation
    mouth.style.transform = 'scale(1.3)';
    setTimeout(() => {
        mouth.style.transform = 'scale(1)';
    }, 200);
}

// Animation constants
const SHAKE_DURATION = 500;

// Randomize face
function randomizeFace() {
    const randomEyes = eyeOptions[Math.floor(Math.random() * eyeOptions.length)];
    const randomNose = noseOptions[Math.floor(Math.random() * noseOptions.length)];
    const randomMouth = mouthOptions[Math.floor(Math.random() * mouthOptions.length)];
    
    // Add dramatic effect with delays
    setTimeout(() => changeEyes(randomEyes), 0);
    setTimeout(() => changeNose(randomNose), 150);
    setTimeout(() => changeMouth(randomMouth), 300);
    
    // Add shake effect to the face
    const face = document.getElementById('faceDisplay');
    face.style.animation = `shake ${SHAKE_DURATION}ms`;
    setTimeout(() => {
        face.style.animation = '';
    }, SHAKE_DURATION);
}

// Reset face to default
function resetFace() {
    changeEyes(defaultFace.eyes);
    changeNose(defaultFace.nose);
    changeMouth(defaultFace.mouth);
}

// Add smooth transition to face elements
document.addEventListener('DOMContentLoaded', () => {
    const nose = document.getElementById('nose');
    const mouth = document.getElementById('mouth');
    
    nose.style.transition = 'transform 0.2s ease';
    mouth.style.transition = 'transform 0.2s ease';
});
