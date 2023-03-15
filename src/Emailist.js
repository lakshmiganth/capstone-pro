import React from 'react'
import './css/emaillist.css';
import Emailbody from './Emailbody';
import EmailListSetting from './EmailListSetting';
import Emailtype from './Emailtype';

function Emailist() {
  return (
    <div className='emaillist'>
        <EmailListSetting/> 
        <Emailtype/>

        <Emailbody name='Job oppent' subject='This Subject' message='We ar leaning react js' time='2:30 PM'/>
    </div>
  )
}

export default Emailist
