const express = require('express');
const Response = require('../util/response');
const CakesService = require('../services/cakes.service');
const errorWrap = require('../util/errorWrap');
const router = express.Router();

router.get(
  '',
  errorWrap(async (_, res) => {
    const cakes = await CakesService.getAll();
    return res.json(new Response('Fetched cakes', cakes));
  })
);

router.get(
  '/:id',
  errorWrap(async (req, res) => {
    const cake = await CakesService.getById(req.params);
    return res.json(new Response('Fetched cake', cake));
  })
);

router.post(
  '',
  errorWrap(async (req, res) => {
    await CakesService.create(req.body);
    return res.json(new Response('Cake created'));
  })
);

router.put(
  '/:id',
  errorWrap(async (req, res) => {
    const cake = await CakesService.update(req.params, req.body);
    return res.json(new Response('Cake updated', cake));
  })
);

router.delete(
  '/:id',
  errorWrap(async (req, res) => {
    const cakes = await CakesService.delete(req.params);
    return res.json(new Response('Cake deleted', cakes));
  })
);

module.exports = router;
