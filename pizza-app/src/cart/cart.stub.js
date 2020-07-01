import { meatPizzaImageUrl, cheesePizzaImageUrl, brandPizzaImageUrl, calzoneImageUrl, fruitDrinkImageUrl, gasDrinkImageUrl, waterImageUrl } from './images';

export const cartStub = {
	cart: [
		{
			type: 'pizza',
			count: 1,
			title: 'MEAT PIZZA',
			price: 349,
			description: {
				energy: 252.2,
				protein: 10.9,
				fat: 9.4,
				carb: 29.2,
			},
			image: meatPizzaImageUrl,
		},
		{
			type: 'pizza',
			count: 1,
			title: 'FOUR CHEESES',
			price: 299,
			description: {
				energy: 309.9,
				protein: 13.2,
				fat: 13.2,
				carb: 32.5,
			},
			image: cheesePizzaImageUrl,
		},
		{
			type: 'pizza',
			count: 1,
			title: 'BRAND NAME PIZZA',
			price: 349,
			description: {
				energy: 224.6,
				protein: 6.3,
				fat: 4.3,
				carb: 38.8,
			},
			image: brandPizzaImageUrl,
		},
		{
			type: 'pizza',
			count: 1,
			title: 'CALZONE',
			price: 209,
			description: {
				energy: 303.5,
				protein: 11.3,
				fat: 18,
				carb: 21.9,
			},
			image: calzoneImageUrl,
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
			image: fruitDrinkImageUrl,
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
			image: gasDrinkImageUrl,
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
			image: waterImageUrl,
		},
	],
};
