/*
 * @Author: shaoqing
 * @Date: 2021-06-25 16:47:09
 * @LastEditTime: 2021-07-06 16:56:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-blog\.babelrc.js
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.9.1',
        targets: {
          chrome: '58',
          ie: '11'
        }
      }
    ],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV === 'development'
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    '@babel/plugin-syntax-dynamic-import'
  ]
}
