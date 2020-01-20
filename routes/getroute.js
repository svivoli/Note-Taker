const path = require('path');
const fs = require('fs');

module.exports = (app) => {
    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });
};