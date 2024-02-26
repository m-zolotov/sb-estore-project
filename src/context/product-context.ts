import { createContext } from 'react';
import { IProduct } from '../types/interfaces';

export const ProductContext = createContext<IProduct | null>(null);
ProductContext.displayName = 'ProductContext';
