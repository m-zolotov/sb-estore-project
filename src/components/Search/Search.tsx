import { useContext, ChangeEvent } from 'react';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { SearchContext } from '../../context/search-context';

const SearchComponent = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 1),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	right: 0,
}));

const SearchWrapper = styled('div')(() => ({
	'& div': {
		borderRadius: '55px',
	},
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 2),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

const Search = () => {
	const { search, handleChangeSearch } = useContext(SearchContext);

	return (
		<SearchWrapper>
			<SearchComponent>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder='Поиск'
					inputProps={{ 'aria-label': 'search' }}
					onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeSearch(e)}
					value={search}
				/>
			</SearchComponent>
		</SearchWrapper>
	);
};

export default Search;
