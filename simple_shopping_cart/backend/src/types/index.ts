export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
}

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface CheckoutRequest {
  items: CartItem[];
}

export interface CheckoutResponse {
  success: boolean;
  message: string;
  orderId?: string;
}

export interface OrderItem {
  productId: number;
  quantity: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  createdAt: string;
}
