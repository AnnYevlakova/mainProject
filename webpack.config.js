module.exports = {
  entry: [
	'webpack-dev-server/client?http://localhost:8080',
	  'webpack/hot/only-dev-server',
	  './src/index.js'
	  ],
	module: {
	  rules: [
		{
		  test: /\.js$/,
		  exclude: /node_modules/,
		  loaders: ['babel-loader', 'eslint-loader']
		},
	  ],
	  loaders: [{
	    test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		loaders: ['react-hot-loader!babel-loader'],
		query:
		  {
			presets: ["react"]
		  }
	  }
	  ]
	},
	resolve: {
	  extensions: ['*', '.js', '.jsx']
	},
	output: {
	  path: __dirname + '/dist',
	  publicPath: '/',
	  filename: 'bundle.js'
	},
	devServer: {
	  contentBase: './dist',
	  hot: true
	}
};
