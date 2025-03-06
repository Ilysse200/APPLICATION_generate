import React from 'react'
import { MdStars } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { SiBeatstars } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import './dashboardStyles/dashboardView.css'

function DashboardView()  {
  //An array of cards to display
  const arrayCards=[
    {
      title:'Sales',
      value: 1200,
      text:'total for this month'
    },
    {
      title:'Purshases',
      value: 1200,
      text:'total for this month'
    },
    {
      title:'Returns',
      value: 1200,
      text:'total for this month'
    },
    {
      title:'Losses',
      value: 3000,
      text:'total for this month'
    },
  ]

  return (
    <div className='view-container'>
      <div className='array-container'>
        {arrayCards.map((item)=>(
          <div className='array-elements'>
            <div className="array-cards">
            {/* <div>{item.title}</div>   */}
                <div className='icon-container'>               
                     {item.title==='Sales'? <MdStars className='loss-icon'/>:
                  item.title==='Purshases'? <BiPurchaseTag className='purchase-icon'/>:
                  item.title==='Returns'? <SiBeatstars className='returns-icon' />:
                  <BsStars className='loss-icon'/>
                  }
                </div>
                <div className='item-title'>{item.title}</div>
              <div>{item.value}</div>
              <div>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}

export default DashboardView