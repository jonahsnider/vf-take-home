import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

import * as routes from './routes';

// Create Express server
const app = express();

// Express configuration
app.use(express.static('static'));
app.set('port', 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.post('/message', routes.onMessage);

export default app;
