import { useState, ChangeEvent } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { SearchContext } from '../../context/search-context';

const App = () => {
	const [search, setSearch] = useState<string>('');
	const handleChangeSearch = (newSearch: ChangeEvent<HTMLInputElement>) =>
		setSearch(newSearch.target.value);
	const searchResult = { search, handleChangeSearch };

	return (
		<SearchContext.Provider value={searchResult}>
			<Header />
			<Outlet />
			<Footer />
		</SearchContext.Provider>
	);
};

export default App;
