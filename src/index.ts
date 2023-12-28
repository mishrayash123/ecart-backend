const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const dotenv = require('dotenv');

const router = require('./router');
const mongoose = require('mongoose');

dotenv.config();

const DB = process.env.DATABASE;

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on 8080');
});



mongoose.Promise = Promise;
mongoose.connect(DB).then(() => {
  console.log('connected successfully');
}).catch((err:string) => console.log('not connected'));
// mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());
