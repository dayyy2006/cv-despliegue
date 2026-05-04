const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// leer datos del formulario
app.use(express.urlencoded({ extended: true }));

// servir archivos
app.use(express.static(path.join(__dirname, 'public')));

// ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 👇 ESTA ES LA QUE TE FALTA
app.post('/confirmacion', (req, res) => {
  res.redirect('/confirmacion.html');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});