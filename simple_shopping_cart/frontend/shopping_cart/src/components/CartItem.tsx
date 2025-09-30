'use client';

import { CartItem as CartItemType } from '../types';
import { useAppDispatch } from '../store';
import { updateQuantity, removeFromCart } from '../store/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(item.product.id));
    } else {
      dispatch(updateQuantity({ productId: item.product.id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.product.id));
  };

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg">
      <div className="flex-shrink-0">
        <img
          src={item.product.imageUrl}
          alt={item.product.name}
          className="w-16 h-16 object-cover rounded-md"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-medium text-gray-900 truncate">
          {item.product.name}
        </h3>
        <p className="text-sm text-gray-500">
          ${item.product.price.toFixed(2)} each
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600"
        >
          −
        </button>
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600"
        >
          +
        </button>
      </div>
      
      <div className="text-right">
        <div className="text-lg font-semibold text-gray-900">
          ${(item.product.price * item.quantity).toFixed(2)}
        </div>
        <button
          onClick={handleRemove}
          className="text-sm text-red-600 hover:text-red-800 mt-1"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
