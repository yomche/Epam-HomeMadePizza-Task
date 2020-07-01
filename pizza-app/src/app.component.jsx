import React, { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledAppContainer } from './app.styles';
import { Header } from './header/header.component';
import { Menu } from './main_menu/main_menu.component';
import { About } from './about/about.component';

export class App extends React.Component {
	// инициализировать объект state для управления данными о всех загруженных товарах
	constructor(props) {
		super(props);
		this.state = {
			cart: [],
		};
	}

	// наполнить state mock-данными о всех товарах в componentDidMount
	componentDidMount() {
		console.log('componentDidMount');
		console.log(this.state);
		this.setState((state) => ({
			cart: [
				{
					type: 'pizza',
					count: 1,
					title: 'MEAT PIZZA',
					price: 349,
					description: {
						ingredients: ['CHICKEN', 'HAM', 'PEPPERONI', 'TOMATO_SAUCE', 'MOZZARELLA'],
						energy: 252.2,
						protein: 10.9,
						fat: 9.4,
						carb: 29.2,
					},
				},
				{
					type: 'pizza',
					count: 1,
					title: 'FOUR CHEESES',
					price: 299,
					description: {
						ingredients: ['LARGE_PORTION_OF_MOZZARELLA', 'MIX_OF_CHEDDAR_AND_PARMESAN', 'BLUE_CHEESE', 'CREAM_SAUCE'],
						energy: 309.9,
						protein: 13.2,
						fat: 13.2,
						carb: 32.5,
					},
				},
				{
					type: 'pizza',
					count: 1,
					title: 'BRAND NAME PIZZA',
					price: 349,
					description: {
						ingredients: ['HAM', 'CHORIZA', 'GARLIC', 'CREAM_SAUCE'],
						energy: 224.6,
						protein: 6.3,
						fat: 4.3,
						carb: 38.8,
					},
				},
				{
					type: 'pizza',
					count: 1,
					title: 'CALZONE',
					price: 209,
					description: {
						ingredients: ['CHAMPIGNONS', 'GARLIC', 'COTTAGE_CHEESE', 'CREAM_SAUCE'],
						energy: 303.5,
						protein: 11.3,
						fat: 18,
						carb: 21.9,
					},
				},
				{
					type: 'drink',
					count: 1,
					title: 'FRUIT WATER',
					price: 299,
					description: {
						energy: 42,
						protein: 0,
						fat: 0,
						carb: 10.6,
					},
				},
				{
					type: 'drink',
					count: 1,
					title: 'PEPSI',
					price: 99,
					description: {
						energy: 42,
						protein: 0,
						fat: 0,
						carb: 10.2,
					},
				},
				{
					type: 'drink',
					count: 1,
					title: 'WATER',
					price: 59,
					description: {
						energy: 0,
						protein: 0,
						fat: 0,
						carb: 0,
					},
				},
			],
		}));
		console.log(this.state);
	}

	render() {
		return (
			<Router>
				<StyledAppContainer>
					<Header />
					<Menu />
					<About />
				</StyledAppContainer>
			</Router>
		);
	}
}

export default memo(App);
