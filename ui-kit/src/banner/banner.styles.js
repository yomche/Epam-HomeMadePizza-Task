import styled from 'styled-components';
import { bannerImageUrl } from './images';

export const StyledBanner = styled.div`
	height: 260px;
	width: 100%;
	background: url(${bannerImageUrl}) center no-repeat;
	position: relative;
	margin-bottom: 120px;
	margin-top: 120px;
`;
