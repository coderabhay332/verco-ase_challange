export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export interface RootState {
  cart: CartState;
}
