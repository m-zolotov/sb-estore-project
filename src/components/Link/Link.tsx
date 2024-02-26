import MuiLink from '@mui/material/Link';

type ILink = {
	text: string;
	onClick?: () => void;
};

const Link = ({ text, ...props }: ILink) => (
	<MuiLink {...props}>{text}</MuiLink>
);

export default Link;
