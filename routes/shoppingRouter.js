const express = require('express');

const shoppingRouter = express.Router();

shoppingRouter.route('/')
.get((req, res, next) => {
    res.send('Hello Shopping')
})

module.exports = shoppingRouter;