import React from 'react';
import Pp from '../assets/pp.png';

export const Home = () => {
    return (
        <div style={{ backgroundColor: 'white', margin: '20px', borderRadius: '6px' }}>
            <div style={{ padding: '10px' }}>
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

                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', padding: '10px', border: '1px solid rgb(204, 204, 204)', borderRadius: '5px' }}>
                        <img
                            src={Pp}
                            alt="Profile"
                            style={{ width: '35px', borderRadius: '5px', marginRight: '10px' }}
                        />
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ fontWeight: '500', margin: 0, marginRight: '10px' }}>Mukesh Cruise</p>
                                <p style={{ fontSize: '10px', fontWeight: '500', padding: '2px 6px', backgroundColor: '#E4E8EE', borderRadius: '5px', margin: 0 }}>
                                    Prospect
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <p style={{ margin: 1.3, fontSize: '12px', color: '#333333' }}>+91 9942561989</p>
                                <p style={{ fontSize: '13px', color: '#333333' }}>smukesh.it24@bitsathy.ac.in</p>
                            </div>
                        </div>
                    </div>

                    <hr style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '10px' }} />

                    <div style={{ paddingLeft: '20px', display: 'inline-flex' }}>
                        <p style={{ color: '#333333', fontWeight: '500', paddingBottom: '10px' }}>Quotation Details</p>
                    </div>

                    <div style={{paddingBottom:'110px'}}>
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
                            <p style={{ margin: 1.3, fontSize: '12px', paddingLeft: '20px', fontWeight: '500', paddingTop: '5px' }}>90 Days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
