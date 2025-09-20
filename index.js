const express = require('express');
const app = express();
require('dotenv').config();
require('./contacts-api/db/connection');

const contactsRouter = require('./contacts-api/routes/contacts');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Middleware
app.use(express.json());
app.use('/contacts', contactsRouter);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
