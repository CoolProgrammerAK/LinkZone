

import React from 'react'


export default function ScreenLoader() {
  return (
    <div style={{    position: 'fixed',
    left: 0,
    top: 0,
    width:'100%',display:'flex',alignItems:'center',justifyContent:'center',
    height: '100%'}}>
  <img src={require("../pictures/loading.gif")} alt="dfs"></img>
</div>
  
  )
}