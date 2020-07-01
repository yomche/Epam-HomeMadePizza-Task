import React, { memo } from 'react';
import { StyledWater, StyledText1, StyledText2, StyledZagalovok, StyledBasket } from './water.styles';

const WaterComponent = () => {
	return (
		<StyledWater>
			<StyledZagalovok>
				<div>Вода</div>
			</StyledZagalovok>
			<StyledText1>
				<div> 0,5</div>
				<StyledBasket />
			</StyledText1>
			<StyledText2>
				<div> ЦЕНА ₽ </div>
			</StyledText2>
		</StyledWater>
	);
};
export const Water = memo(WaterComponent);
