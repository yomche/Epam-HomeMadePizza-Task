import React from 'react';
import { Banner } from './banner.component';
import { defaultViewport } from '../../viewports';

export default {
	title: 'Banner',
	parameters: {
		viewport: {
			viewports: { '1440': defaultViewport },
			defaultViewport: '1440',
		},
	},
};

export const defaultBanner = () => <Banner />;
