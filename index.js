const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static('public'));

// Ruta principal (por seguridad)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta de confirmación (si usas formulario)
app.post('/confirmacion', (req, res) => {
  res.redirect('/confirmacion.html');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});