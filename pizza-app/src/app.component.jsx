import React, { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Logo } from 'ui-kit';
import { StyledAppContainer } from './app.styles';

export const App = () => {
	return (
		<Router>
			<StyledAppContainer>
				<Logo />
			</StyledAppContainer>
		</Router>
	);
};

export default memo(App);
