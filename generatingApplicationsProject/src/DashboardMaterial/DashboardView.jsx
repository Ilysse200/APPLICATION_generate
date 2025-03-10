import React, { useState } from 'react';
import Sidebar from './Sidebar'; // ✅ Added missing import
import { MdStars } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { SiBeatstars } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import './dashboardStyles/dashboardView.css';
import Settings from './Settings';
import Applications from './Applications';

function DashboardView() {
  const [activeSection, setActiveSection] = useState("dashboard"); 


  const arrayCards = [
    { title: 'IT department', value: 1200, text: 'Total for this month' },
    { title: 'Finance department', value: 1200, text: 'Total for this month' },
    { title: 'Business department', value: 1200, text: 'Total for this month' },
    { title: 'Sales department', value: 3000, text: 'Total for this month' },
  ];

  return (
    <div className='view-container'>
      <Sidebar setActiveSection={setActiveSection} /> {/*Pass state function to Sidebar */}

      <div className='content'>
        {activeSection === "dashboard" && (
          <div className='array-container'>
            {arrayCards.map((item, index) => ( //  Moved arrayCards outside of extra brackets
              <div className='array-elements' key={index}> {}
                <div className="array-cards">
                  <div className='icon-container'>
                    {item.title === 'IT department' ? <MdStars className='loss-icon' /> :
                      item.title === 'Finance department' ? <BiPurchaseTag className='purchase-icon' /> :
                        item.title === 'Business department' ? <SiBeatstars className='returns-icon' /> :
                          <BsStars className='loss-icon' />}
                  </div>
                  <div className='item-title'>{item.title}</div>
                  <div className='values'>{item.value}</div>
                  <div>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === "settings" && <Settings />} {/*Display Settings if selected */}
        {activeSection === "applications" && <Applications />} 
      </div>
    </div>
  );
}

export default DashboardView;
