import Catalog from '../../pages/Catalog';
import Header from '../Header';
import Footer from '../Footer';
import data from '../../fixtures/data.json';
import { GoodsContext } from '../../context/goods-context';

const AppContent = () => {
	const cards = data;

	return (
		<GoodsContext.Provider value={cards}>
			<Header />
			<Catalog />
			<Footer />
		</GoodsContext.Provider>
	);
};

export default AppContent;
