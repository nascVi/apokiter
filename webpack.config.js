var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, 'src');

module.exports = {
    entry :  {
        bundle :  ['webpack-dev-server/client?http://0.0.0.0:8080', 
            'webpack/hot/only-dev-server',
           path.resolve(assetsPath,'index.js')],
    },
    output: {
        chunkFilename: '[name].js',
        filename: '[name].js', //
        path: path.join(assetsPath ,"dist/js/"),
        publicPath: 'http://localhost:8080/assets/'
    },
    module: {
        rules: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
		test: /.jsx?$/,
		use:['react-hot-loader/webpack','babel-loader'],
                include: [path.resolve(assetsPath)]
           }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'hidden-source-map',

    plugins: [
     new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
    ]
};
