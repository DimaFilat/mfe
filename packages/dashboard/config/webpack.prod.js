const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const sharedDependencies = Object.keys(packageJson.dependencies);

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/dashboard/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap'
      },
      shared: sharedDependencies
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
