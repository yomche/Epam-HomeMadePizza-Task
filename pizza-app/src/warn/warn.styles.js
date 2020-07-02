import styled from 'styled-components';
import { buttonURL } from './images';

export const StyledWarn = styled.div`
	width: 650px;
	height: 520px;
    margin: 0px auto;
	background-color: #fde8b1;
	border-style: solid;
    border-color: #820300;
	border-radius: 30px;
`;

export const StyledExitButton = styled.button`
	background-image: url(${buttonURL});
	width: 55px;
	height: 55px;
	border-radius: 30px;
	background-color: #fde8b1;
	cursor: pointer;
	margin: 0px auto;
`;

export const StyledText = styled.p`
	font-family: 'Lucida Console', Courier;
	font-style: italic;
	font-size: 45px;
	text-align:center;
	color: Black;
`;
