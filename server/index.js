'use strict';

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import conf from './config.js';
import router from './router.js';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

app.listen(conf.port, () => {
  console.log(`Server listening on port ${conf.port}`)
});