import React, { useState } from 'react'
import './css/compose.css'
import MinimizeIcon from '@mui/icons-material/Minimize';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

function Compose() {

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Name is ${to}.Subject is ${subject}.Meddage is ${message}`)
    if(to==="")
    {
      return alert ("To is required");
    }
    if(subject==="")
    {
      return alert ("Subject is required");
    }
    if(message==="")
    {
      return alert ("Message is required");
    }
  }
  return (
    <div className='compose'>
      <div className='compose__header'>
        <div className='compose__header__left'>
          <span>New message</span>
        </div>
        <div className='compose__header__right'>
          <MinimizeIcon />
          <HeightIcon />
          <CloseIcon onClick={() => dispatch(closeSendMessage())} />
        </div>

      </div>
      <form onSubmit={formSubmit} >
        <div className='compose__body'>
          <div className='compose__bodyForm'>
            <input type='email' placeholder='Reciepents' value={to} onChange={(e) => setTo(e.target.value)} />

            <input type='text' name='subject' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />

            <textarea row='20' name='message' onChange={(e) => setMessage(e.target.value)}>{message}</textarea>
          </div>
        </div>
        <div className='compose__footer'>
          <div className='compose__footerLeft'>
            <button type='submit'>Send <ArrowDropDownIcon /></button>

          </div>
          <div className='compose__footerRight'>
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <AddToDriveIcon />
            <InsertPhotoOutlinedIcon />
            <LockClockOutlinedIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteOutlineIcon />
          </div>

        </div>
      </form>

    </div>
  )
}

export default Compose
