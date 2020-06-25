import React from 'react';
import { Catalog } from './catalog.component';
import { pizzaItems } from '../../../pizza-app/src/data-stub';

export default { title: 'Catalog' };

export const defaultBasketButton = () => <Catalog items={pizzaItems} heading="Catalog story" />;
