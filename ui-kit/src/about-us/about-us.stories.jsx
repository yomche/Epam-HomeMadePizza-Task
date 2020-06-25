import React from 'react';
import { AboutUs } from './about-us.component';
import { AboutUsOrderButton } from './about-us-order-button/about-us-order-button.component';
import { defaultViewport } from '../../viewports';

export default {
	title: 'About Us',
	parameters: {
		viewport: {
			viewports: { '1440': defaultViewport },
			defaultViewport: '1440',
		},
	},
};

export const defaultAboutUs = () => (
	<AboutUs>
		<AboutUsOrderButton />
	</AboutUs>
);
