import styled from 'styled-components';

export const StyledFooterWrapper = styled.div`
	height: 142px;
	background-color: #505153;
	width: 100%;
`;

export const StyledFooterContentWrapper = styled.div`
	max-width: 1440px;
	display: flex;
	margin: 0 auto;
	height: 100%;
`;

export const StyledFooterPhone = styled.span`
	color: #ffffff;
	text-transform: uppercase;
	font-size: 20px;
	line-height: 28px;
	margin-bottom: 10px;
`;

export const StyledFooterPhoneWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 20px;
	margin-top: 10px;
	flex-shrink: 0;
`;

export const StyledSocialContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80px;
	min-width: 80px;
	align-content: flex-start;
	margin-top: 35px;
	margin-left: 64px;
`;

export const StyledSocialLogo = styled.a`
	&:first-child {
		margin-bottom: 8px;
	}

	&:nth-child(odd) {
		margin-right: 18px;
	}
`;

export const StyledCopyRight = styled.span`
	text-transform: uppercase;
	font-size: 20px;
	line-height: 36px;
	color: #feb158;
	margin-top: 54px;
	margin-left: 176px;
	flex-shrink: 0;
`;

export const StyledMenuWrapper = styled.div`
	display: flex;
	width: 543px;
	margin-left: 139px;
`;
