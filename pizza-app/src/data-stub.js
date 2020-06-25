import {
	meatPizzaImageUrl,
	cheesePizzaImageUrl,
	classPizzaImageUrl,
	calzoneImageUrl,
	fruitDrinkImageUrl,
	gasDrinkImageUrl,
	stillWaterImageUrl,
} from './images';

export const pizzaItems = [
	{
		type: 'pizza',
		count: 1,
		title: 'Мясная',
		price: 349,
		description: {
			energy: 550,
			protein: 10,
			fat: 10,
			carb: 80,
		},
		image: meatPizzaImageUrl,
	},
	{
		type: 'pizza',
		count: 1,
		title: 'Фирменная',
		price: 399,
		description: {
			energy: 600,
			protein: 15,
			fat: 10,
			carb: 90,
		},
		image: classPizzaImageUrl,
	},
	{
		type: 'pizza',
		count: 1,
		title: '4 сыра',
		price: 349,
		description: {
			energy: 500,
			protein: 5,
			fat: 20,
			carb: 70,
		},
		image: cheesePizzaImageUrl,
	},
	{
		type: 'pizza',
		count: 1,
		title: 'Кальцоне с грибами',
		price: 299,
		description: {
			energy: 400,
			protein: 5,
			fat: 5,
			carb: 60,
		},
		image: calzoneImageUrl,
	},
];

export const drinksItems = [
	{
		type: 'drink',
		count: 1,
		title: 'Домашний морс',
		price: 99,
		description: '',
		image: fruitDrinkImageUrl,
	},
	{
		type: 'drink',
		count: 1,
		title: 'Газировка',
		price: 99,
		description: '',
		image: gasDrinkImageUrl,
	},
	{
		type: 'drink',
		count: 1,
		title: 'Минеральная вода',
		price: 49,
		description: '',
		image: stillWaterImageUrl,
	},
];

export const menuItems = [
	{
		title: 'Пиццы',
		anchor: 'pizza',
	},
	{
		title: 'Напитки',
		anchor: 'drinks',
	},
	{
		title: 'Доставка',
		anchor: 'delivery',
	},
	{
		title: 'О нас',
		anchor: 'about-us',
	},
];
