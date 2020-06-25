const path = require('path');

module.exports = async ({ config }) => {
	config.module.rules.push({
		test: /\.(woff|woff2|ttf)$/,
		use: [
			{
				loader: 'file-loader',
				query: {
					name: '[name].[ext]',
				},
			},
		],
		include: path.resolve(__dirname, '../'),
	});
	return config;
};
