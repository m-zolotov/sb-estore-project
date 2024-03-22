import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Brand from '../../Brand';
import Logo from '../../Logo';
import s from './footer.module.css';

const Footer = () => {
	return (
		<Box sx={{ flexGrow: 1 }} className={s.footer__block}>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<Stack direction='row' spacing={2} style={{ marginTop: '56px' }}>
							<Logo />
							<Brand />
						</Stack>
					</Grid>
					<Grid item xs={3}>
						<List>
							<ListItem>Каталог</ListItem>
							<ListItem>Акции</ListItem>
							<ListItem>Новости</ListItem>
							<ListItem>Отзывы</ListItem>
						</List>
					</Grid>
					<Grid item xs={3}>
						<List>
							<ListItem>Оплата и доставка</ListItem>
							<ListItem>Часто спрашивают</ListItem>
							<ListItem>Обратная связь</ListItem>
							<ListItem>Контакты</ListItem>
						</List>
					</Grid>
					<Grid item xs={3}>
						<List>
							<ListItem>Мы на связи</ListItem>
							<ListItem>8 (999) 00-00-00</ListItem>
							<ListItem>dogfood.ru@gmail.com</ListItem>
							<ListItem>icons</ListItem>
						</List>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
