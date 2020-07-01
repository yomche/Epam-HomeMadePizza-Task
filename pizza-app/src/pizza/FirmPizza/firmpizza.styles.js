import styled from 'styled-components';
import { FirmPizza, Basket } from '../images';

export const StyledFirmPizza = styled.div`
	background-image: url(${FirmPizza});
	width: 436px;
	height: 378px;
`;
export const StyledZagalovok = styled.div`
	font-size: 36px;
	color: #820300;
	font-weight: bold;
	margin-left: 50%;
	width: 177px;
	height: 53px;
`;

export const StyledText1 = styled.div`
	font-size: 23px;
	color: #000000;
	flex-direction: column;
	text-align: right;

	margin-left: 60%;
	width: 150px;
	height: 143px;
`;
export const StyledBasket = styled.button`
	width: 81px;
	height: 81px;
	background-image: url(${Basket});
	margin: 110px 80px;
	background-color: #fde8b1;
	border-radius: 39px;
	cursor: pointer;
`;

export const StyledText2 = styled.div`
	font-size: 15px;
	color: #000000;
	margin-top: 20%;
	margin-left: 30%;
`;

export const StyledText3 = styled.div`
	font-size: 15px;
	color: #000000;
	font-weight: bold;
	margin-left: 30%;
`;
