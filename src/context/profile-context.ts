import { createContext } from 'react';
import { IUser } from '../types/interfaces';

export const ProfileContext = createContext<IUser | null>(null);
ProfileContext.displayName = 'ProfileContext';
