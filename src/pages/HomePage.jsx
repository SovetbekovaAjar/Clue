import React from 'react'
import { Carousel } from '../carousel/Carousel'
import "../appcss/app.css"

function HomePage() {
  return (
    <Carousel>
    <div className='item' >Item 1</div>
    <div className='secondItem'>Item 2</div>
    <div className='item item-3'>Item 3</div>

  </Carousel>
  )
}

export default HomePage