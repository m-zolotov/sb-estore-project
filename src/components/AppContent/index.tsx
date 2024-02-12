import { useState, ChangeEvent } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Cart from '../../pages/Cart';
import Catalog from '../../pages/Catalog';
import Product from '../../pages/Product';
import Home from '../../pages/Home';
import { SearchContext } from '../../context/search-context';

const AppContent = () => {
	const [search, setSearch] = useState<string>('');
	const handleChangeSearch = (newSearch: ChangeEvent<HTMLInputElement>) =>
		setSearch(newSearch.target.value);
	const searchResult = { search, handleChangeSearch };

	return (
		<SearchContext.Provider value={searchResult}>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/product' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
			<Footer />
		</SearchContext.Provider>
	);
};

export default AppContent;
