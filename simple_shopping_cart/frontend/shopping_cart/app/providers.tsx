'use client';

import { Provider } from 'react-redux';
import { store } from '../src/store';
import { ToastProvider } from '../src/context/ToastContext';
import ToastContainer from '../src/components/ToastContainer';
import { ProductDetailsProvider } from '../src/context/ProductDetailsContext';
import ProductDetailsModal from '../src/components/ProductDetailsModal';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ToastProvider>
        <ProductDetailsProvider>
          {children}
          <ToastContainer />
          <ProductDetailsModal />
        </ProductDetailsProvider>
      </ToastProvider>
    </Provider>
  );
}
