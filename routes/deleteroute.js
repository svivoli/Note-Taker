const fs = require('fs');

module.exports = (app) => {
    app.delete("/api/notes/:id", function (req, res) {

        let notes = fs.readFileSync("./db/db.json");

        notes = JSON.parse(notes);

        notes.splice(req, 1);

        fs.writeFile("./db/db.json", JSON.stringify(notes), () => {
            console.log("Note deleted.");
        });

        res.json(notes);
    });
};