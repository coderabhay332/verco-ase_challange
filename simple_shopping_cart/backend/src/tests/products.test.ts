import request from 'supertest';
import express from 'express';
import { productsRouter } from '../routes/products';

const app = express();
app.use(express.json());
app.use('/api/products', productsRouter);

describe('Products API', () => {
  describe('GET /api/products', () => {
    it('should return all products', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(200);
      
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeDefined();
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.data.length).toBeGreaterThan(0);
      
    
      const product = response.body.data[0];
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('imageUrl');
    });
  });

  describe('GET /api/products/:id', () => {
    it('should return a specific product when valid ID is provided', async () => {
      const response = await request(app)
        .get('/api/products/1')
        .expect(200);
      
      expect(response.body.success).toBe(true);
      expect(response.body.data).toBeDefined();
      expect(response.body.data.id).toBe(1);
      expect(response.body.data).toHaveProperty('name');
      expect(response.body.data).toHaveProperty('price');
      expect(response.body.data).toHaveProperty('imageUrl');
    });

    it('should return 404 when product ID does not exist', async () => {
      const response = await request(app)
        .get('/api/products/999')
        .expect(404);
      
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Product not found');
    });

    it('should return 404 when invalid product ID is provided', async () => {
      const response = await request(app)
        .get('/api/products/invalid')
        .expect(404);
      
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Product not found');
    });
  });
});
