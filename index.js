const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Carpeta pública
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});