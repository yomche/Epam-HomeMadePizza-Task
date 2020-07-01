import React, { memo } from 'react';
import {
	StyledFirmPizza,
	StyledText1,
	StyledText2,
	StyledText3,
	StyledZagalovok,
	StyledBasket,
} from './firmpizza.styles';

const FirmPizzaComponent = () => {
	return (
		<StyledFirmPizza>
			<StyledZagalovok>
				<div>Фирменная</div>
			</StyledZagalovok>
			<StyledText1>
				<div> Секретный рецепт бабушки Галины </div>
				<StyledBasket />
			</StyledText1>

			<StyledText2>
				<div> БЖУ - 9/10/24 </div>
				<div> кКал - </div>
			</StyledText2>
			<StyledText3>
				<div> ЦЕНА ₽ </div>
			</StyledText3>
		</StyledFirmPizza>
	);
};
export const FirmPizza = memo(FirmPizzaComponent);
