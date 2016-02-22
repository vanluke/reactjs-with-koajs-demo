import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
const extractCSS = new ExtractTextPlugin('public/styles/[name].css');
export default {
  devtool: 'source-map',
  entry: [
    `${__dirname}/public/js/app`
  ],
  output: {
    path: `${__dirname}/public`,
    filename: `bundle.js`
  },
  module: {
    loaders: [{ test: /\.js?$/,  exclude: /node_modules/, loader: 'babel' },
    { test: /\.scss$/i, loader: ExtractTextPlugin.extract('style', 'css!sass') },
    { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
    { test: /\.(jpe?g|png|gif|svg)$/i,loaders: [ 'file?hash=sha512&digest=hex&name=[hash].[ext]',
    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false' ] }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./public/styles")]
  },
  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
            allChunks: true
    })
 ]
};
