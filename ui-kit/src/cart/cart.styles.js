import styled from 'styled-components';
import { lineImageUrl, lineCrossImageUrl, deleteImageUrl } from './images';

export const StyledCartWrapper = styled.div`
	width: 1000px;
	background-color: #ffffff;
	height: 90vh;
	padding: 0 30px 45px 45px;
	box-sizing: border-box;
`;

export const StyledCartList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0 15px 0 0;
`;

export const StyledCartItem = styled.li`
	font-size: 24px;
	line-height: 30px;
	display: flex;
	flex-wrap: nowrap;
	justify-content: flex-end;
	height: 82px;
	align-items: center;
	border-top: 1px solid #ffd3a1;
	&:last-child {
		border-bottom: 1px solid #ffd3a1;
	}
	& > first-child {
		margin-right: auto;
	}
`;

export const StyledControlsWrapper = styled.div`
	width: 200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 186px;
`;

export const StyledCartItemTitle = styled.span`
	margin-right: auto;
`;

const commonButton =
	'border: 1px solid #9B5900; border-radius: 10px; height: 62px; width: 44px; background-color: #ffffff;';

export const StyledCartDecreaseButton = styled.button`
	${commonButton};
	background: url(${lineImageUrl}) center no-repeat;
`;

export const StyledCartIncreaseButton = styled.button`
	${commonButton};
	background: url(${lineImageUrl}) center no-repeat, url(${lineCrossImageUrl}) center no-repeat;
`;

export const StyledCartItemPrice = styled.span`
	width: 92px;
`;

export const StyledDeleteButton = styled.button`
	border: none;
	width: 30px;
	height: 30px;
	background: url(${deleteImageUrl}) center no-repeat;
	background-size: contain;
`;

export const StyledCartCheck = styled.p`
	font-size: 24px;
	text-align: right;
	margin: 10px 65px 0 0;
`;

export const StyledCartError = styled.p`
	font-size: 18px;
	line-height: 32px;
	color: #ff0100;
`;
export const StyledCartEmptyMessage = styled.h3`
	font-size: 36px;
	line-height: 36px;
	text-align: center;
	font-weight: 400;
`;

export const StyledCartHeader = styled.div`
	position: fixed;
	background-color: #ffffff;
	height: 50px;
	width: calc(100% - 90px);
	padding-top: 45px;
`;

export const StyledCartContent = styled.div`
	overflow: auto;
	height: calc(90vh - 180px);
	margin-top: 135px;
	margin-bottom: 45px;
`;
