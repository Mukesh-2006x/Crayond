import React from 'react';
import Pp from '../assets/pp.png';
import Room from '../assets/room.jpg'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Home = () => {
    return (
        <div style={{ backgroundColor: 'white', margin: '20px', borderRadius: '6px' }}>
            <div style={{ padding: '17px' }}>
                <div style={{ display: 'inline', alignItems: 'center', cursor: 'pointer', fontSize: '13px' }}>
                    <p style={{ display: 'inline', margin: 0, color: 'blue' }}>Add Contact &gt; </p>
                    <p style={{ display: 'inline', margin: 0, color: 'blue' }}>Lead Details &gt; </p>
                    <p style={{ display: 'inline', margin: 0, color: 'blue' }}>Preview and Create Lead &gt; </p>
                    <p style={{ display: 'inline', margin: 0, color: 'blue' }}>Quotation Details &gt;</p>
                    <p style={{ display: 'inline', margin: 0, color: 'blue' }}>Preview and Create</p>
                </div>
            </div>

            <hr />

            <div style={{ display: 'inline-flex' }}>
                <div>
                    <div style={{ padding: '20px', display: 'inline-flex' }}>
                        <p style={{ color: '#333333', fontWeight: '500' }}>Lead Details</p>
                    </div>
                    <br />

                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginRight: '20px', padding: '10px', border: '1px solid rgb(204, 204, 204)', borderRadius: '5px' }}>
                        <img
                            src={Pp}
                            alt="Profile"
                            style={{ width: '35px', borderRadius: '5px', marginRight: '10px' }}
                        />
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ fontWeight: '500', margin: 0, marginRight: '6px' }}>Mukesh Cruise</p>
                                <p style={{ fontSize: '10px', fontWeight: '500', padding: '2px 6px', backgroundColor: '#E4E8EE', borderRadius: '5px', margin: 0 }}>
                                    Prospect
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <p style={{ margin: 1.3, fontSize: '10.5px', color: '#333333' ,paddingTop:'3px'}}>+91 9942561989   </p><p style={{fontSize: '6px', color: '#333333',fontSize:'15px'}}>•</p>
                                <p style={{ fontSize: '10.5px', color: '#333333',paddingTop:'3px' }}>smukesh.it24@bitsathy.ac.in</p>
                            </div>
                        </div>
                    </div>

                    <hr style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '10px' ,marginRight:'20px'}} />

                    <div style={{ paddingLeft: '20px', display: 'inline-flex' }}>
                        <p style={{ color: '#333333', fontWeight: '500', paddingBottom: '10px' }}>Quotation Details</p>
                    </div>

                    <div style={{paddingBottom:'220px'}}>
                        <div style={{ display: 'inline-flex',flexDirection:'column' }}>
                            <p style={{ margin: 1.3, fontSize: '10px', color: '#333333', paddingLeft: '20px' }}>LEASE START DATE</p>
                            <p style={{ margin: 1.3, fontSize: '12px', paddingLeft: '20px', fontWeight: '500', paddingTop: '5px' }}>30 JAN 22</p>
                        </div>
                        <div style={{ display: 'inline-flex' ,flexDirection:'column'}}>
                            <p style={{ margin: 1.3, fontSize: '10px', color: '#333333', paddingLeft: '20px' }}>LEASE END DATE</p>
                            <p style={{ margin: 1.3, fontSize: '12px', paddingLeft: '20px', fontWeight: '500', paddingTop: '5px' }}>30 JAN 23</p>
                        </div>
                        <div style={{ display: 'inline-flex' ,flexDirection:'column'}}>
                            <p style={{ margin: 1.3, fontSize: '10px', color: '#333333', paddingLeft: '20px' }}>RENT START DATE</p>
                            <p style={{ margin: 1.3, fontSize: '12px', paddingLeft: '20px', fontWeight: '500', paddingTop: '5px' }}>30 JAN 23</p>
                        </div>
                        <div style={{ display: 'inline' ,flexDirection:'column'}}>
                            <p style={{ margin: 1.3, fontSize: '10px', color: '#333333', paddingLeft: '20px',paddingTop:'15px' }}>GRACE PERIOD</p>
                        
                            <p style={{fontSize: '12px', paddingLeft: '20px', fontWeight: '500', paddingTop: '5px',display:'inline' }}>90 Days </p><p style={{display:'inline', fontSize: '10px', color: '#333333',paddingTop:'3px'}}>(Begnning)</p>
                        </div>

                    </div>
                  
                
            </div>









<div style={{backgroundColor:'#E4E8EE' }}>  <p style={{ color: '#333333', fontWeight: '500' ,paddingLeft:'14px',paddingRight:'14px',paddingTop:'14px'}}>Unit Details</p>
            <div className='lo' style={{ display: 'inline-flex', }}>
            
                <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', padding: '20px', backgroundColor: '#E4E8EE' }}>
    <div className="property-card">
      <div className="property-image">
        <div className="discount-tag" style={{ marginLeft: '10px' }}> % Discount Applied </div>
        <img src={Room} style={{ width: '190px' }} alt="Room" />
        <div className="delete-icon">
          <DeleteOutlineOutlinedIcon style={{ borderRadius: '50%', fontSize: '20px', backgroundColor: '#E4E8EE', padding: '3px' }} />
        </div>
      </div>
      <div className="property-details">
        <h3 className="property-name">Jumeirah Estate</h3>
        <div className="property-price">
          <span className="price">$900.00</span>
        </div>
        <p className="property-location">Jumeirah Golf Estate • 2000 Sq.Ft</p>
        <div className="property-info">
          <span style={{ justifyContent: 'center' }}>
            <LocalHotelOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>
          2 <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>•</div>
          <span>
            <BathtubOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>
          2 <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>•</div>
          <span>
            <HomeOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>2BHK
        </div>
        <div className="customise-link">
          <a href="/">+ Customise</a>
        </div>
      </div>
    </div>

    <div className="property-card">
      <div className="property-image">
        <div className="discount-tag" style={{ marginLeft: '10px' }}> % Discount Applied </div>
        <img src={Room} style={{ width: '190px' }} alt="Room" />
        <div className="delete-icon">
          <DeleteOutlineOutlinedIcon style={{ borderRadius: '50%', fontSize: '20px', backgroundColor: '#E4E8EE', padding: '3px' }} />
        </div>
      </div>
      <div className="property-details">
        <h3 className="property-name">Jumeirah Estate</h3>
        <div className="property-price">
          <span className="price">$900.00</span>
        </div>
        <p className="property-location">Jumeirah Golf Estate • 2000 Sq.Ft</p>
        <div className="property-info">
          <span style={{ justifyContent: 'center' }}>
            <LocalHotelOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>
          2 <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>•</div>
          <span>
            <BathtubOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>
          2 <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>•</div>
          <span>
            <HomeOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>2BHK
        </div>
        <div className="customise-link">
          <a href="/">+ Customise</a>
        </div>
      </div>
    </div>



    <div className="property-card">
      <div className="property-image">
        <div className="discount-tag" style={{ marginLeft: '10px' }}> % Discount Applied </div>
        <img src={Room} style={{ width: '190px' }} alt="Room" />
        <div className="delete-icon">
          <DeleteOutlineOutlinedIcon style={{ borderRadius: '50%', fontSize: '20px', backgroundColor: '#E4E8EE', padding: '3px' }} />
        </div>
      </div>
      <div className="property-details">
        <h3 className="property-name">Jumeirah Estate</h3>
        <div className="property-price">
          <span className="price">$900.00</span>
        </div>
        <p className="property-location">Jumeirah Golf Estate • 2000 Sq.Ft</p>
        <div className="property-info">
          <span style={{ justifyContent: 'center' }}>
            <LocalHotelOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>
          2 <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>•</div>
          <span>
            <BathtubOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>
          2 <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>•</div>
          <span>
            <HomeOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>2BHK
        </div>
        <div className="customise-link">
          <a href="/">+ Customise</a>
        </div>
      </div>
    </div>



    <div className="property-card">
      <div className="property-image">
        <div className="discount-tag" style={{ marginLeft: '10px' }}> % Discount Applied </div>
        <img src={Room} style={{ width: '190px' }} alt="Room" />
        <div className="delete-icon">
          <DeleteOutlineOutlinedIcon style={{ borderRadius: '50%', fontSize: '20px', backgroundColor: '#E4E8EE', padding: '3px' }} />
        </div>
      </div>
      <div className="property-details">
        <h3 className="property-name">Jumeirah Estate</h3>
        <div className="property-price">
          <span className="price">$900.00</span>
        </div>
        <p className="property-location">Jumeirah Golf Estate • 2000 Sq.Ft</p>
        <div className="property-info">
          <span style={{ justifyContent: 'center' }}>
            <LocalHotelOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>
          2 <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>•</div>
          <span>
            <BathtubOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>
          2 <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>•</div>
          <span>
            <HomeOutlinedIcon style={{ fontSize: '18px', paddingRight: '8px' }} />
          </span>2BHK
        </div>
        <div className="customise-link">
          <a href="/">+ Customise</a>
        </div>
      </div>
    </div>


    


    







    {/* Repeat the above card for the other 3 properties */}
</div>

          
            </div></div></div>
            <div>
 <h2 style={{fontSize:'14px',padding:'15px'}}>Quotation Summary</h2>
            <div className="quotation-summary">
     
     <table>
        <tbody  style={{fontSize:'14px'}}>
          <tr style={{padding:'20px'}}>
            <td><p >Description</p></td>
            <td><p>QTY</p></td>
            <td><p>Amount</p></td>

          </tr>
         
          <tr>
            <td><p>Total Amount</p><p>Total Discount</p></td>
            <td><p>3</p><p>10%</p></td>
            <td><strong >$3,600.00</strong><p>- $100.00</p></td>
         
            
            
          </tr>
          <tr>
            <td><p>Total Refundable</p></td>
            <td><p>0%</p></td>
            <td><strong>$0</strong></td>
          </tr>
          <tr>
            <td><p>Total Tax</p></td>
            <td><p>18%</p></td>
            <td><strong>$648.00</strong></td>
          </tr>
        </tbody>
      </table>
      <div className="quote-amount" >
       
        <strong>Quote Amount</strong>
        <strong>$4,148.00</strong>
      </div>
    </div>
        </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        <div style={{padding:'10px'}}>
        <Button variant="outlined" size="medium" style={{color:'black',border:'1px solid rgb(204, 204, 204)',textTransform:'none',marginRight:'71%',borderRadius:'8px'}}>
          Preview
        </Button>
        <Button variant="outlined" size="medium" style={{color:'black',border:'1px solid rgb(204, 204, 204)',textTransform:'none',marginRight:'10px',borderRadius:'8px'}}>
          Cancel
        </Button>
        <Button variant="contained" size="medium" style={{borderRadius:'8px'}}>
        Creat Quation
        </Button>
        </div>
        
        </div>
    );
};
