import { cheesePizzaImageUrl, calzoneImageUrl } from './stub-images/images';

export const cartStub = {
	cart: [
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
	],
};
