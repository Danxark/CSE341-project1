const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const express = require('express');
const app = express();
require('dotenv').config();
require('./contacts-api/db/connection');
const contactsRouter = require('./contacts-api/routes/contacts');

app.use(express.json());
app.use('/contacts', contactsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
