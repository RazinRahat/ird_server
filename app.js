const express = require('express');
const sqlite3 = require("sqlite3").verbose();
const cors = require('cors')
const app = express();
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5000;

const db = new sqlite3.Database('./dua_main.sqlite', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

app.get("/api/category", (req, res) => {
    var sql = "SELECT * FROM category"
    db.all(sql, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(400).json({"error":err.message});
            return;
        }
        console.log("Success")
        res.json({
            "message":"success",
            "data":rows
        })
    });
});

app.get("/api/sub_category", (req, res) => {
    var sql = "SELECT * FROM sub_category"
    db.all(sql, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(400).json({"error":err.message});
            return;
        }
        console.log("Success")
        res.json({
            "message":"success",
            "data":rows
        })
    });
});

app.get("/api/dua", (req, res) => {
    var sql = "SELECT * FROM dua"
    db.all(sql, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(400).json({"error":err.message});
            return;
        }
        console.log("Success")
        res.json({
            "message":"success",
            "data":rows
        })
    });
});

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

module.exports = app;