/*
 * @Author: shaoqing
 * @Date: 2021-06-24 11:03:22
 * @LastEditTime: 2021-07-06 16:51:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-blog\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <span>{process.env.NODE_ENV}s</span>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
