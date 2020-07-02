import React, { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledAppContainer } from './app.styles';
import { Header } from './header/header.component';
import { Menu } from './main_menu/main_menu.component';
import { About } from './about/about.component';
import { Warn } from './warn/warn.component';
import { Contacts } from './contacts/contacts.component';

export class App extends React.Component {
	// инициализировать объект state для управления данными о всех загруженных товарах и товарах в корзине
	constructor(props) {
		super(props);
		this.state = { productsItems: [], pizzaItems: [], drinksItems: [] };
	}

	// наполнить state mock-данными о всех товарах в componentDidMount
	componentDidMount() {
		console.log('componentDidMount');
		console.log(this.state);
		this.setState((state) => ({
			pizzaItems: [
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
			],
		}));
		this.setState((state) => ({
			drinksItems: [
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
		/* getJson('http://localhost:8080/GetProducts ').then((data) => {
			this.setState({ products: data.map((number) => number.id) });
		});
		console.log(this.state);
		*/
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	addToBasket(data) {
		const { drinksItems, pizzaItems, productsItems } = this.state;
		switch (data) {
			case '0':
				return pizzaItems.push(productsItems[0].id);
			case '1':
				return pizzaItems.push(productsItems[1].id);
			case '2':
				return pizzaItems.push(productsItems[2].id);
			case '3':
				return pizzaItems.push(productsItems[3].id);
			case '4':
				return drinksItems.push(productsItems[4].id);
			case '5':
				return drinksItems.push(productsItems[5].id);
			case '6':
				return drinksItems.push(productsItems[6].id);
			case '7':
				return drinksItems.push(productsItems[7].id);
			default:
				return 0;
		}
	}

	/*
	newOrder(order, name, address, telephone, paymethod) {
		const {} = this.state;
		console.log({ order, name, address, telephone, paymethod });
		postJson('http://localhost:8080/CreateOrderDto', {
			productId: order,
			clientName: name,
			phoneNumber: address,
			address: telephone,
			payMethod: paymethod,
		});
	}
	*/

	render() {
		return (
			<Router>
				<StyledAppContainer>
					<Header />
					<Menu />
					<About />
					<Contacts />
				</StyledAppContainer>
			</Router>
		);
	}
}

export default memo(App);
