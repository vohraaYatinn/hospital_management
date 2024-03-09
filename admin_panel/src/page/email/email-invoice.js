import React from "react";

import logoLight from '../../assets/images/logo-light.png'

export default function EmailInvoice(){
    return(
        <>
        <div style={{marginTop:'50px', display:'flex', justifyContent:'center'}}>
            <table cellPadding="0" cellSpacing="0" style={{fontFamily:'Inter, sans-serif', fontSize:'15px', fontWeight:'400', maxWidth:'600px', border:'none', margin:'0, auto', borderRadius:'6px', overflow:'hidden', backgroundColor:'#fff', boxShadow:'0 0 3px rgba(60, 72, 88, 0.15)'}}>
                <thead>
                    <tr style={{ backgroundColor:'#396cf0', padding:'3px 0', border:'none', lineHeight:'68px', textAlign:'center', color:'#fff', fontSize:'24px', letterSpacing:'1px'}}>
                        <th scope="col"><img src={logoLight} height="22" alt=""/></th>
                    </tr>
                </thead>
    
                <tbody>
                    <tr>
                        <td style={{padding: '24px 24px 0'}}>
                            <table cellPadding="0" cellSpacing="0" style={{border: 'none'}}>
                                <tbody>
                                    <tr>
                                        <td style={{minWidth: '130px', paddingBottom: '8px'}}>Invoice No. :</td>
                                        <td style={{color: '#8492a6'}}>#land45845621</td>
                                    </tr>
                                    <tr>
                                        <td style={{minWidth: '130px', paddingBottom: '8px'}}>Name :</td>
                                        <td style={{color: '#8492a6'}}>Harry Patel</td>
                                    </tr>
                                    <tr>
                                        <td style={{minWidth: '130px', paddingBottom: '8px'}}>Address :</td>
                                        <td style={{color: '#8492a6'}}>1962 Pike Street, CA 92123</td>
                                    </tr>
                                    <tr>
                                        <td style={{minWidth: '130px', paddingBottom: '8px'}}>Date :</td>
                                        <td style={{color: '#8492a6'}}>March, 25 2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: '24px'}}>
                            <div style={{display: 'block', overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: '6px', boxShadow: '0 0 3px rgba(60, 72, 88, 0.15)'}}>
                                <table cellPadding="0" cellSpacing="0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" style={{textAlign: 'left', verticalAlign: 'bottom', borderTop: '1px solid #dee2e6', padding: '12px'}}>No.</th>
                                            <th scope="col" style={{textAlign: 'left', verticalAlign: 'bottom', borderTop: '1px solid #dee2e6', padding: '12px', width:'200px'}}>Item</th>
                                            <th scope="col" style={{textAlign: 'end', verticalAlign: 'bottom', borderTop: '1px solid #dee2e6', padding: '12px'}}>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" style={{textAlign: 'left', padding: '12px', borderTop: '1px solid #dee2e6'}}>1</th>
                                            <td style={{textAlign: 'left', padding: '12px', borderTop: '1px solid #dee2e6'}}>Doctris Template</td>
                                            <td style={{textAlign: 'end', padding: '12px', borderTop: '1px solid #dee2e6'}}>$ 5200</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{textAlign: 'left', padding: '12px', borderTop: '1px solid #dee2e6'}}>2</th>
                                            <td style={{textAlign: 'left', padding: '12px', borderTop: '1px solid #dee2e6'}}>Customization</td>
                                            <td style={{textAlign: 'end', padding: '12px', borderTop: '1px solid #dee2e6'}}>$ 3660</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{textAlign: 'left', padding: '12px', borderTop: '1px solid #dee2e6'}}>3</th>
                                            <td style={{textAlign: 'left', padding: '12px', borderTop: '1px solid #dee2e6'}}>Development</td>
                                            <td style={{textAlign: 'end', padding: '12px', borderTop: '1px solid #dee2e6'}}>$ 13740</td>
                                        </tr>

                                        <tr style={{backgroundColor:' rgba(47, 85, 212, 0.2)', color: '#396cf0', overflowX: 'hidden'}}>
                                            <th scope="row" style={{textAlign: 'left', padding: '12px', borderTop: '1px solid rgba(47, 85, 212, 0.2)'}}>Total</th>
                                            <td colSpan="2" style={{textAlign: 'end', fontWeight: '700', fontSize: '18px', padding: '12px', borderTop: '1px solid rgba(47, 85, 212, 0.2)'}}>$ 22600</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '16px 8px', color:' #8492a6', backgroundColor: '#f8f9fc', textAlign: 'center'}}>
                            © {new Date().getFullYear()} Doctris.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}