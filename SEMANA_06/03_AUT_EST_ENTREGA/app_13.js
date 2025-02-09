const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

const port = 3051;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'curriculo_db.db';

app.use(express.static("./client"));

app.use(express.json());

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

app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});
