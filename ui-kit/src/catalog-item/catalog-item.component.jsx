import React, { memo } from 'react';
import {
	StyledCatalogItem,
	StyledCatalogItemImage,
	StyledCatalogInfoBlock,
	StyledCatalogItemDescriptionRow,
	StyledCatalogItemTitle,
	StyledCatalogItemInfo,
	StyledCatalogItemPrice,
	StyledCatalogItemCartButton,
	StyledImageWrapper,
	StyledCatalogInfoRow,
} from './catalog-item.styles';

const CatalogItemComponent = ({ item, index, onAddToCart = () => null, accordingItemInState }) => {
	return (
		<StyledCatalogItem id="product-item">
			<StyledImageWrapper>
				<StyledCatalogItemImage src={item.image} />
			</StyledImageWrapper>
			<StyledCatalogItemDescriptionRow>
				<StyledCatalogItemTitle id="product-name">{item.title}</StyledCatalogItemTitle>
				<StyledCatalogItemInfo id="product-info-icon">
					<>
						i
						<StyledCatalogInfoBlock index={index} id="product-info-block">
							<StyledCatalogInfoRow>
								<p>
									{'Энергетическая ценность: '}
									<b>{item.description.energy}</b>
									ккал
								</p>
								<p>Пищевая ценность на 100г:</p>
								<p>
									{'белки: '}
									<b>{item.description.protein}</b>
									г,
								</p>
								<p>
									{'жиры: '}
									<b>{item.description.fat}</b>
									г,
								</p>
								<p>
									{'углеводы: '}
									<b>{item.description.carb}</b>
									г,
								</p>
							</StyledCatalogInfoRow>
						</StyledCatalogInfoBlock>
					</>
				</StyledCatalogItemInfo>
			</StyledCatalogItemDescriptionRow>
			<StyledCatalogItemDescriptionRow>
				<StyledCatalogItemPrice id="product-price">{`${item.price} ₽`}</StyledCatalogItemPrice>
				<StyledCatalogItemCartButton onClick={onAddToCart(item)} id="product-cart-button">
					{accordingItemInState !== undefined && accordingItemInState.count > 0
						? `В корзине: ${accordingItemInState.count}`
						: 'В корзину'}
				</StyledCatalogItemCartButton>
			</StyledCatalogItemDescriptionRow>
		</StyledCatalogItem>
	);
};

export const CatalogItem = memo(CatalogItemComponent);
