import React from "react";
import { Link } from "react-router-dom";

import logoLight from '../../assets/images/logo-light.png'

export default function EmailPasswordReset(){
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
                        <td style={{ padding:'48px 24px 0', color:'#161c2d', fontSize:'18px', fontWeight:'600'}}>
                            Hello, Harry
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '15px 24px 15px', color: '#8492a6' }}>
                            To reset your password, please click the button below :
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '15px 24px'}}>
                            <Link to="#" style={{padding: '8px 20px', outline: 'none', textDecoration: 'none', fontSize: '16px', letterSpacing: '0.5px', transition: 'all 0.3s', fontWeight: '600', borderRadius: '6px', backgroundColor: '#396cf0', border: '1px solid #396cf0', color: '#ffffff'}}>Reset Password</Link>
                        </td>
                    </tr>
    
                    <tr>
                        <td style={{padding: '15px 24px 0', color: '#8492a6'}}>
                             This link will be active for 45 second from the time this email was sent. If you did not request to reset your password, please ignore this email and your account will not be affected.
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