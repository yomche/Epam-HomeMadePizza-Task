import React, { memo, useMemo } from 'react';
import {
	StyledFooterWrapper,
	StyledFooterContentWrapper,
	StyledFooterPhone,
	StyledFooterPhoneWrapper,
	StyledSocialContainer,
	StyledSocialLogo,
	StyledCopyRight,
	StyledMenuWrapper,
} from './footer.styles';
import { fbImageUrl, vkImageUrl, instImageUrl, twitterImageUrl } from './images';
import { MainMenu } from '../main-menu/main-menu.component';

const FooterComponent = ({ menuItems, renderLinkWrapper, menuColor }) => {
	const copyright = useMemo(() => 'home made pizza, © 2020', []);
	return (
		<StyledFooterWrapper>
			<StyledFooterContentWrapper>
				<StyledFooterPhoneWrapper>
					<StyledFooterPhone>8-800-555-35-35</StyledFooterPhone>
					<StyledFooterPhone>8-800-555-35-35</StyledFooterPhone>
				</StyledFooterPhoneWrapper>
				<StyledSocialContainer>
					<StyledSocialLogo href="">
						<img src={vkImageUrl} alt="vk logo" />
					</StyledSocialLogo>
					<StyledSocialLogo href="">
						<img src={instImageUrl} alt="instagram logo" />
					</StyledSocialLogo>
					<StyledSocialLogo href="">
						<img src={fbImageUrl} alt="facebook logo" />
					</StyledSocialLogo>
					<StyledSocialLogo href="">
						<img src={twitterImageUrl} alt="twitter logo" />
					</StyledSocialLogo>
				</StyledSocialContainer>
				<StyledMenuWrapper>
					<MainMenu menu={menuItems} color={menuColor} renderLinkWrapper={renderLinkWrapper} idPrefix="footer" />
				</StyledMenuWrapper>
				<StyledCopyRight>{copyright}</StyledCopyRight>
			</StyledFooterContentWrapper>
		</StyledFooterWrapper>
	);
};

export const Footer = memo(FooterComponent);
