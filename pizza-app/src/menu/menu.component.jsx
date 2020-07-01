import React, { memo } from 'react';
import { StyledMenu, StyledButton, StyledText } from './menu.styles';

const MenuComponent = () => (
	<StyledMenu>
		<StyledButton>
			<StyledText>МЕНЮ</StyledText>
		</StyledButton>
		<StyledButton>
			<StyledText>КОНТАКТЫ</StyledText>
		</StyledButton>
		<StyledButton>
			<StyledText>О НАС</StyledText>
		</StyledButton>
		<StyledButton>
			<StyledText>КОРЗИНА</StyledText>
		</StyledButton>
	</StyledMenu>
);

export const Menu = memo(MenuComponent);
