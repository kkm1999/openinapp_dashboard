import React from 'react'
import 
 {BsBell,  BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div> 
        <div className='header-left'>
            <h1>Upload CSV</h1>
        </div>
        <div className='header-right'>
            <BsBell className='icon'/>
            <span>😊</span>
        </div>
    </header>
  )
}

export default Header