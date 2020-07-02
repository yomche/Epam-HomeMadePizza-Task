import React, { memo } from 'react';
import {
	StyledContacts,
	StyledExitButton,
	StyledTextHead,
	StyledText,
	StyledBox,
	StyledShift,
	StyledFooter,
	StyledFooterRight,
	StyledShiftR,
} from './contacts.styles';

const ContactsComponent = () => (
	<StyledContacts>
		<StyledExitButton />
		<StyledTextHead>
			<p>КОНТАКТЫ</p>
		</StyledTextHead>
		<StyledBox>
			<StyledText>г.Тверь, пр-т Победы, д.14</StyledText>
			<StyledText> Время работы:</StyledText>
			<StyledText> пн-вс: 9:00-21:00</StyledText>
		</StyledBox>
		<StyledShift>
			<StyledFooter>Телефон: </StyledFooter>
			<StyledFooter>8-800-555-35-35</StyledFooter>
			<StyledFooter>Звонок бесплатный </StyledFooter>
		</StyledShift>
		<StyledShiftR>
			<StyledFooterRight>Отзывы и обращения: </StyledFooterRight>
			<StyledFooterRight> feedback@homemadepizza.com </StyledFooterRight>
			<StyledFooterRight>instagram: @homemadepizza</StyledFooterRight>
		</StyledShiftR>
	</StyledContacts>
);

export const Contacts = memo(ContactsComponent);
