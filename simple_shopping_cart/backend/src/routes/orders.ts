import { Router } from 'express';
import { getOrderById } from '../data/orders';

export const ordersRouter = Router();

ordersRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const order = getOrderById(id);
  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }
  return res.json({ success: true, data: order });
});


