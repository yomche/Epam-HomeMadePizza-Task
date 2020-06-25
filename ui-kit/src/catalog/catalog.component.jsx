import React, { memo } from 'react';
import { Heading } from '../heading/heading.component';
import { CatalogItem } from '../catalog-item/catalog-item.component';
import { Anchor } from '../anchor/anchor.component';
import { StyledCatalogWrapper, StyledCatalogContainer } from './catalog.styles';

const CatalogComponent = ({ heading, items, id, onAddToCart, onDeleteFromCart, cartState = { cart: [] } }) => (
	<StyledCatalogContainer>
		<Anchor id={id} />
		<Heading>{heading}</Heading>
		<StyledCatalogWrapper>
			{items.map((item, index) => {
				const accordingItemInState = cartState.cart.find((stateItem) => item.title === stateItem.title);
				return (
					<CatalogItem
						item={item}
						index={index}
						onAddToCart={onAddToCart}
						onDeleteFromCart={onDeleteFromCart}
						accordingItemInState={accordingItemInState}
						key={item.title}
					/>
				);
			})}
		</StyledCatalogWrapper>
	</StyledCatalogContainer>
);

export const Catalog = memo(CatalogComponent);
