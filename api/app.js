const app = require('express')();
const PORT = 8080;

app.listen(PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
    );

app.get('/teda', (req, res) => {
    res.status(200).send({
        slackUsername:'Teda',
        backend: true,
        age: 21,
        bio:'I am a backend javascript developer.'
    })
});