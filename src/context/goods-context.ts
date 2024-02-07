import { createContext } from 'react';
import { ICard } from '../types/ICard';

export const GoodsContext = createContext<ICard[]>([]);

GoodsContext.displayName = 'GoodsContext';
