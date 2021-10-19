const express = require('express');

const restaurantsRouter = express.Router();

restaurantsRouter.route('/')
.get((req, res, next) => {
    res.send('Hello Restaurants')
})

module.exports = restaurantsRouter;