const express = require('express');

const indexRouter = express.Router();

indexRouter.route('/')
.get((req, res, next) => {
    res.send('Hello Index')
})

module.exports = indexRouter;