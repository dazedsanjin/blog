/*
 * @Author: shaoqing
 * @Date: 2021-06-24 09:39:53
 * @LastEditTime: 2021-07-05 17:10:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-blog\config\webpack.dev.js
 */
const ESLintPlugin = require('eslint-webpack-plugin')
module.exports = require('./webpack.common')({
  mode: 'development',
  plugins: [
    new ESLintPlugin({
      fix: true,
      extensions: ['js', 'jsx'],
      exclude: ['/node_modules/', 'build'],
      cache: true
    })
  ],
  stats: 'errors-only' // 发生错误时输出
})
