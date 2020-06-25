import React from 'react';
import { Footer } from './footer.component';
import { menuStub } from '../../data-stub';

export default {
	title: 'Footer',
};

export const defaultFooter = () => <Footer menuItems={menuStub} />;
