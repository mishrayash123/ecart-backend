import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import router from './router';
import mongoose from 'mongoose';

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

const MONGO_URL = "mongodb+srv://Yash123:Yash786@cluster0.yrprxjp.mongodb.net/"; 

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL).then(() => {
  console.log('connected successfully');
}).catch((err) => console.log('not connected'));
// mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());
