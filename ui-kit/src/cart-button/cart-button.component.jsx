import React, { memo } from 'react';
import { StyledBasket, StyledBasketCounter, StyledLabel } from './cart-button.styles';

const CartButtonComponent = ({ count, onModalOpen }) => (
	<StyledBasket onClick={onModalOpen} id="cart-button">
		<StyledLabel>Корзина</StyledLabel>
		<StyledBasketCounter>
			<span id="cart-button-total">{count}</span>
		</StyledBasketCounter>
	</StyledBasket>
);

export const CartButton = memo(CartButtonComponent);
