import express, { Router } from 'express';
import cors from 'cors';
import compression from 'compression';

import routes from './routes/index';
import { Route } from './types';

const app = express();
const PORT = 3000;

/**
 * Setup CORS
 */
const whitelist: string[] = [];
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

// setup other important middleware for our express app
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes.forEach((routeItem: Route) => {
  app.use(routeItem.path, routeItem.router);
});

app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
});
