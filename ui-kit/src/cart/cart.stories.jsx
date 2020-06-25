import React from 'react';
import { Cart } from './cart.component';

export default {
	title: 'Cart',
};

export const defaultCart = () => (
	<div style={{ display: 'flex' }}>
		<Cart />
	</div>
);
