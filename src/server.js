require('dotenv').config();

const app = require('./api');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});