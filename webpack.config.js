const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "[name].[hash].js",
		path: path.resolve(__dirname, "build"),
		publicPath: "./"
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		port: 3000,
		publicPath: "/",
		open: true
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./public/htmlTemplate.html",
			filename: "index.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ["file-loader"]
			},
			{
				test: /\.(csv|tsv)$/,
				use: ["csv-loader"]
			},
			{
				test: /\.xml$/,
				use: ["xml-loader"]
			}
		]
	}
};
