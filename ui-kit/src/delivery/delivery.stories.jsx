import React from 'react';
import { DeliverySection } from './delivery.component';

import { defaultViewport } from '../../viewports';

export default {
	title: 'Delivery Section',
	parameters: {
		viewport: {
			viewports: { '1440': defaultViewport },
			defaultViewport: '1440',
		},
	},
};

export const defaultDeliverySection = () => <DeliverySection />;
