import * as React from 'react';




export default function Quation() {
  return (
    <div 
      style={{  
        backgroundColor: 'white',  
        border: '1px solid rgb(204, 204, 204)', 
        padding: '10px', 
        display: 'flex', 
        alignItems: 'center',
        paddingLeft:'20px'
      }}
    >

      <div 
        style={{
          width: '25px',    
          height: '25px',   
          backgroundColor: '#E9EDF2',  
          borderRadius: '50%',  
          display: 'flex',  
          justifyContent: 'center',  
          alignItems: 'center',  
          cursor: 'pointer',
          marginRight: '8px'  
        }}
      >
        <span 
          style={{
            border: 'solid #1F2937',  
            borderWidth: '0 2px 2px 0', 
            display: 'inline-block',
            padding: '3px',  
            transform: 'rotate(135deg)',  
          }}
        ></span>
      </div>

   
      <p style={{ margin: 0,fontWeight: 'bold' }}>Creating Quation To Existing Lead</p>
      <div >
      <div style={{paddingLeft:'700px'}}>
        <select style={{padding:'4px',paddingRight:'50px',backgroundColor:'#E4E8EE',border:'1px solid rgb(204, 204, 204)',borderRadius:'5px',fontWeight: '600',fontSize:'15px'}} >
          <option >Casagrand</option>
        </select>
      </div>
    </div>
    </div>
  );
}
