import { Order } from '../types';

const orderStore: Map<string, Order> = new Map();

export function saveOrder(order: Order): void {
  orderStore.set(order.id, order);
}

export function getOrderById(orderId: string): Order | undefined {
  return orderStore.get(orderId);
}


