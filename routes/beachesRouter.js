const express = require('express');

const beachesRouter = express.Router();

beachesRouter.route('/')
.get((req, res, next) => {
    res.send('Hello Beaches')
})

module.exports = beachesRouter;