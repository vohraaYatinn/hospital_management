import React from "react";
import { Link } from "react-router-dom";

import logoLight from '../../assets/images/logo-light.png'

export default function EmailAlert(){
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
                        <td style={{padding: '24px 24px'}}>
                            <div style={{padding: '8px', color: '#e43f52', backgroundColor: 'rgba(228, 63, 82, 0.2)', border: '1px solid rgba(228, 63, 82, 0.2)', borderRadius: '6px', textAlign: 'center', fontSize: '16px', fontWeight: '600'}}>
                                Warning: You're approaching your limit. Please upgrade.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: '0 24px 15px', color: '#8492a6'}}>
                            <div>
                                You have <span style={{color: '#fff', backgroundColor: '#e43f52', padding: '4px 8px', borderRadius: '6px',}}>1 free report</span> remaining.
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding:' 0 24px 15px', color: '#8492a6'}}>
                            Add your credit card / debit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports.
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '15px 24px'}}>
                            <Link to="#" style={{padding: '8px 20px', outline: 'none', textDecoration: 'none', fontSize: '16px', letterSpacing: '0.5px', transition: 'all 0.3s', fontWeight: '600', borderRadius: '6px', backgroundColor: '#396cf0', border: '1px solid #396cf0', color: '#ffffff'}}>Upgrade Account</Link>
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '15px 24px 0', color: '#8492a6'}}>
                            Thanks for choosing Doctris Template.
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '15px 24px 15px', color: '#8492a6'}}>
                            Doctris <br/> Support Team
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