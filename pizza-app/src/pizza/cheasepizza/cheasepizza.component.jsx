import React, { memo } from 'react';
import {
	StyledCheasePizza,
	StyledText1,
	StyledText2,
	StyledText3,
	StyledZagalovok,
	StyledBasket,
} from './cheasepizza.styles';

const CheasePizzaComponent = () => {
	return (
		<StyledCheasePizza>
			<StyledZagalovok>
				4 сыра
			</StyledZagalovok>
			<StyledText1>
				Увеличенная порция моцареллы, смесь сыров чеддер и пармезан, сыр блю чиз, сливочный соус
				<StyledBasket />
			</StyledText1>

			<StyledText2>
				БЖУ - 9/10/24
				кКал - 
			</StyledText2>
			<StyledText3>
				ЦЕНА ₽
			</StyledText3>
		</StyledCheasePizza>
	);
};
export const CheasePizza = memo(CheasePizzaComponent);
