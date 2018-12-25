const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { spawn } = require('child_process')
const postcssPresetEnv = require('postcss-preset-env')

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, '../src')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              config: {
                path: './'
              },
              plugins: () => [
                postcssPresetEnv(/* pluginOptions */)
              ]
            }
          }
        ],
        include: defaultInclude
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        include: defaultInclude,
        use: {
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
            configFile: './config/.eslintrc'

          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: defaultInclude,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
              '@babel/react'
            ]
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
        include: [defaultInclude, path.resolve(__dirname, '../public')]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
        include: [defaultInclude, path.resolve(__dirname, '../public')]
      }
    ]
  },
  target: 'electron-renderer',
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    before () {
      spawn(
        'electron',
        ['.'],
        { shell: true, env: process.env, stdio: 'inherit' }
      )
        .on('close', code => process.exit(0))
        .on('error', spawnError => console.error(spawnError))
    }
  }
}
