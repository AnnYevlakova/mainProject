const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
	'webpack-dev-server/client?http://localhost:8080',
	  'webpack/hot/only-dev-server',
	  './src/index.js'
	  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
	module: {
	  rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader', 'eslint-loader']
			},
		],
	  loaders: [
	  	{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader!babel-loader'],
				query:
					{
					presets: ["react"]
					}
			},
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file-loader?name=./img/[name].[ext]"
			}
	  ]
	},
	resolve: {
	  extensions: ['*', '.js', '.jsx']
	},
  plugins: [
    new ExtractTextPlugin({filename: "bundle.css"})
  ],
	devServer: {
	  contentBase: './dist',
	  hot: true
	}
};
