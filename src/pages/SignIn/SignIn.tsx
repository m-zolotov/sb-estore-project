import { FC } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SignInForm from '../../components/Form/SignInForm';
import PageHeader from '../../components/PageHeader';

const SignIn: FC = () => {
	return (
		<>
			<Box>
				<Container>
					<PageHeader title={'Войти'} />
					<SignInForm />
				</Container>
			</Box>
		</>
	);
};

export default SignIn;
