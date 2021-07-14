/*
 * @Author: shaoqing
 * @Date: 2021-06-24 11:03:22
 * @LastEditTime: 2021-07-14 18:09:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-blog\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Animation from './pages/animation/animation'
import Home from './pages/home/home'
import './style.scss'

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <HashRouter>
        <Switch>
          <Route path="/loading" component={Animation}></Route>
          <Route path="/home" component={Home}></Route>
          <Redirect to="/loading"></Redirect>
        </Switch>
      </HashRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
