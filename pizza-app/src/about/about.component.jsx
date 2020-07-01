import React, { memo } from 'react';
import { StyledAbout, StyledTextHead, StyledText, StyledBox, StyledExitButton } from './about.styles';

const AboutComponent = () => (
	<StyledAbout>
		<StyledExitButton />
		<StyledTextHead>
			<p>О НАС</p>
		</StyledTextHead>
		<StyledBox>
			<StyledText>
				У кого нет любимого блюда? У всех оно есть :) А наше любимое блюдо - это домашняя пицца, прямо из печи. Оооо,
				она божественна! Но готовить мы пиццу любим всё-таки больше,чем есть её! Чтобы наш талант не пропадал зря, мы
				решили поделиться этой вкуснейшей чудо-пиццей с вами!
			</StyledText>
		</StyledBox>
	</StyledAbout>
);

export const About = memo(AboutComponent);
