import styled from 'styled-components';
import { Pepsi, Basket } from '../images';

export const StyledPepsi = styled.div`
	background-image: url(${Pepsi});
	width: 482px;
	height: 330px;
	display: block;
`;
export const StyledZagalovok = styled.div`
	font-size: 36px;
	color: #820300;
	font-weight: bold;
	margin-left: 60%;
	width: 177px;
	height: 53px;
	margin: auto;
	margin-left: 50%;
	padding-top: 30%;
`;

export const StyledText1 = styled.div`
	font-size: 23px;
	color: #000000;
	margin: auto;
	width: 187px;
	height: 143px;
	margin-left: 30%;
	text-align: right;
	display: block;
	margin-left: 50%;
`;
export const StyledBasket = styled.button`
	width: 81px;
	height: 81px;
	background-image: url(${Basket});
	margin: auto;
	background-color: #fde8b1;
	border-radius: 39px;
	cursor: pointer;
`;

export const StyledText2 = styled.div`
	font-size: 15px;
	color: #000000;
	margin: auto;
	text-align: left;
	font-weight: bold;
	margin-left: 30%;
	margin-top: -10%;
`;

export const StyledText3 = styled.div`
	font-size: 15px;
	color: #000000;
	font-weight: bold;
	margin: auto;
`;
