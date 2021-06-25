/*
 * @Author: shaoqing
 * @Date: 2021-06-24 09:39:46
 * @LastEditTime: 2021-06-25 18:13:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-blog\config\webpack.common.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('./paths')

module.exports = function (options) {
  const isEnvDevelopment = options.mode === 'development'
  const isEnvProduction = options.mode === 'production'
  return {
    mode: options.mode,
    bail: isEnvProduction, // 生产环境下，出现错误，停止继续打包
    devtool: isEnvProduction ? false : 'cheap-module-source-map',
    cache: isEnvDevelopment, // 开发环境下，缓存生成的webpack模块，改善构建速度
    entry: paths.appIndexJs,
    output: {
      path: isEnvProduction ? paths.appBuild : undefined,
      publicPath: './'
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.(js|jsx)$/,
              include: paths.appSrc,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    cacheDirectory: true
                  }
                }
              ]
            },
            {
              test: /\.css$/,
              exclude: /\.module\.css$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                  }
                },
                'postcss-loader'
              ]
            },
            {
              test: /\.(scss|sass)$/,
              exclude: /\.module\.(scss|sass)$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                  }
                },
                'postcss-loader',
                'sass-loader'
              ]
            },
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              type: 'asset',
              parser: {
                dataUrlCondition: {
                  maxSize: 1024 * 4
                }
              }
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2?)$/,
              type: 'asset/resource'
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true, // 依赖scriptLoading方式向html注入静态资源（默认：延迟加载）
        template: paths.appHtml
      }),
      ...options.plugins
    ],
    resolve: {
      modules: [paths.appNodeModules],
      extensions: ['.js', '.jsx'],
      alias: {
        '@src': paths.appSrc,
        '@public': paths.appPublic
      }
    },
    devServer: {},
    stats: options.stats // 编译/打包 警告、错误输出
  }
}
