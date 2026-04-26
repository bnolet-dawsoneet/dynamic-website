const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

const pages = ['index', 'program', 'courses', 'careers', 'contact'];

pages.forEach(page => {
  const route = page === 'index' ? '/' : `/${page}`;
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', `${page}.html`));
  });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
