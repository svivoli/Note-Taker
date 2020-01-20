const fs = require('fs');

module.exports = (app) => {

    app.post("/api/notes", function (req, res) {
        let noteArray = [];

        const database = fs.readFileSync('./db/db.json');

        if (database.length > 0) {
            noteArray = JSON.parse(database);
        }

        const note = {
            id: noteArray.length + 1,
            title: req.body.title,
            text: req.body.text
        }

        noteArray.push(note);

        fs.writeFile("./db/db.json", JSON.stringify(noteArray), () => {
            console.log("Note written to database.");
        });

        res.json(note);
    });

};

