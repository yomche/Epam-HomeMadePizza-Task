import React, { memo } from 'react';
import { StyledHeading } from './heading.styles';

const HeadingComponent = ({ children }) => <StyledHeading>{children}</StyledHeading>;

export const Heading = memo(HeadingComponent);
