require('dotenv/config');
const pg = require('pg');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const uploadsMiddleware = require('./uploads-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);

app.get('/api/moodboards', (req, res, next) => {
  const sql = `
    select "moodboardId",
           "userId",
           "name",
           "url"
  from "moodboards"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.post('/api/moodboards', uploadsMiddleware, (req, res, next) => {
  const url = `/images/${req.file.filename}`;
  const sql = `
    insert into "images" ("url")
    values ($1)
    returning *
  `;
  const params = [url];
  db.query(sql, params)
    .then(result => {
      const [image] = result.rows;
      res.status(201).json(image);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
