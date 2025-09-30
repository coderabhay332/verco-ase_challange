import { Product } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface CheckoutRequest {
  items: Array<{
    productId: number;
    quantity: number;
  }>;
}

export interface CheckoutResponse {
  success: boolean;
  message: string;
  orderId?: string;
}

export const api = {
  async getProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      const result: ApiResponse<Product[]> = await response.json();
      
      if (!result.success || !result.data) {
        throw new Error(result.message || 'Failed to fetch products');
      }
      
      return result.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  async checkout(items: CheckoutRequest['items']): Promise<CheckoutResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });
      
      const result: CheckoutResponse = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Checkout failed');
      }
      
      return result;
    } catch (error) {
      console.error('Error during checkout:', error);
      throw error;
    }
  },
};
