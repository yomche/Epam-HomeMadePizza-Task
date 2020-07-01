import React, { memo } from 'react';
import { StyledDrink } from './drink.styles';

import { Water } from './water/water.component';
import { Mors } from './mors/mors.component';
import { Pepsi } from './pepsi/pepsi.component';

const DrinkComponent = () => {
	return (
		<StyledDrink>
			<Water />
			<Mors />
			<Pepsi />
		</StyledDrink>
	);
};
export const Drink = memo(DrinkComponent);
