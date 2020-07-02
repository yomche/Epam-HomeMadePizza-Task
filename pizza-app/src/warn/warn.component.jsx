import React, { memo } from 'react';
import { StyledWarn, StyledText, StyledExitButton } from './warn.styles';

const WarnComponent = () => (
	<StyledWarn>
		<StyledExitButton />
		<StyledText>ВНИМАНИЕ!</StyledText>
		<StyledText>
			Количество заказанных Вами позиций превышает допустимое значение. Пожалуйста, измените свой заказ.
		</StyledText>
	</StyledWarn>
);

export const Warn = memo(WarnComponent);
