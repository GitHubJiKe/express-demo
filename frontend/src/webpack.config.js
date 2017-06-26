var __API_HOST__ = 'http://localhost:3000';//方便去访问别人的主机调试代码
var __PUBLIC_PATH__ = '';//for local
if(process.env.API_HOST){
  __API_HOST__ = 'http://'+process.env.API_HOST;
}
if(process.env.PUBLIC_PATH){
  __PUBLIC_PATH__ = 'http://'+process.env.PUBLIC_PATH;
}else{
  __PUBLIC_PATH__ = __API_HOST__;//不指定PUBLIC_PATH的话,默认和API_HOST一样
}
var webpack  = require('webpack');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: require('path').join(__dirname,'../../backend/public/'),
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192'}
    ]
  },plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __APP_ENV__: JSON.stringify('dev'),
      __STATE_VER__: JSON.stringify('4'),
      __PUBLIC_PATH__: JSON.stringify(__PUBLIC_PATH__),
      __API_HOST__: JSON.stringify(__API_HOST__)
    })
  ]
};