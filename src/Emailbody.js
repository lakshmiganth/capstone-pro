import React from 'react'
import './css/emaillist.css';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useNavigate } from 'react-router-dom';

function Emailbody({name,subject,message,time}) {
  const history = useNavigate();
  return (
    <div className='emailbody' onClick={e=>history('/mail')}>
        <div className='emailbody__left'>
            <CheckBoxOutlineBlankOutlinedIcon/>
            <StarBorderIcon/>

            <h4>{name}</h4>

        </div>

        <div className='emailbody__middle'>
        <div className='emailbody__middle__msg'>
            <p><b>{subject}</b> {message}</p>

        </div>

        </div>

        <div className='emailbody__right'>
            <p>{time}</p>

        </div>
      
    </div>
  )
}

export default Emailbody
