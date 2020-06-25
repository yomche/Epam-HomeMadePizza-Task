import React, { memo } from 'react';
import { StyledPhone, StyledHeaderContactsWrapper, StyledHours } from './phone.styles';

const PhoneComponent = ({ phone }) => (
	<StyledHeaderContactsWrapper>
		<StyledPhone>{phone}</StyledPhone>
		<StyledHours>Время Работы: 09-21</StyledHours>
	</StyledHeaderContactsWrapper>
);

export const Phone = memo(PhoneComponent);
