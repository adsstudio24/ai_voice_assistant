const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'uk-UA';

recognition.onresult = async (event) => {
    const command = event.results[0][0].transcript;
    document.getElementById('output').innerText = `Команда: ${command}`;

    const response = await fetch('http://localhost:5000/command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command })
    });
    const data = await response.json();
    alert(`Відповідь: ${data.response}`);
};

function startListening() {
    recognition.start();
}
