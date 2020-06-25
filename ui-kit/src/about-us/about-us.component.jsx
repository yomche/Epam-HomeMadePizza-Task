import React, { memo } from 'react';
import { Heading } from '../heading/heading.component';
import {
	StyledAboutUsWrapper,
	StyledAboutUsContainer,
	StyledAboutUsTextDescriptionWrapper,
	StyledAboutUsText,
} from './about-us.styles';
import { aboutUsImageUrl } from './images';
import { Anchor } from '../anchor/anchor.component';

const AboutUsComponent = ({ id, children }) => (
	<StyledAboutUsWrapper>
		<Anchor id={id} />
		<Heading>О нас</Heading>
		<StyledAboutUsContainer>
			<img src={aboutUsImageUrl} alt="about us" />
			<StyledAboutUsTextDescriptionWrapper>
				<StyledAboutUsText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper molestie urna. Integer eu congue
					massa, faucibus mollis tellus. Fusce fringilla tempus dignissim. Nam dictum elit ut ullamcorper iaculis. Donec
					non convallis justo, non ultrices libero. Pellentesque id scelerisque dui, eu efficitur dui. Nam tempor massa
					quis tincidunt fermentum. Morbi fringilla mauris non hendrerit aliquam. Nulla vitae purus a turpis efficitur
					vehicula. Ut lectus sem, mollis ac elit id, condimentum posuere neque. Aliquam erat volutpat. Nullam nec diam
					sit amet nisl aliquam mattis sed at nisl. Pellentesque in sem rutrum, iaculis lorem sed, facilisis mi.
				</StyledAboutUsText>
				<div>{children}</div>
			</StyledAboutUsTextDescriptionWrapper>
		</StyledAboutUsContainer>
	</StyledAboutUsWrapper>
);

export const AboutUs = memo(AboutUsComponent);
