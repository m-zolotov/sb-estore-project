import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
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
import Brand from '../Brand';
import Search from '../Search';
import Logo from '../Logo';
import { bg } from '../../shared/colors';
import spacing from '../../shared/spacing';
import { ReactComponent as IconCart } from '../../assets/images/ic-cart.svg';
import { ReactComponent as IconFavorites } from '../../assets/images/ic-favorites.svg';
import LinkBehavior from '../../components/Link/LinkBehavior';

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
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		React.useState<null | HTMLElement>(null);

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
					<Badge badgeContent={4} color='error'>
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
							<Box sx={{ flexGrow: 1 }} />
							<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
								<IconButton
									size='large'
									aria-label='show 4 new mails'
									color='inherit'>
									<Badge badgeContent={4} color='error'>
										<IconFavorites />
									</Badge>
								</IconButton>
								<IconButton
									size='large'
									aria-label='show 17 new notifications'
									color='inherit'>
									<Badge badgeContent={17} color='error'>
										<IconCart />
									</Badge>
								</IconButton>
								<IconButton
									size='large'
									edge='end'
									aria-label='account of current user'
									aria-controls={menuId}
									aria-haspopup='true'
									onClick={handleProfileMenuOpen}
									color='inherit'>
									<SentimentSatisfiedAltIcon />
								</IconButton>
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
