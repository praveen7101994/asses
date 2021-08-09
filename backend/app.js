const express = require('express')
var router = express.Router()
const app = express()
const PORT = 5000;
const bodyparser = require('body-parser')
require('./db/mongoose')
const cors = require('cors');
app.use(cors());
app.use(bodyparser.json());
const { createProxyMiddleware } = require('http-proxy-middleware');
const TaskRouter = require('./routes/task')

app.use('/Task', TaskRouter)


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
// TZTZQRRBL6qUNxsy mongodb password