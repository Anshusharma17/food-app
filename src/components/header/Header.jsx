import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='header-main'>
      <div className='main'>

      <div className='a'>icon</div>
      <div className='b'>
      <ul className='header-list'>
        <li className='item-list'>
          <a className='item-link' href="#">Home</a>
          </li>
        <li className='item-list'>
          <a className='item-link' href="#">Menu</a>
        </li>
        <li className='item-list'>
        <a className='item-link' href="#">About</a>
        </li>
      </ul>
      </div>
      
      </div>
     
    </div>
  )
}

export default Header