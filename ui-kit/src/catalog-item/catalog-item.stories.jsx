import React from 'react';
import { pizzaItems } from '../../data-stub';
import { CatalogItem } from './catalog-item.component';

export default { title: 'Catalog Item' };

export const defaultCatalogItem = () => <CatalogItem item={pizzaItems[0]} />;
