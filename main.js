// main.js

// Kontrollera om webbläsaren stödjer Web Speech API
console.log('Web Speech API är tillgängligt:', ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window));

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
}

