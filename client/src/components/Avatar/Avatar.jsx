import React from 'react'

function Avatar({children,backgroundColor,px,py,color,borderRadius,fontSize}) {
    const style = {
        backgroundColor,
        padding: `${py} ${px}`,
        color: color || "black",
        borderRadius,
        fontSize,
        textAlign: "centre",
        cursor: "pointer",
        textDecoration: "none"
    }

  return (
    <div style={style}>
        {children}
    </div>
  )
}

export default Avatar