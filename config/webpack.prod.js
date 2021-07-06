/*
 * @Author: shaoqing
 * @Date: 2021-06-24 09:40:00
 * @LastEditTime: 2021-07-06 18:20:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-blog\config\webpack.prod.js
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBarPlugin = require('webpackbar')

module.exports = require('./webpack.common')({
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBarPlugin(), // 打包进度条
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
      ignoreOrder: true // 忽略有关顺序冲突的警告
    })
  ],
  stats: 'errors-only' // 控制台仅显示错误信息
})
