import { forwardRef } from 'react';
import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { useAppDispath, useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/user/selectors';
import { changeProductLike } from '../../store/products/actions';
import { ICard } from '../../store/models';
import { colors, bg } from '../../shared/colors';
import spacing from '../../shared/spacing';
import { ReactComponent as IconTrash } from '../../assets/images/ic-trash.svg';

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

type IFavoritesCardProps = {
	card: ICard;
	key?: string;
};

export default function FavoritesCard({ card, key }: IFavoritesCardProps) {
	const dispatch = useAppDispath();
	const user = useAppSelector(selectUser);

	const LinkBehavior = forwardRef<any, Omit<RouterLinkProps, 'to'>>(
		(props, ref) => (
			<RouterLink ref={ref} to={`/product/${card._id}`} {...props} />
		)
	);

	LinkBehavior.displayName = 'LinkBehavior';

	const handleDelete = () => {
		dispatch(
			changeProductLike({
				productId: card._id,
				like: !card.likes.includes(user?._id),
			})
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<MuiCard elevation={0} key={key}>
				<CardHeader
					avatar={<Chip label={card.discount} />}
					action={
						<FavoritesWrapper>
							<IconButton aria-label='delete' onClick={handleDelete}>
								<IconTrash />
							</IconButton>
						</FavoritesWrapper>
					}
				/>
				<CardMedia
					component='img'
					height='187'
					image={`${card.pictures}`}
					alt='dog food'
				/>
				<CardActionArea component={LinkBehavior}>
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
