const express = require('express');
const Response = require('../util/response');
const CakesService = require('../services/cakes.service');
const errorWrap = require('../util/errorWrap');
const router = express.Router();

router.get(
  '',
  errorWrap(async (req, res) => {
    const cakes = await CakesService.getCakes();
    res.json(new Response('Fetched cakes', cakes));
  })
);

router.get('/:id', (req, res) => {});

router.post('', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
