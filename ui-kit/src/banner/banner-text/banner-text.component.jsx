import React, { memo } from 'react';
import { StyledBannerTextWrapper, StyledBannerText } from './banner-text.styles';

const BannerTextComponent = ({ text }) => (
	<StyledBannerTextWrapper>
		<StyledBannerText>{text}</StyledBannerText>
	</StyledBannerTextWrapper>
);

export const BannerText = memo(BannerTextComponent);
