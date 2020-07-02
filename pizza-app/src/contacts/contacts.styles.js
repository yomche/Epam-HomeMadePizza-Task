import styled from 'styled-components';
import { contactsURL, buttonURL } from './images';

export const StyledContacts = styled.div`
	background-image: url(${contactsURL});
	width: 1920px;
	height: 1080px;
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

export const StyledText = styled.p`
	font-family: 'Lucida Console', Courier;
	font-size: 45px;
	padding-top: 40px;
	margin: 30px 40px;
	text-align: left;
	color: Black;
`;

export const StyledBox = styled.div`
	width: 560px;
	height: 400px;
	border-color: #820300;
	border-radius: 15px;
	background-color: #fde8b1;
	position: relative;
	top: 10%;
	left: 4%;
`;

export const StyledFooter = styled.p`
	font-family: 'Lucida Console', Courier;
	font-size: 50px;
	top: 30px;
	margin: 3px 40px;
	text-align: left;
	color: #fdf9a2;
`;

export const StyledShift = styled.div`
	padding-top: 250px;
`;

export const StyledFooterRight = styled.p`
	font-family: 'Lucida Console', Courier;
	font-size: 50px;
	top: 30px;
	margin: 3px 80px;
	text-align: right;
	color: #fdf9a2;
`;

export const StyledShiftR = styled.div`
    position: absolute;
    margin: -160px 977px;
`;
