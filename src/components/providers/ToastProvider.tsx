"use client";

import { createContext, useCallback, useContext, useState } from "react";

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 4000);
  }, []);

  return (
    <ToastContext value={{ showToast }}>
      {children}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-toast">
          <div className="bg-navy px-6 py-4 text-sm font-medium text-warm-white shadow-lg">
            {toast}
          </div>
        </div>
      )}
    </ToastContext>
  );
}
