"use client";

import React from "react";
import { useToast } from "../context/ToastContext";

export default function ToastContainer() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={
            `min-w-[240px] rounded-md px-4 py-3 shadow text-white ` +
            (t.type === 'success' ? 'bg-green-600' : t.type === 'error' ? 'bg-red-600' : 'bg-gray-800')
          }
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}



