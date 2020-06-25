import React, { memo } from 'react';
import { StyledHeaderLogo, StyledHeader } from './header.styles';
import { MainMenu } from '../main-menu/main-menu.component';
import { Phone } from '../phone/phone.component';
import { CartButton } from '../cart-button/cart-button.component';

const HeaderComponent = ({ menuItems, cartCount, onModalOpen, renderLinkWrapper, menuColor }) => (
	<StyledHeader>
		<StyledHeaderLogo />
		<MainMenu menu={menuItems} renderLinkWrapper={renderLinkWrapper} color={menuColor} idPrefix="header" />
		<Phone phone="8-800-555-35-35" />
		<CartButton count={cartCount} onModalOpen={onModalOpen} />
	</StyledHeader>
);

export const Header = memo(HeaderComponent);
