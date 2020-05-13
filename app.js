const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const zens = [
    "Be lazy",
    "Best is the enemy of good",
    "A problem well-stated is half solved",
    "He who angers you conquers you",
    "Accept that the future will play out differently than you think it will"
]

app.get('/', (req, res) => {
    let i = Math.floor(Math.random() * zens.length);
    res.send(zens[i]);
});

app.listen(port, () => console.log(`Zen running on port ${port}`));
