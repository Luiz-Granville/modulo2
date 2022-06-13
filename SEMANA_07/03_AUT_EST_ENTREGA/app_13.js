const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

const port = 3051;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'curriculo_db.db';

app.use(express.static("./client"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// var db = new sqlite3.Database(DBPATH);
// db.run(`
// CREATE TABLE habilidades (
//  id INTEGER PRIMARY KEY AUTOINCREMENT,
// nome TEXT
// );
// `)
app.get('/information', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var sql = 'SELECT * FROM curriculo_db';

  db.all(sql, [], (err, row) => {
    if (err) {
      throw err;
    }
    res.json(row);
  });
  db.close
});

app.post("/habilidades", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { nome } = req.body;
  var db = new sqlite3.Database(DBPATH);
  var sql = 'INSERT INTO habilidades (nome) VALUES (?)';
  db.run(sql, [nome], (result, err) => {
    res.json("Sucesso")
  })

});

app.put("/habilidades/:id", urlencodedParser, (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.statusCode = 200;
  // console.log(JSON.parse(req.body))
  const { nome } = req.body;
  var db = new sqlite3.Database(DBPATH);
  var sql = 'UPDATE habilidades SET nome = ? WHERE id = ?';
  db.run(sql, [nome, req.params.id], (result, err) => {
    res.json("Sucesso")
  })

}); 
app.get("/habilidades", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.statusCode = 200;
  var db = new sqlite3.Database(DBPATH);
  var sql = 'SELECT * FROM habilidades';
  db.all(sql, (err, rows) => {
    res.json(rows)
  })

});
app.delete("/habilidades/:id", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.statusCode = 200;
  var db = new sqlite3.Database(DBPATH);
  var sql = 'DELETE FROM habilidades WHERE id=' + req.params.id;
  db.run(sql, (result, err) => {
    res.json("Sucesso")
  })

});

app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});
