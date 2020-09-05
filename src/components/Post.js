import React from 'react'


export function Post(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.body}</h4>
      <hr />
    </div>
  )
}
