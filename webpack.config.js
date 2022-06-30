const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/pages/api/card/index.ts',
  mode: 'production',
  // entry: './dist',
  target: 'node16',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'distW'),
    filename: 'index.js',
    library: {
      type: 'commonjs',
    },
  },
};
