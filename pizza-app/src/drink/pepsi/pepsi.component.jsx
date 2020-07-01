import React, { memo } from 'react';
import { StyledPepsi, StyledText1, StyledText2, StyledZagalovok, StyledBasket } from './pepsi.styles';

const PepsiComponent = () => {
	return (
		<StyledPepsi>
			<StyledZagalovok>
				<div>Пепси</div>
			</StyledZagalovok>
			<StyledText1>
				<div> 0,5</div>
				<StyledBasket />
			</StyledText1>
			<StyledText2>
				<div> ЦЕНА ₽ </div>
			</StyledText2>
		</StyledPepsi>
	);
};
export const Pepsi = memo(PepsiComponent);
