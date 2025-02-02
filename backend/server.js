const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

app.post('/command', (req, res) => {
    const command = req.body.command;
    exec(command, (error, stdout) => {
        if (error) return res.status(500).json({ error: error.message });
        res.json({ response: stdout });
    });
});

app.listen(5000, () => console.log('Сервер асистента запущено на порту 5000'));
