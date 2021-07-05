/*
 * @Author: shaoqing
 * @Date: 2021-06-24 11:03:22
 * @LastEditTime: 2021-07-05 16:32:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-blog\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import npm from '../public/clear-all.png'

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <span>{process.env.NODE_ENV}</span>
      <img src={npm} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
