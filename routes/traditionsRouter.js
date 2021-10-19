const express = require('express');

const traditionsRouter = express.Router();

traditionsRouter.route('/')
.get((req, res, next) => {
    res.send('Hello Traditions')
})

module.exports = traditionsRouter;