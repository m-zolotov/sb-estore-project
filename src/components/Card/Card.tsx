import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import { Button, CardActionArea, CardHeader, CardActions } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { ICard } from '../../types/ICard';
import { colors, bg } from '../../shared/colors';
import spacing from '../../shared/spacing';
import { ReactComponent as Favorites } from '../../assets/images/ic-favorites.svg';

const theme = createTheme({
	components: {
		MuiCard: {
			styleOverrides: {
				root: {},
			},
		},
		MuiCardActionArea: {
			styleOverrides: {
				root: {},
			},
		},
		MuiCardActions: {
			styleOverrides: {
				root: {},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {},
			},
		},
		MuiCardHeader: {
			styleOverrides: {
				root: {
					height: '32px',
					padding: 0,
				},
				action: {
					margin: 0,
				},
			},
		},
		MuiCardMedia: {
			styleOverrides: {
				root: {},
			},
		},
		MuiBadge: {
			styleOverrides: {
				root: {},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					// top: spacing(2),
					marginLeft: spacing(2),
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					width: '116px',
					height: '40px',
					fontSize: '16px',
					fontWeight: '700',
					borderRadius: '55px',
					backgroundColor: bg.main,
					color: colors.text.main,
					textTransform: 'none',
				},
			},
		},
	},
});

// const OldPriceWrapper = styled('p')(() => ({
// 	fontSize: '12px',
// 	lineHeight: '14px',
// 	fontWeight: '600',
// 	marginBottom: 0,
// 	marginTop: 0,
// 	color: colors.text.main,
// }));

const CurrentPriceWrapper = styled('p')(() => ({
	fontSize: '20px',
	lineHeight: '24px',
	fontWeight: '800',
	marginBottom: 0,
	marginTop: 0,
	color: colors.custom.red,
}));

const WeightWrapper = styled('p')(() => ({
	fontSize: '12px',
	lineHeight: '14px',
	fontWeight: '400',
	marginBottom: 0,
	marginTop: 0,
	color: colors.text.secondary,
}));

const HeadingWrapper = styled('p')(() => ({
	height: '40px',
	display: 'flex',
	alignItems: 'center',
	fontSize: '16px',
	lineHeight: '20px',
	fontWeight: '600',
	marginBottom: 0,
	marginTop: 0,
	color: colors.text.main,
}));

const FavoritesWrapper = styled('div')(() => ({
	marginTop: '5px',
	marginRight: spacing(2),
}));

type ICardProps = {
	card: ICard;
	key?: string;
};

export default function Card({ card, key }: ICardProps) {
	return (
		<ThemeProvider theme={theme}>
			<MuiCard elevation={0} key={key}>
				<CardHeader
					avatar={<Chip label={card.discount} />}
					action={
						<FavoritesWrapper>
							<Favorites />
						</FavoritesWrapper>
					}
				/>
				<CardMedia
					component='img'
					height='187'
					image={`${card.pictures}`}
					alt='dog food'
				/>
				<CardActionArea>
					<CardContent>
						{/* <OldPriceWrapper>{card.old_price}</OldPriceWrapper> */}
						<CurrentPriceWrapper>{`${card.price} ₽`}</CurrentPriceWrapper>
						<WeightWrapper>{card.wight}</WeightWrapper>
						<HeadingWrapper>{card.name}</HeadingWrapper>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size='small' color='primary'>
						В корзину
					</Button>
				</CardActions>
			</MuiCard>
		</ThemeProvider>
	);
}
