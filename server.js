if (process.env.NODE_ENV !== 'production'){
require('dotenv').config()
}

const express = require('express');
const indexRouter = require('./routes/indexRouter');
const beachesRouter = require('./routes/beachesRouter');
const personalRouter = require('./routes/personalRouter');
const restaurantsRouter = require('./routes/restaurantsRouter');
const shoppingRouter = require('./routes/shoppingRouter');
const sightsRouter = require('./routes/sightsRouter');
const traditionsRouter = require('./routes/traditionsRouter');


const app = express();
const expressLayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection;
  db.on('error', (error) => console.error(error))
  db.once('open', () => console.log('Connected to Database'))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/beaches', beachesRouter);
app.use('/personal', personalRouter);
app.use('/restaurants', restaurantsRouter);
app.use('/shopping', shoppingRouter);
app.use('/sights', sightsRouter);
app.use('/traditions', traditionsRouter);



app.use(express.urlencoded({ limit: '10mb', extended: false }))
app.use(express.json());



app.listen(process.env.PORT || 3000, () => console.log('Server Started'));
