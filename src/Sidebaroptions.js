import React from 'react'
import './css/sidebaroptions.css';

function Sidebaroptions({ Icon, title, number, isactive }) {
  return (
    <div className={'sidebarOptions'}>
      < Icon />
      <h4>{title}</h4>
      <p>{number}</p>
    </div >
  )
}

export default Sidebaroptions;
