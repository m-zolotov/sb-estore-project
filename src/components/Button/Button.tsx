import MuiButton from '@mui/material/Button';

type IButton = {
	text: string;
	onClick?: () => void;
};

const Button = ({ text, ...props }: IButton) => (
	<MuiButton {...props}>{text}</MuiButton>
);

export default Button;
