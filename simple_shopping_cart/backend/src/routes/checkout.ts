import { Router } from 'express';
import { CheckoutRequest, CheckoutResponse, Order } from '../types';
import { saveOrder } from '../data/orders';
  
export const checkoutRouter = Router();


checkoutRouter.post('/', (req, res) => {
  try {
    const { items }: CheckoutRequest = req.body;
    
    // Validate request
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid cart items'
      });
    }
    
   
    for (const item of items) {
      if (!item.productId || !item.quantity || item.quantity <= 0) {
        return res.status(400).json({
          success: false,
          message: 'Invalid item data'
        });
      }
    }
    
    
    const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Log the order to console
    console.log('=== NEW ORDER ===');
    console.log('Order ID:', orderId);
    console.log('Items:', JSON.stringify(items, null, 2));
    console.log('Timestamp:', new Date().toISOString());
    console.log('================');
    
    // in-memory store fro the order
    const order: Order = {
      id: orderId,
      items: items.map(i => ({ productId: i.productId, quantity: i.quantity })),
      createdAt: new Date().toISOString(),
    };
    saveOrder(order);

    const response: CheckoutResponse = {
      success: true,
      message: 'Order placed successfully',
      orderId
    };
    
    res.json(response);
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process checkout'
    });
  }
});
