import React from 'react';
import { Header } from './header.component';
import { menuStub } from '../../data-stub';

import { defaultViewport } from '../../viewports';

export default {
	title: 'Header',
	parameters: {
		viewport: {
			viewports: { '1440': defaultViewport },
			defaultViewport: '1440',
		},
	},
};

export const defaultHeader = () => <Header menuItems={menuStub} />;
