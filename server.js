const express = require('express');
const indexRouter = require('./routes/indexRouter');
const beachesRouter = require('./routes/beachesRouter');
const personalRouter = require('./routes/personalRouter');
const restaurantsRouter = require('./routes/restaurantsRouter');
const shoppingRouter = require('./routes/shoppingRouter');
const sightseeingRouter = require('./routes/sightseeingRouter');
const traditionsRouter = require('./routes/traditionsRouter');

const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');

app.use('/', indexRouter);
app.use('/beaches', beachesRouter);
app.use('/personal', personalRouter);
app.use('/restaurants', restaurantsRouter);
app.use('/shopping', shoppingRouter);
app.use('/sightseeing', sightseeingRouter);
app.use('/traditions', traditionsRouter);

app.listen(3000);