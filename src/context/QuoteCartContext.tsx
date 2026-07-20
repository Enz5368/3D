import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

export type CartItem = {
  id: number;
  categoryKey: string;
  category: string;
  selections: Record<string, string[]>;
  price: number;
  billing: 'one-time' | 'monthly';
};

type QuoteCartValue = {
  items: CartItem[];
  requestedCategory: string;
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: number) => void;
  clearItems: () => void;
  requestCategory: (category: string) => void;
};

const STORAGE_KEY = 'orellanatech-cart';
const QuoteCartContext = createContext<QuoteCartValue | null>(null);

const readCart = (): CartItem[] => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as CartItem[]) : [];
  } catch {
    return [];
  }
};

export const QuoteCartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>(readCart);
  const [requestedCategory, setRequestedCategory] = useState('reparation');

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<QuoteCartValue>(() => ({
    items,
    requestedCategory,
    addItem: (item) => setItems((current) => [...current, { ...item, id: Date.now() }]),
    removeItem: (id) => setItems((current) => current.filter((item) => item.id !== id)),
    clearItems: () => setItems([]),
    requestCategory: setRequestedCategory,
  }), [items, requestedCategory]);

  return <QuoteCartContext.Provider value={value}>{children}</QuoteCartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useQuoteCart = () => {
  const value = useContext(QuoteCartContext);
  if (!value) throw new Error('useQuoteCart doit être utilisé dans QuoteCartProvider');
  return value;
};
