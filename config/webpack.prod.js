/*
 * @Author: shaoqing
 * @Date: 2021-06-24 09:40:00
 * @LastEditTime: 2021-06-25 11:19:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-blog\config\webpack.prod.js
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

module.exports = require('./webpack.common')({
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin({
      format: `${chalk.green.bold('build[:bar]')} ` + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false,
      width: 40
    })
  ],
  stats: 'normal' // 标准输出
})
