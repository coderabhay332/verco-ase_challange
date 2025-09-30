"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Product } from "../types";

interface ProductDetailsContextValue {
  product: Product | null;
  open: (product: Product) => void;
  close: () => void;
}

const ProductDetailsContext = createContext<ProductDetailsContextValue | undefined>(undefined);

export const ProductDetailsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [product, setProduct] = useState<Product | null>(null);

  const open = useCallback((p: Product) => setProduct(p), []);
  const close = useCallback(() => setProduct(null), []);

  return (
    <ProductDetailsContext.Provider value={{ product, open, close }}>
      {children}
    </ProductDetailsContext.Provider>
  );
};

export const useProductDetails = (): ProductDetailsContextValue => {
  const ctx = useContext(ProductDetailsContext);
  if (!ctx) throw new Error("useProductDetails must be used within ProductDetailsProvider");
  return ctx;
};



