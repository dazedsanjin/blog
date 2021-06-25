/*
 * @Author: shaoqing
 * @Date: 2021-06-25 16:47:09
 * @LastEditTime: 2021-06-25 17:57:34
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
  ]
}
