import React from "react";
import One from '../nav/1';
import Two from '../nav/2';
import Three from '../nav/3';
import Four from '../nav/4';
import Five from '../nav/5';
import Six from '../nav/6';
import Seven from '../nav/7';
import Eight from '../nav/8';
import Nine from '../nav/9';
import Ten from '../nav/10';
import Eleven from '../nav/11';

const options = [
  <Ten key="10" />,  
  <Nine key="9" style={{ padding: '10px', backgroundColor: 'rgb(26, 144, 255)', borderRadius: '100%' }} />,  
  <Eight key="8" />,  
  <Seven key="7" />,
  <Six key="6" />,
  <Five key="5" />,
  <Four key="4" />,
  <Two key="2" />,
  <One key="1" />
];

export function NavBars() {
  return (
    <div className="full" style={{ display: 'flex', flexDirection: 'row', height: '128vh' }}>
      
      <div className="navbar" style={{ width: '60px', backgroundColor: 'rgb(40, 40, 40)' }}>
        <center>
          <div style={{ marginTop: '10px' }}>
            <div >
            <Eleven style={{ backgroundColor: 'rgb(26, 144, 255)', borderRadius: '50%', padding: '10px' ,width:'10px'}} /></div>
          </div>
          
          <hr style={{ margin: '15px' }} />
          
          <div className="icons">
            {options.map((icon, index) => (
              <div key={index} style={{ padding: '9px' }}>
                {icon}
              </div>
            ))}
          </div>
        </center>
      </div>
    </div>
  );
}
