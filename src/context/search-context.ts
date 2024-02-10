import { createContext, ChangeEvent } from 'react';

interface ISearchContext {
	search: string;
	handleChangeSearch: (newSearch: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext({} as ISearchContext);

SearchContext.displayName = 'SearchContext';
