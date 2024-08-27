const express = require("express");
const path = require('path');

const app = express();


app.use('/static', express.static(path.resolve(__dirname, 'src', 'static')));

app.get('/*', (req, res) =>
{
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'), function (err)
    {
        if (err)
        {
            res.status(500).send(err)
        }
    })
});

app.listen(5051, () => console.log('Server running...... '));