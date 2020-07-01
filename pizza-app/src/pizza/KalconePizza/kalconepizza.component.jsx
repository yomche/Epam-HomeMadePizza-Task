import React, { memo } from 'react';
import {
	StyledKalconePizza,
	StyledText1,
	StyledText2,
	StyledText3,
	StyledZagalovok,
	StyledBasket,
} from './kalconepizza.styles';

const KalconePizzaComponent = () => {
	return (
		<StyledKalconePizza>
			<StyledZagalovok>
				<div>Кальцоне</div>
			</StyledZagalovok>
			<StyledText1>
				<div> Грибы шампиньоны, шпинат, чесночный соус, моцарелла, творожный сливочный сыр </div>
				<StyledBasket />
			</StyledText1>

			<StyledText2>
				<div> БЖУ - 9/10/24 </div>
				<div> кКал - </div>
			</StyledText2>
			<StyledText3>
				<div> ЦЕНА ₽ </div>
			</StyledText3>
		</StyledKalconePizza>
	);
};
export const KalconePizza = memo(KalconePizzaComponent);
