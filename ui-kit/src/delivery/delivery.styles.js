import styled from 'styled-components';
import { truckImageUrl, cashImageUrl, locationImageUrl } from './images';

const deliveryListItemCommon = "position: absolute; content: ''; width: 38px; height: 38px; top: 0; left: -75px;";

export const StyledDeliveryList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	flex-shrink: 0;

	& > :nth-child(3n + 1) {
		&::before {
			background: url(${truckImageUrl}) center no-repeat;
			${deliveryListItemCommon}
		}
	}
	& > :nth-child(3n + 2) {
		&::before {
			background: url(${cashImageUrl}) center no-repeat;
			${deliveryListItemCommon}
		}
	}
	& > :nth-child(3) {
		&::before {
			background: url(${locationImageUrl}) center no-repeat;
			${deliveryListItemCommon}
		}
	}
	& > :first-child {
		&::before {
			background: url(${truckImageUrl}) center no-repeat;
			${deliveryListItemCommon}
		}
	}
	& > :first-child {
		&::before {
			background: url(${truckImageUrl}) center no-repeat;
			${deliveryListItemCommon}
		}
	}
`;

export const StyledDeliveryListItem = styled.li`
	text-transform: uppercase;
	position: relative;
	font-size: 28px;
	line-height: 36px;
	height: 36px;
	font-family: 'Roboto Web';
	font-weight: 300;
	color: #000000;
	margin-left: 75px;
	margin-bottom: 33px;
	&:last-child {
		margin-bottom: 0;
	}
`;

export const StyledDeliveryWrapper = styled.div`
	padding: 0 20px;
	margin-bottom: 120px;
`;

export const StyledMapWrapper = styled.div`
	position: relative;
	height: 346px;
	margin-top: -2px;
	&::before {
		content: '';
		position: absolute;
		width: 346px;
		height: 346px;
		top: 0;
		right: 155px;
		background-color: rgba(5, 243, 0, 0.2);
		border-radius: 50%;
	}
`;

export const StyledDeliveryContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
