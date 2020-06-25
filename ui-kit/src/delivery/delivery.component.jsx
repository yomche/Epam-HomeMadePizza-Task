import React, { memo } from 'react';
import { Heading } from '../heading/heading.component';
import {
	StyledDeliveryList,
	StyledDeliveryListItem,
	StyledDeliveryWrapper,
	StyledMapWrapper,
	StyledDeliveryContainer,
} from './delivery.styles';
import { Anchor } from '../anchor/anchor.component';
import { mapImageUrl } from './images';

const DeliverySectionComponent = ({ id }) => (
	<StyledDeliveryWrapper>
		<Anchor id={id} />
		<Heading>Доставка</Heading>
		<StyledDeliveryContainer>
			<StyledDeliveryList>
				<StyledDeliveryListItem>Доставим за 30 минут</StyledDeliveryListItem>
				<StyledDeliveryListItem>Оплата наличными и картой</StyledDeliveryListItem>
				<StyledDeliveryListItem>Большая зона доставки</StyledDeliveryListItem>
				<StyledDeliveryListItem>4 пункт</StyledDeliveryListItem>
				<StyledDeliveryListItem>5 пункт</StyledDeliveryListItem>
			</StyledDeliveryList>
			<StyledMapWrapper>
				<img src={mapImageUrl} alt="map" />
			</StyledMapWrapper>
		</StyledDeliveryContainer>
	</StyledDeliveryWrapper>
);

export const DeliverySection = memo(DeliverySectionComponent);
