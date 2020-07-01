import React, { memo } from 'react';
import {
	StyledMeatPizza,
	StyledText1,
	StyledText2,
	StyledText3,
	StyledZagalovok,
	StyledBasket,
} from './meatpizza.styles';

const MeatPizzaComponent = () => {
	return (
		<StyledMeatPizza>
			<StyledZagalovok>
				<div>Мясная</div>
			</StyledZagalovok>
			<StyledText1>
				<div> Цыпленок, ветчина, пикантная пепперони, томатный соус, острая чоризо, моцарелла</div>
				<StyledBasket />
			</StyledText1>

			<StyledText2>
				<div> БЖУ - 9/10/24 </div>
				<div> кКал - </div>
			</StyledText2>
			<StyledText3>
				<div> ЦЕНА ₽ </div>
			</StyledText3>
		</StyledMeatPizza>
	);
};
export const MeatPizza = memo(MeatPizzaComponent);
