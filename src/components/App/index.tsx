import { useState, ChangeEvent } from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import { SearchContext } from '../../context/search-context';
import store from '../../store';

const App = () => {
	const [search, setSearch] = useState<string>('');
	const handleChangeSearch = (newSearch: ChangeEvent<HTMLInputElement>) =>
		setSearch(newSearch.target.value);
	const searchResult = { search, handleChangeSearch };

	return (
		<Provider store={store}>
			<SearchContext.Provider value={searchResult}>
				<Header />
				<Outlet />
				<Footer />
			</SearchContext.Provider>
		</Provider>
	);
};

export default App;
