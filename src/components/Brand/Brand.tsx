import { ReactComponent as Logo } from '../../assets/images/logo_title.svg';
import s from './brand.module.css';

const Brand = () => {
	return <Logo className={s.logo__title} />;
};

export default Brand;
