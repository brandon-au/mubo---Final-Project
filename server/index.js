require('dotenv/config');
// const path = require('path');
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
app.use(express.json());

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
  const { moodboardId, userId, name } = req.body;
  const url = `/images/${req.body.url}`;

  const sql = `
    insert into "moodboards" ("moodboardId", "userId", "name", "url")
    values ($1, $2, $3, $4)
    returning *
  `;
  const params = [moodboardId, userId, name, url];
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
