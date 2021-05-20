

import React from 'react'

export default function Loader() {
  return (
    (
      <div
      className="spinner-border text-center text-danger"
      style={{
        position: "absolute",
    
      }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
  )
}
