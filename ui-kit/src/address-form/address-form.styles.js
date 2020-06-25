import styled from 'styled-components';
import { arrowsImageUrl } from './images';

export const StyledAddressForm = styled.form`
	width: 645px;
`;

export const StyledTextInput = styled.input`
	border: 1px solid #9b5900;
	width: 100%;
	height: 60px;
	font-size: 24px;
	padding-left: 13px;
	box-sizing: border-box;
	opacity: ${(props) => (props.disabled ? '0.4' : '1')};
`;

export const StyledTextInputsRow = styled.div`
	display: flex;
	flex-wrap: nowrap;
	margin: 30px 0;

	& > :nth-child(1n + 2) {
		margin-left: 15px;
	}
`;

export const StyledTextArea = styled.textarea`
	border: 1px solid #9b5900;
	height: 128px;
	width: 100%;
	font-size: 24px;
	padding-left: 13px;
	box-sizing: border-box;
	font-family: 'Roboto Web';
	padding: 13px 13px;
`;

export const StyledSelect = styled.select`
	border: 1px solid #9b5900;
	height: 60px;
	font-size: 24px;
	color: rgb(117, 117, 117);
	appearance: none;
	position: relative;
	width: 100%;
	padding: 0 13px;
`;

export const StyledSelectWrapper = styled.div`
	position: relative;
	width: 300px;
	margin-right: 15px;

	&::after {
		content: '';
		position: absolute;
		background: url(${arrowsImageUrl}) center no-repeat;
		width: 27px;
		height: 13px;
		top: 26px;
		right: 18px;
		pointer-events: none;
		transform: ${(props) => props.isOpen && 'rotate(180deg)'};
	}
`;

export const StyledOption = styled.option`
	font-family: 'Roboto Web';
	height: 60px;
	font-size: 24px;
	padding: 10px 0;
`;
export const StyledBasketPayRow = styled.div`
	display: flex;
	flex-wrap: nowrap;
	margin-top: 30px;
	height: 60px;
`;

export const StyledBasketSubmitButton = styled.button`
	border: none;
	background-color: #9b5900;
	width: 388px;
	height: 70px;
	color: #ffffff;
	border-radius: 20px;
	font-size: 36px;
	line-height: 70px;
	margin-top: 40px;
`;

export const StyledBasketHeading3 = styled.h3`
	font-size: 24px;
	font-weight: 400;
`;
