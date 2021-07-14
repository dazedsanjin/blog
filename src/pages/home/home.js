/*
 * @Author: shaoqing
 * @Date: 2021-07-13 21:30:26
 * @LastEditTime: 2021-07-14 18:41:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-blog\src\pages\home\home.js
 */
import React, { useState, useEffect } from 'react'
import { Drawer } from 'antd'
import { Link } from 'react-router-dom'
import './home.scss'

function Home() {
  const [articles] = useState([1, 2, 3, 4])
  const [visible, setVisible] = useState(false)
  useEffect(() => {})
  /**
   * @description: 文章列表
   * @param {*}
   * @return {*}
   */
  function ArticleList() {
    const articleList = articles.map((article, index) => (
      <div className="article" key={index}>
        {article}
      </div>
    ))
    return <div className="articles">{articleList}</div>
  }
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <div className="home">
      <header className="header">
        <ul className="links">
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <div className="switch" onClick={showDrawer}>
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32" width="30" height="30">
            <g fill="#192e59">
              <path d="M21.14,2.35Q12.49,2.44,3.85,2c-3.14-.17-3.11,3.8,0,4q8.64.46,17.29.37C24.27,6.29,24.28,2.32,21.14,2.35Z"></path>
              <path d="M20.82,10.53a155.34,155.34,0,0,1-16.65-.07c-3.14-.18-3.11,3.79,0,4a155.31,155.31,0,0,0,16.65.07C23.93,14.35,24,10.38,20.82,10.53Z"></path>
              <path d="M20.88,19.05,4.12,19c-3.13,0-3.14,4,0,4L20.88,23C24,23,24,19.07,20.88,19.05Z"></path>
            </g>
          </svg>
        </div>
      </header>
      <main className="main">
        <ArticleList />
      </main>
      <footer></footer>
      <Drawer title="Basic Drawer" placement="right" visible={visible} closable={false} onClose={onClose}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}

export default Home
