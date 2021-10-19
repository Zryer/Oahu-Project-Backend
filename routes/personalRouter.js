const express = require('express');

const personalRouter = express.Router();

personalRouter.route('/')
.get((req, res, next) => {
    res.send('Hello Personal Page')
})
.post((req, res, next) => {
    res.send('Created')
})
.put((req, res, next) => {
    res.send('Your Updated Info')
})
.delete((req, res, next) => {
    res.send('You deleted this')
})

module.exports = personalRouter;