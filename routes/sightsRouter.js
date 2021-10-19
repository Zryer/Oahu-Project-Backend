const express = require('express');
const Sight = require('../models/sight')
const sightsRouter = express.Router();

sightsRouter.route('/')
.get((req, res, next) => {
    res.render('sights/index')
})
.post((req, res) => {
    res.render('sights/done')
});

sightsRouter.route('/new')
.get((req, res) => {
    res.render('sights/new', { sight: new Sight() })
})
module.exports = sightsRouter;