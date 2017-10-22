const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cssFn = require('./css.config');

module.exports = function plugins (isProd, ROOT) {

	const vendorName = isProd ? '[name].[chunkhash].js' : 'vendor.js';
	const ENV = 'dev';

	const chunk = new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		filename: vendorName,
		minChunks (module) {
			const ctx = module ? module.context : '';
			// this assumes your vendor imports exist in the node_modules directory
			return ctx.indexOf('node_modules') !== -1;
		}
	});
	const hmr = new webpack.HotModuleReplacementPlugin();

	const html = new HtmlWebpackPlugin({
		title: 'Advanced React',
		filename: 'index.html',
		template: 'index.html'
	});

	const common = [chunk, html];
	const dev = [hmr];
	const prod = [];

	return isProd ?
		[...common, ...prod] :
		[...common, ...dev];
};