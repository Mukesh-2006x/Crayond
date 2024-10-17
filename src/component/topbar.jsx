import React from 'react';
import log from '../assets/lgo.png';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Divider } from '@mui/material';
import Pp from '../assets/pp.png';
import Eleven from '../nav/11';


export function Topbar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1C1C1C', padding: '5px' }}>
      
      <img src={log} width={100} alt="Logo" />
      <Divider orientation="vertical" flexItem style={{border:'0.5px solid rgb(174, 174, 174)',marginLeft: '10px'}}/>
      <p style={{ color: 'rgb(174, 174, 174)', fontSize: '10px', marginLeft: '10px', flexGrow: 0.3,paddingRight:'120px' }}>
        PROPERTY MANAGEMENT SOLUTION
      </p>
      
      <input 
       placeholder='SEARCH'
        style={{ 
          backgroundColor: '#5D5D5D', 
          border: 'none', 
          padding: '5px',
          paddingRight:'160px', 
          borderRadius: '3px',
          alignItems:'start',
          
          
          
        }}
      />
      
      <NotificationsOutlinedIcon style={{ color: 'white', width: '20px', cursor: 'pointer' ,paddingLeft:'300px'}} />
      <Divider orientation="vertical" flexItem style={{border:'0.5px solid rgb(174, 174, 174)',marginLeft: '10px'}}/>
      <img src={Pp} width={30} alt="Logo"  style={{borderRadius:'50%',marginLeft:'20px'}}/>
      <div style={{ paddingLeft: '10px' ,display:'block'}}>
      <p style={{ color: 'white', fontSize: '15px',paddingRight:'20px'}}>
        Mukesh S
      </p>
      <p style={{ color: 'rgb(174, 174, 174', fontSize: '8px'}}>
        Super Admin 
      </p>
      </div>
      <Eleven style={{transform: 'rotate(90deg)'}}/>
    </div>
  );
}
