import React, { memo } from 'react';
import { StyledBanner } from './banner.styles';
import { BannerText } from './banner-text/banner-text.component';

const BannerComponent = () => (
	<StyledBanner>
		<BannerText text="Доставим пиццу из печи за 30 минут" />
	</StyledBanner>
);

export const Banner = memo(BannerComponent);
