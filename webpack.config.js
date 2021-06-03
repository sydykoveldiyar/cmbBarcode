const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	
	//define entry point | contains all require s to all module.export s
	entry: './src/main.js',
	
	//define output point
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	
	node: {
		fs: 'empty'
	},
	
	module: {
		rules: [
		
			{
				//css
				test: /\.css$/,
				//include: [
				//	path.resolve(__dirname, 'src')
				//],
				//exclude: [
				//	path.resolve(__dirname, '/(node_modules)/')
				//],
				use: [
					'style-loader',
					'css-loader'
				]
			},
			
			{
				test: /\.(png|jpg)$/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	
	plugins: [
	
		new webpack.ProvidePlugin({
			//identifier: ['module1', 'property1'],
			
			//or
			//identifier: 'module1',
			
			//note: use './' to access src dir
		}),
		
		//new CopyWebpackPlugin([ ...patterns ], options) //simple pattern: { from: 'source', to: 'dest' }
		
		new CopyWebpackPlugin({
		  patterns:[
				{ from: 'src/assets/flashbuttonnotsupported.png', to: 'assets/flashbuttonnotsupported.png' },
				{ from: 'src/assets/flashbuttonoff.png', to: 'assets/flashbuttonoff.png' },
				{ from: 'src/assets/flashbuttonon.png', to: 'assets/flashbuttonon.png' },
				{ from: 'src/assets/overlay_mw.png', to: 'assets/overlay_mw.png' },
				{ from: 'src/assets/zoom.png', to: 'assets/zoom.png' },
				{ from: 'src/assets/zoomnotsupported.png', to: 'assets/zoomnotsupported.png' }
			]
		})
		
	]
};