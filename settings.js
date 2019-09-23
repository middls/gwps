const path = require('path');
const fs = require('fs');
const express = require("express");
const opn = require('opn');
const app = express();
const defaultSettings = require('./tools/default-settings.json');

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, 'tools/settings.html'));
})

app.get("/api/settings", (req, res) => { 
    res.status(200).send(defaultSettings);
})

app.get("/save", (req, res) => {
    let dir = path.join(__dirname, 'tmp/settings')
    try {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    } catch (err) {
        console.error(err);
    }
    res.status(200).json({success: true});
});

const port = process.env.PORT || "3005";
app.listen(port, () => {
    console.log(`Server is up on port ${port}...`);
    opn('http://localhost:3005');
});
