import styled from 'styled-components';
import { aboutURL, buttonURL } from './images';

export const StyledAbout = styled.div`
	background-image: url(${aboutURL});
	width: 1920px;
	height: 1010px;
	margin: -70px -240px;
`;

export const StyledExitButton = styled.button`
	background-image: url(${buttonURL});
	width: 55px;
	height: 55px;
	border-radius: 30px;
	background-color: #fde8b1;
	cursor: pointer;
	margin: 90px 80px;
`;

export const StyledTextHead = styled.p`
	font-family: 'Lucida Console', Courier;
	font-style: italic;
	font-size: 72px;
	font-weight: bold;

	margin: -120px 90px;
	color: white;
`;

export const StyledBox = styled.div`
	width: 770px;
	height: 600px;
	border-color: #820300;
	border-radius: 15px;
	background-color: #fde8b1;
	position: relative;
	top:10%;
	left: 4%;
`;

export const StyledText = styled.p`
	font-family: 'Lucida Console', Courier;
	font-style: italic;
	font-size: 38px;

	position: absolute;
	margin: 90px;
	color: Black;
`;
