const { Router } = require('express');
const router = new Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello World!' });
});

router.get('/map', (req, res, next) => {
  res.render('map');
});

module.exports = router;
