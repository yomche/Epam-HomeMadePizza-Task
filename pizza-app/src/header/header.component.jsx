import React, { memo } from 'react';
import { StyledHeader, StyledButton, StyledMenu, StyledText } from './header.styles';
import { StyledHeaderLogo } from '../logo/logo.styles';

const HeaderComponent = () => (
	<StyledHeader>
		<StyledHeaderLogo />
		<StyledMenu>
			<StyledButton>
				<StyledText> МЕНЮ </StyledText>
			</StyledButton>
			<StyledButton>
				<StyledText> КОНТАКТЫ </StyledText>
			</StyledButton>
			<StyledButton>
				<StyledText> О НАС </StyledText>
			</StyledButton>
			<StyledButton>
				<StyledText> КОРЗИНА </StyledText>
			</StyledButton>
		</StyledMenu>
	</StyledHeader>
);
export const Header = memo(HeaderComponent);
