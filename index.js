const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', { title: 'Sitio Web Hotel Hesperia' });
});

router.get('/contact', (req, res) => {
  res.render('contact.html', { title: 'Hoteles' });
});
router.get('/blog', (req, res) => {
  res.render('blog.html', { title: 'Galeria' });
});
router.get('/zonaClientes', (req, res) => {
  res.render('zonaClientes.html', { title: 'Clientes' });
});
module.exports = router;
