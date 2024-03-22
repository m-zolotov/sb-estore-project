import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from './index';

const ButtonBack = () => {
	const navigate = useNavigate();
	return (
		<Box sx={{ marginTop: '16px' }}>
			<Button text='Назад' onClick={() => navigate(-1)} />
		</Box>
	);
};

export default ButtonBack;
