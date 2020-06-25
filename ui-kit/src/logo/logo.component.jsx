import React, { memo } from 'react';
import { StyledHeaderLogo } from './logo.styles';

const LogoComponent = () => <StyledHeaderLogo />;

export const Logo = memo(LogoComponent);
