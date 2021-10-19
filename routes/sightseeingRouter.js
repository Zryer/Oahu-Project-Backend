const express = require('express');

const sightseeingRouter = express.Router();

sightseeingRouter.route('/')
.get((req, res, next) => {
    res.send('Hello Sights')
})

module.exports = sightseeingRouter;