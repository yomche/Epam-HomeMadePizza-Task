import React from 'react';
import { CartButton } from './cart-button.component';

export default { title: 'Cart Button' };

export const defaultCartButton = () => <CartButton />;
export const basketCartWithCount = () => <CartButton count={4} />;
