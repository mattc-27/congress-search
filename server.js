const express = require("express");
const path = require("path");

require('dotenv').config();

const fs = require("fs/promises");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5000'],
  methods: 'GET, POST, PUT',
  allowedHeaders: 'Content-Type,Authorization'
};

const app = express();

app.use(compression());
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Static file setup
app.use(express.static(path.join(__dirname, "dist")));


// API routes
app.get("/api/backend_test", async (req, res) => {
  try {
    const result = await pool.query(
      "select * from recipes"
    )
    res.send({ recipes: result.rows });
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/api/lookup-member/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`https://api.congress.gov/v3/member/${id}?api_key=${process.env.API_KEY}`)
    const data = await response.json()
    //console.log(data)
    res.status(200).send({ results: data })
  } catch (error) {
    console.group(error)
    return res.status(500).json(error);
  }
});

app.get('/api/members-state/:stateCode', async (req, res) => {
  const { stateCode } = req.params;
  try {
    const response = await fetch(
      `https://api.congress.gov/v3/member/${stateCode}?api_key=${process.env.API_KEY}&limit=200`)
    const data = await response.json()
    console.log(data)
    res.send({ results: data })
  } catch (error) {
    console.error(error.message)
  }
});

app.get("/api/fetch-legislation/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`https://api.congress.gov/v3/member/${id}/sponsored-legislation?api_key=${process.env.API_KEY}&limit=5`)
    const data = await response.json()
    //console.log(data)
    res.status(200).send({ results: data })
  } catch (error) {
    console.error(error.message)
  }
});

app.get("/api/other_test", async (req, res) => {
  try {
    res.send(JSON.stringify({ Express: 'Back end is connected' }));
  } catch (error) {
    console.error(error.message);
  }
});


// Route for serving HTML files
app.use("*", async (req, res) => {
  let url = req.originalUrl;
  let appDirectory = url.startsWith("/blog") ? "blog" : "";
  let htmlFileToLoad = path.join("dist", appDirectory, "index.html");

  try {
    let html = await fs.readFile(path.join(__dirname, htmlFileToLoad), "utf8");
    res.setHeader("Content-Type", "text/html");
    return res.status(200).end(html);
  } catch (error) {
    console.error(error.stack);
    return res.status(500).end(error.stack);
  }
});


// Setup default port
app.set('port', process.env.PORT || 5000);

// Start express app
app.listen(app.get('port'), () => {
  console.log(`Server running at port: ${app.get('port')}`)
});
