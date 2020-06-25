import styled from 'styled-components';

export const StyledCatalogItem = styled.div`
	width: 320px;
	height: 400px;
	border-radius: 20px;
	border: 1px solid #e5e5e5;
	margin-right: 40px;
	box-sizing: border-box;
	position: relative;
	flex-shrink: 0;

	&:last-child {
		margin-right: 0;
	}
`;

export const StyledCatalogItemImage = styled.img`
	display: block;
	margin: 0 auto;
	margin-top: -15px;
`;

export const StyledCatalogItemDescriptionRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: nowrap;
	padding: 0 20px;
	margin-bottom: 15px;
`;
export const StyledCatalogItemTitle = styled.h3`
	font-size: 24px;
	line-height: 30px;
	font-weight: normal;
	color: #17181a;
	margin: -1px;
	padding: 0;
`;

export const StyledCatalogItemInfo = styled.div`
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: #ffd3a1;
	position: relative;
	margin-top: 7px;
	margin-right: -4px;
	text-align: center;
	line-height: 15px;
	font-size: 10px;
`;

export const StyledCatalogInfoBlock = styled.div`
	position: absolute;
	font-size: 14px;
	line-height: 18px;
	width: 270px;
	height: 220px;
	padding: 10px;
	top: 0;
	right: 0;
	content: '';
	background-color: rgba(255, 211, 161, 0.5);
	z-index: 2;
	top: -251px;
	right: ${(props) => ((props.index + 1) % 4 === 0 ? '-2px' : '-272px')};
	display: none;
	&::after {
		content: '';
		position: absolute;
		top: 240px;
		left: ${(props) => ((props.index + 1) % 4 === 0 ? '270px' : '0')};
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid rgba(255, 211, 161, 0.5);
	}
	${StyledCatalogItemInfo}:hover & {
		display: block;
	}
`;

export const StyledCatalogItemPrice = styled.div`
	font-size: 24px;
	line-height: 30px;
	color: #000000;
	font-weight: bold;
	position: relative;
`;

export const StyledCatalogItemCartButton = styled.button`
	background-color: #ffffff;
	width: 131px;
	height: 37px;
	border-radius: 20px;
	border: 1px solid #9b5900;
	color: #9b5900;
	margin-right: -7px;
	text-transform: uppercase;
	margin-top: -3px;
	margin-right: -9px;
	cursor: pointer;
	font-size: 14px;
	line-height: 17px;
	&:focus {
		outline: none;
	}
`;

export const StyledImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 293px;
	width: 100%;
	margin: auto;
`;

export const StyledCatalogInfoRow = styled.div`
	opacity: 1;
	text-align: left;
`;
