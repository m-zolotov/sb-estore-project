import React, { useState, useEffect, forwardRef } from 'react';
import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getProducts } from '../../../store/products/actions';
import {
	selectAccessToken,
	selectIsLoading,
	selectUser,
} from '../../../store/user/selectors';
import { selectProducts } from '../../../store/products/selectors';
import Brand from '../../Brand';
import Search from '../../Search';
import Logo from '../../Logo';
import { bg } from '../../../shared/colors';
import spacing from '../../../shared/spacing';
import { ReactComponent as IconCart } from '../../../assets/images/ic-cart.svg';
import { ReactComponent as IconFavorites } from '../../../assets/images/ic-favorites.svg';
import LinkBehavior from '../../Link/LinkBehavior';

const theme = createTheme({
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: bg.main,
					marginBottom: spacing(2),
				},
			},
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					height: '80px',
					display: 'flex',
					justifyContent: 'center',
				},
			},
		},
	},
});

export default function Header() {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const accessToken = useAppSelector(selectAccessToken);
	const products = useAppSelector(selectProducts);
	const favoritesProducts = products.filter((item) =>
		item.likes.includes(user ? user._id : '')
	);
	const isLoading = useAppSelector(selectIsLoading);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		useState<null | HTMLElement>(null);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch, accessToken]);

	const LinkBehaviorFavorites = forwardRef<any, Omit<RouterLinkProps, 'to'>>(
		(props, ref) => <RouterLink ref={ref} to={'/favorites'} {...props} />
	);

	LinkBehaviorFavorites.displayName = 'LinkBehaviorFavorites';

	const LinkBehaviorCart = forwardRef<any, Omit<RouterLinkProps, 'to'>>(
		(props, ref) => <RouterLink ref={ref} to={'/cart'} {...props} />
	);

	LinkBehaviorCart.displayName = 'LinkBehaviorCart';

	const LinkBehaviorCatalog = forwardRef<any, Omit<RouterLinkProps, 'to'>>(
		(props, ref) => <RouterLink ref={ref} to={'/catalog'} {...props} />
	);

	LinkBehaviorCatalog.displayName = 'LinkBehaviorCatalog';

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>
				<LinkBehavior text='Profile' to='/profile' />
			</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
			<MenuItem>
				<IconButton size='large' aria-label='show 4 new mails' color='inherit'>
					<Badge badgeContent={favoritesProducts.length} color='error'>
						<IconFavorites />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					size='large'
					aria-label='show 17 new notifications'
					color='inherit'>
					<Badge badgeContent={17} color='error'>
						<IconCart />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size='large'
					aria-label='account of current user'
					aria-controls='primary-search-account-menu'
					aria-haspopup='true'
					color='inherit'>
					<SentimentSatisfiedAltIcon />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' color='transparent' elevation={0}>
					<Container>
						<Toolbar disableGutters>
							<Stack direction='row' spacing={2}>
								<Logo />
								<Brand />
							</Stack>
							<Search />
							<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
								<Button
									key='catalog'
									component={LinkBehaviorCatalog}
									sx={{ my: 2, color: 'black', display: 'block' }}>
									Каталог
								</Button>
								<Button
									key='favorites'
									component={LinkBehaviorFavorites}
									sx={{ my: 2, color: 'black', display: 'block' }}>
									Избранные
								</Button>
							</Box>
							<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
								<IconButton
									component={LinkBehaviorFavorites}
									size='large'
									aria-label='show 4 new mails'
									color='inherit'>
									<Badge badgeContent={favoritesProducts.length} color='error'>
										<IconFavorites />
									</Badge>
								</IconButton>
								<IconButton
									component={LinkBehaviorCart}
									size='large'
									aria-label='show 17 new notifications'
									color='inherit'>
									<Badge badgeContent={17} color='error'>
										<IconCart />
									</Badge>
								</IconButton>
								{isLoading ? null : (
									<IconButton
										size='large'
										edge='end'
										aria-label={user?.name}
										aria-controls={menuId}
										aria-haspopup='true'
										onClick={handleProfileMenuOpen}
										color='inherit'>
										<Logo />
									</IconButton>
								)}
							</Box>
							<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
								<IconButton
									size='large'
									aria-label='show more'
									aria-controls={mobileMenuId}
									aria-haspopup='true'
									onClick={handleMobileMenuOpen}
									color='inherit'>
									<MoreIcon />
								</IconButton>
								<IconButton
									size='large'
									edge='start'
									color='inherit'
									aria-label='open drawer'
									sx={{ mr: 2 }}>
									<MenuIcon />
								</IconButton>
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
				{renderMobileMenu}
				<Container maxWidth='sm'>{renderMenu}</Container>
			</Box>
		</ThemeProvider>
	);
}
