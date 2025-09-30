import swaggerJsdoc from 'swagger-jsdoc';
import { paths } from './docs/paths';

const definition = {
  openapi: '3.0.3',
  info: {
    title: 'Shopping Cart API',
    version: '1.0.0',
    description: 'API documentation for the Shopping Cart backend',
  },
  servers: [{ url: 'http://localhost:3001' }],
  paths,
};

export const swaggerSpec = swaggerJsdoc({
  definition,
  apis: [],
});


