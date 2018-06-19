module.exports = {
  mode: 'development',
  output: {
    filename: 'dist/main.js',
    path: '/Users/Confetti/Documents/scroll-higlass'
  },
  entry: './src/index.js',
  module: {
  	rules: [{
		test: /\.jsx?$/,
  		exclude: /node_modules/,
  		use : {
      		loader : 'babel-loader',
      		options : {
          		presets : ['env', 'react'],
      		},
  		},
  	}],

  },
};

