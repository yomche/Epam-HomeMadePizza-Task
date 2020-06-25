import React, { memo } from 'react';
import { StyledLink } from './hash-link.styles';

const HashLinkComponent = ({ to, children, color, id }) => (
	<StyledLink to={`#${to}`} color={color} id={id}>
		{children}
	</StyledLink>
);

export const HashLink = memo(HashLinkComponent);
