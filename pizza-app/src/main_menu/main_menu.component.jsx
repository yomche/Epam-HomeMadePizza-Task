import React, { memo } from 'react';
import { Drink } from '../drink/drink.component';
import { Pizza } from '../pizza/pizza.component';
import { StyledMainMenu, StyledText } from './main_menu.style';

const MenuComponent = () => {
	return (
		<StyledMainMenu>
			<StyledText> Пицца</StyledText>

			<div>
				<Pizza />
			</div>
			<StyledText>Напитки</StyledText>

			<div>
				<Drink />
			</div>
		</StyledMainMenu>
	);
};
export const Menu = memo(MenuComponent);
