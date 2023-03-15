import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import './css/emaillist.css'

function Emailtype() {
  return (
    <div className='emailtype'>
        <div className='emailtype__options emailtype__options--active'>
            <InboxIcon/>
            <p>Primary</p>
        </div>
       
        <div className='emailtype__options'>
           <LocalOfferOutlinedIcon/>
           <p>Promotion</p>
        </div>
        <div className='emailtype__options'>
        <PeopleOutlineSharpIcon/>
        <p>Social</p>
        </div>
    </div>
  )
}

export default Emailtype
