const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)([\?]?.*)$/,
        loader: 'file-loader?name=assets/images/[name].[ext]',
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot|otf)([\?]?.*)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'react-dom',
    'react-i18next': 'react-i18next',
    i18next: 'i18next',
    'i18next-http-backend': 'i18next-http-backend',
    'prop-types': 'prop-types',
    '@viamericas/viam-alert-messages': '@viamericas/viam-alert-messages',
    '@viamericas/viam-loading': '@viamericas/viam-loading',
    '@viamericas/datepicker-multi-language':
      '@viamericas/datepicker-multi-language',
    moment: 'moment',
    '@viamericas/viam-pagination-reports':
      '@viamericas/viam-pagination-reports',
    '@viamericas/viam-utils': '@viamericas/viam-utils',
    '@viamericas/viam-message-information':
      '@viamericas/viam-message-information',
    xlsx: 'xlsx',
  },
};
