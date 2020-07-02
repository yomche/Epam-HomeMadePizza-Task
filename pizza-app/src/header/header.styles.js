import styled from 'styled-components';

export const StyledHeader = styled.div`
	width: 1920px;
	height: 450px;
	margin: 0px -240px;
	background-color: #efca7c;
`;

/* FLEX BOX */
export const StyledMenu = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

/* BUTTON FORM */
export const StyledButton = styled.button`
	width: 400px;
	height: 90px;

	border-radius: 15px;
	background-color: #fde8b1;
	cursor: pointer;
`;

/* BUTTON TEXT */
export const StyledText = styled.p`
	font-family: ' Lucida Console', Courier;
	font-style: italic;
	font-size: 50px;
	font-weight: bold;

	margin-top: 15px;
	text-align: center;

	color: #820300;
`;
