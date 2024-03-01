// import { useState, ChangeEvent } from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import store from '../../store';

const App = () => {
	// const [search, setSearch] = useState<string>('');
	// const handleChangeSearch = (newSearch: ChangeEvent<HTMLInputElement>) =>
	// 	setSearch(newSearch.target.value);
	// const searchResult = { search, handleChangeSearch };

	return (
		<Provider store={store}>
			<Header />
			<Outlet />
			<Footer />
		</Provider>
	);
};

export default App;
