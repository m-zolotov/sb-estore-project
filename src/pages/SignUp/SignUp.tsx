import { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SignUpForm from '../../components/Form/SignUpForm';
import PageHeader from '../../components/PageHeader';

const SignUp: FC = () => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: 'calc(100vh - 288px)',
					justifyContent: 'start',
				}}>
				<Container>
					<PageHeader title={'Зарегистрироваться'} />
					<SignUpForm />
				</Container>
			</Box>
		</>
	);
};

export default SignUp;
