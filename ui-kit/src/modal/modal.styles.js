import styled from 'styled-components';
import { crossImageUrl } from './images';

export const StyledModalShadow = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 4000;
`;

export const StyledModalContent = styled.span`
	${(props) => `transform:  ${`translate(-50%, ${props.animationState === 'in' ? '-50%' : '-50%'})`};
        opacity: ${props.animationState === 'in' ? '1' : '1'};
    `};
	display: flex;
	max-width: 100%;
	max-height: 100%;
	transition: transform 0.3s ease-out, opacity 150ms linear 0ms;
	position: absolute;
	top: 50%;
	left: 50%;
`;

export const StyledCloseButton = styled.button`
	position: absolute;
	background: url(${crossImageUrl}) center no-repeat;
	width: 23px;
	height: 23px;
	border: none;
	top: 45px;
	right: 30px;
	z-index: 2000;
	cursor: pointer;
`;
