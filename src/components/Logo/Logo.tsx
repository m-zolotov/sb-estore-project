import { ReactComponent as LogoIcon } from '../../assets/images/logo_icon.svg';
import s from './logo.module.css';

const Logo = () => {
	return <LogoIcon className={s.logo__icon} />;
};

export default Logo;
