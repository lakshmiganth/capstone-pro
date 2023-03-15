import React from 'react'
import { Button } from '@mui/material';
import Sidebaroptions from './Sidebaroptions';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InboxIcon from '@mui/icons-material/Inbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './css/sidebar.css';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {

  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Button startIcon={<CreateTwoToneIcon />} className='compose__btn' onClick={()=>dispatch(openSendMessage())}>Commpose</Button>

      <Sidebaroptions Icon={InboxIcon} title={"Inbox"} number={223}  isactive={true}/>

      <Sidebaroptions Icon={StarRateOutlinedIcon} title={"Starred"} number={223} />

      <Sidebaroptions Icon={WatchLaterOutlinedIcon} title={"Snoozed"} number={223} />

      <Sidebaroptions Icon={SendOutlinedIcon} title={"Send"} number={223} />

      <Sidebaroptions Icon={InsertDriveFileOutlinedIcon} title={"Draft"} number={223} />

      <Sidebaroptions Icon={LabelImportantTwoToneIcon} title={"Important"} number={223} />

      <Sidebaroptions Icon={DeleteOutlineIcon} title={"Trash"} number={223} />

      <Sidebaroptions Icon={ExpandMoreIcon} title={"More"} />


    </div>
  )
}

export default Sidebar;
