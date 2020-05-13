const express = require('express');

const app = express();
const port = 3000;

const zens = [
    "Be lazy",
    "Best is the enemy of good"
]

app.get('/', (req, res) => {
    let i = Math.floor(Math.random() * zens.length);
    res.send(zens[i]);
});

app.listen(port, () => console.log(`Zen running on port ${port}`));
