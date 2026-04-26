const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const pages = ['index', 'program', 'courses', 'careers'];

pages.forEach(page => {
  const route = page === 'index' ? '/' : `/${page}`;
  app.get(route, (req, res) => {
    res.render(page);
  });
});

app.get('/contact', (req, res) => {
  res.redirect('https://www.dawsoncollege.qc.ca/electrical-engineering-technology/faculty-staff-list/');
});

app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
