const express = require('express');
const Beach = require('../models/beach')

const beachesRouter = express.Router();

beachesRouter.route('/')
.get((req, res, next) => {
    res.render('beaches/index')
})
.post((req, res) => {
    res.render('beaches/done')
});

beachesRouter.route('/new')
.get((req, res) => {
    res.render('beaches/new', { beach: new Beach() })
})
module.exports = beachesRouter;