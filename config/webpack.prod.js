/*
 * @Author: shaoqing
 * @Date: 2021-06-24 09:40:00
 * @LastEditTime: 2021-07-05 16:43:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-blog\config\webpack.prod.js
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const chalk = require('chalk')

module.exports = require('./webpack.common')({
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin({
      format: `${chalk.green.bold('build[:bar]')}${chalk.green.bold(':percent')}:elapsed seconds`,
      clear: false,
      width: 40
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
      ignoreOrder: true // 忽略有关顺序冲突的警告
    })
  ],
  stats: 'normal' // 标准输出
})
