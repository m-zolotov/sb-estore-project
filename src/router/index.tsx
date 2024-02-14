import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';
import Favorites from '../pages/Favorites';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'catalog',
				element: <Catalog />,
			},
			{
				path: 'product',
				element: <Product />,
			},
			{
				path: 'favorites',
				element: <Favorites />,
			},
		],
	},
]);
