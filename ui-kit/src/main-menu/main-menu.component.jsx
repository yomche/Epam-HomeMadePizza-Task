import React, { memo } from 'react';
import { StyledMenuItem, StyledMenuList } from './main-menu.styles';

const MainMenuComponent = ({ menu, color, renderLinkWrapper, idPrefix }) => {
	return (
		<StyledMenuList>
			{menu.map((item) => {
				const MenuItem = <StyledMenuItem color={color}>{item.title}</StyledMenuItem>;
				const id = `${idPrefix}-${item.title}`;
				return renderLinkWrapper !== undefined ? (
					renderLinkWrapper(MenuItem, item.anchor, idPrefix, id)
				) : (
					<StyledMenuItem color={color} id={id} key={id}>
						{item.title}
					</StyledMenuItem>
				);
			})}
		</StyledMenuList>
	);
};

export const MainMenu = memo(MainMenuComponent);
