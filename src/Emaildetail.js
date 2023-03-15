import React from 'react'
import './css/emaillist.css';
import { IconButton, Avatar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import TurnLeftOutlinedIcon from '@mui/icons-material/TurnLeftOutlined';
import { useNavigate } from 'react-router-dom';

function Emaildetail() {
    const history = useNavigate()
    return (
        <div className='emaildetails'>
            <div className='emaillist__settings'>
                <div className='emaillist__settingsLeft'>
                    <IconButton>
                        <ArrowBackIcon onClick={()=>history('/')}/>
                    </IconButton>
                    <IconButton>
                        <DriveFolderUploadOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ReportGmailerrorredIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <MailOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <AccessTimeIcon />
                    </IconButton>
                    <IconButton>
                        <AddTaskIcon />
                    </IconButton>
                    <IconButton>
                        <DriveFileMoveOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className='emaillist__settingsRight'>
                    <p>1-50 of 10,000</p>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            </div>
            <div className='emaildetail_message'>
                <div className='emaildetails__header'>
                    <div className='emaildetails__headerLeft'>
                        <h4>This is subject</h4>
                    </div>
                    <div className='emaildetails__headerRight'>
                        <IconButton>
                            <UnfoldLessOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <LocalPrintshopOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <LaunchOutlinedIcon />
                        </IconButton>
                    </div>
                </div>
                <div className='emaildetails__middleheader'>
                    <div className='emaildetails__middleheaderLeft'>

                        <IconButton>
                            <Avatar />
                        </IconButton>
                        <h4>This is subject</h4>
                        <p>mail.mail@gmail.com</p>
                    </div>
                    <div className='emaildetails__middleheaderRight'>
                        <p>7.30 PM</p>
                        <IconButton>
                            <StarBorderOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <TurnLeftOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className='emaildetails_body'>
                    <p>This is test Message</p>
                </div>
            </div>
        </div>
    )
}



export default Emaildetail;
