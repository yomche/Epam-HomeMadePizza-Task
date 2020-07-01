import React, { memo } from 'react';
import { StyledPizza } from './pizza.styles';

import { MeatPizza } from './meatpizza/meatpizza.component';
import { CheasePizza } from './cheasepizza/cheasepizza.component';
import { FirmPizza } from './FirmPizza/firmpizza.component';
import { KalconePizza } from './KalconePizza/kalconepizza.component';

const PizzaComponent = () => {
	return (
		<StyledPizza>
			<MeatPizza />
			<CheasePizza />
			<FirmPizza />
			<KalconePizza />
		</StyledPizza>
	);
};
export const Pizza = memo(PizzaComponent);
