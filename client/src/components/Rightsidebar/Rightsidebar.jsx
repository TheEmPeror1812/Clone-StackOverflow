import React from 'react'
import "./Rightsidebar.css"
import Widget from './Widget'
import WidgetTags from './WidgetTags'

function Rightsidebar() {
  return (
    <aside className='right-side-bar'>
        <Widget />
        <WidgetTags />
    </aside>
  )
}

export default Rightsidebar