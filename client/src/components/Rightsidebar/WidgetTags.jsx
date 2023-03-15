import React from 'react'
import "./Rightsidebar.css"

function WidgetTags() {

  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];

  return (
    <div className='widget-tags'>
      <h4>Watched Tags</h4>
      <div className='widget-tags-div'>
        {
          tags.map((item,index)=>(
              <p key={index}>{item}</p>
          ))
        }

      </div>
    </div>
  )
}

export default WidgetTags