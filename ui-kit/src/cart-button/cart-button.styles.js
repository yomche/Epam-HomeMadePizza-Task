import styled from 'styled-components';
import { basketImageUrl } from './images';

export const StyledBasket = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: relative;
	border: 1px solid #9b5900;
	border-radius: 20px;
	width: 200px;
	height: 50px;
	cursor: pointer;
	align-items: center;

	padding-left: 40px;
	box-sizing: border-box;
	&::after {
		content: '';
		position: absolute;
		height: 24px;
		width: 24px;
		background: url(${basketImageUrl}) center no-repeat;
		top: 49%;
		transform: translateY(-50%);
		left: 5px;
	}
`;
export const StyledBasketCounter = styled.div`
	background-color: #ffd3a1;
	width: 28px;
	height: 28px;
	border-radius: 50%;
	font-size: 22px;
	line-height: 28px;
	color: #9b5900;
	text-align: center;
	position: relative;
	margin-right: 6px;
	margin-top: 2px;
`;

export const StyledLabel = styled.span`
	font-size: 30px;
	line-height: 36px;
	box-sizing: border-box;
`;
