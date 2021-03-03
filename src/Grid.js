import React from "react"
import "./App.css"
import uuid from 'react-uuid'

const Grid = ({ n, m, array }) => {
  return (
    <div className="grid" style={{
      width: `${m * 10}px`,
      height: `${n * 10}px`
    }}>
      {
        array.map(row => <div key={uuid()} className="row">{
          row.map(col => <div key={uuid()} className={col === true ? "col dark" : "col"}></div>)
        }</div>)
      }
    </div>
  )
}

export default Grid