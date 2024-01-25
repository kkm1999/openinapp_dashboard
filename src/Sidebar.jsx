import React from 'react'
import 
{ BsGrid1X2Fill, BsFillArchiveFill,  BsPeopleFill, 
  BsListCheck, BsFillGearFill, BsCalendar, BsFillBellFill}
 from 'react-icons/bs'
 import baselogoimage from './assessts/baselogo.png'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'> 
                <img src={baselogoimage} alt="logo"  className='logo'/>
                <span>Base</span>

            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" style={{color: 'blue'}}>
                    <BsFillArchiveFill className='icon'/> <span>Upload
 </span>               </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Invoice
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Schedule
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCalendar className='icon'/> Calendar
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillBellFill className='icon'/> Notification
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar