import React, { memo } from 'react';
import { StyledMors, StyledText1, StyledText2, StyledZagalovok, StyledBasket } from './mors.styles';

const MorsComponent = () => {
	return (
		<StyledMors>
			<StyledZagalovok>
				<div>Морс</div>
			</StyledZagalovok>
			<StyledText1>
				<div> 0,5</div>
				<StyledBasket />
			</StyledText1>
			<StyledText2>
				<div> ЦЕНА ₽ </div>
			</StyledText2>
		</StyledMors>
	);
};
export const Mors = memo(MorsComponent);
