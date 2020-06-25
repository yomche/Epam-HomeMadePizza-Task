import React from 'react';
import { menuStub } from '../../data-stub';
import { MainMenu } from './main-menu.component';

export default { title: 'Main Menu' };

export const defaultMainMenu = () => <MainMenu menu={menuStub} color="#17181a" />;
