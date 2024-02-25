import React from 'react';
import {
	Link as RouterLink,
	// MemoryRouter,
} from 'react-router-dom';
import Link from '@mui/material/Link';

type ILinkBehavior = {
	text: string;
	to: string;
};

const LinkBehavior = ({ text, to }: ILinkBehavior) => (
	<Link component={RouterLink} to={to}>
		{text}
	</Link>
);

LinkBehavior.displayName = 'LinkBehavior';

export default LinkBehavior;
