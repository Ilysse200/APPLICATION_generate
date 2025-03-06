import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar';
import DashboardNavbar from './DashboardMaterial/DashboardNavbar'
import Sidebar from './DashboardMaterial/Sidebar'

export default function 
() {
  return (
    <div>
        <DashboardNavbar/>
        <Sidebar/>
        <Outlet />
        </div>
  )
}
