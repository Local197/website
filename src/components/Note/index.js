import React from 'react'

require('./index.scss')

export default (props) => {
  return (
    <div className={`app-Note${props.warning ? "-warning" : ""}`}>
      {props.children}
    </div>
  )
}
