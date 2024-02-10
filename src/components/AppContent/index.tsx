import { useState, ChangeEvent } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Catalog from '../../pages/Catalog';
import { SearchContext } from '../../context/search-context';

const AppContent = () => {
	const [search, setSearch] = useState<string>('');
	const handleChangeSearch = (newSearch: ChangeEvent<HTMLInputElement>) =>
		setSearch(newSearch.target.value);
	const searchResult = { search, handleChangeSearch };

	return (
		<SearchContext.Provider value={searchResult}>
			<Header />
			<Catalog />
			<Footer />
		</SearchContext.Provider>
	);
};

export default AppContent;
