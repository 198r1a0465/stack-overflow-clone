import React from 'react'
import { createRoutesFromChildren } from 'react-router-dom'
const Avatar = ({children,backgroundColor,px,py,color,borderRadius,fontSize}) => {
const style={
  backgroundColor,
  padding:`${py} ${px}`,
  color :color||'black',
  borderRadius,
  fontSize,
  textAlign:'center'
}
  return (
    <div style={style}>{children}</div>
  )
}

export default Avatar