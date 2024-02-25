import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';
import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
				errorElement: <NotFound />,
			},
			{
				path: 'cart',
				element: <Cart />,
				errorElement: <NotFound />,
			},
			{
				path: 'catalog',
				element: <Catalog />,
				errorElement: <NotFound />,
			},
			{
				path: 'product/:productId',
				element: <Product />,
				errorElement: <NotFound />,
			},
			{
				path: 'profile',
				element: <Profile />,
				errorElement: <NotFound />,
			},
			{
				path: 'favorites',
				element: <Favorites />,
				errorElement: <NotFound />,
			},
			{
				path: 'not-found',
				element: <NotFound />,
				errorElement: <NotFound />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);
