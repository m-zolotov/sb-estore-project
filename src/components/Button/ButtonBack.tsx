import { useNavigate } from 'react-router-dom';
import Button from './index';

const ButtonBack = () => {
	const navigate = useNavigate();
	return <Button text='Назад' onClick={() => navigate(-1)} />;
};

export default ButtonBack;
