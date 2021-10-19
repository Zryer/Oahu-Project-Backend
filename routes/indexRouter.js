const express = require('express');

const indexRouter = express.Router();

indexRouter.route('/')
.get((req, res, next) => {
    res.render('index')
})

module.exports = indexRouter;