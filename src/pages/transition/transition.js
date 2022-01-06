/*
 * @Author: your name
 * @Date: 2022-01-06 13:25:33
 * @LastEditTime: 2022-01-06 14:03:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
 * @FilePath: \react-blog\src\pages\transition\transition.js
 */
import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './transition.scss'

const modes = ['out-in', 'in-out']

function Transition() {
  const [mode, setMode] = useState('out-in')
  const [state, setState] = useState(true)

  return (
    <div>
      <div className="label">Mode:</div>
      <div className="modes">
        {modes.map((m) => (
          <div key={m}>
            <input
              type="checkbox"
              value={m}
              checked={mode === m}
              onChange={(e) => {
                setMode(e.target.value)
              }}
            ></input>
            <span>{m}</span>
          </div>
        ))}
      </div>
      <div className="main">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false)
            }}
            classNames="fade"
          >
            <div className="button-container">
              <button className="btn" onClick={() => setState((state) => !state)}>
                {state ? 'Hello World' : 'Goodbye World'}
              </button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}

export default Transition
