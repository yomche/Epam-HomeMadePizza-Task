import styled from 'styled-components';

export const StyledMenuList = styled.li`
	list-style: none;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	width: 578px;
	justify-content: space-between;
`;

export const StyledMenuItem = styled.span`
	text-decoration: none;
	font-size: 30px;
	line-height: 36px;
	color: ${(props) => props.color};
`;
