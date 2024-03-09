import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

export default function UiDropDown(){
    let [show, setShow] = useState(false)
    let [show2, setShow2] = useState(false)
    let [show3, setShow3] = useState(false)
    let [show4, setShow4] = useState(false)
    let [show5, setShow5] = useState(false)
    let [show6, setShow6] = useState(false)
    let [show7, setShow7] = useState(false)

    useEffect(() =>{
        let closeModal1 = () =>{
            setShow(false)
        }
        let closeModal2 = () =>{
            setShow2(false)
        }
        let closeModal3 = () =>{
            setShow3(false)
        }
        let closeModal4 = () =>{
            setShow4(false)
        }
        let closeModal5 = () =>{
            setShow5(false)
        }
        let closeModal6 = () =>{
            setShow6(false)
        }
        let closeModal7 = () =>{
            setShow7(false)
        }
        document.addEventListener('mousedown', closeModal1)
        document.addEventListener('mousedown', closeModal2)
        document.addEventListener('mousedown', closeModal3)
        document.addEventListener('mousedown', closeModal4)
        document.addEventListener('mousedown', closeModal5)
        document.addEventListener('mousedown', closeModal6)
        document.addEventListener('mousedown', closeModal7)

        return()=>{
            document.removeEventListener('mousedown', closeModal1)
            document.removeEventListener('mousedown', closeModal2)
            document.removeEventListener('mousedown', closeModal3)
            document.removeEventListener('mousedown', closeModal4)
            document.removeEventListener('mousedown', closeModal5)
            document.removeEventListener('mousedown', closeModal6)
            document.removeEventListener('mousedown', closeModal7)
        }
    })
    return(
        <Wrapper>
            <div className="container-fluid">
                    <div className="layout-specing">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Dropdown</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                                <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                    <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                    <li className="breadcrumb-item text-capitalize active" aria-current="page">Dropdown</li>
                                </ul>
                            </nav>
                        </div>
                    
                        <div className="row">
                            <div className="col-lg-12 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h4 className="title mb-0"> Dropdown </h4>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. <br/> 
                                            <div><code className="text-danger">
                                                &lt;div className="btn-group dropdown-primary me-2 mt-2"&gt; <br/>
                                                    &nbsp; &nbsp; &nbsp; &lt;button type="button" className="btn btn-primary dropdown-toggle" onClick=&#123;()=&gt;setShow&#40;true&#41;&#125;&gt; <br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Primary <br/>
                                                    &nbsp; &nbsp; &nbsp; &lt;/button&gt;<br/>
                                                    &nbsp; &nbsp;&lt;div className=&#123;`$&#123;show ? 'show' : ''&#125; dropdown-menu`&#125;&gt;<br/>
                                                    &nbsp;&nbsp; &nbsp; &nbsp;&lt;Link to="#" className="dropdown-item"&gt;Home&lt;/Link&gt; <br/>
                                                    &nbsp;&nbsp; &nbsp; &nbsp; &lt;Link to="#" className="dropdown-item"&gt;Services&lt;/Link&gt;<br/>
                                                    &nbsp;&nbsp; &nbsp; &nbsp;&lt;Link to="#" className="dropdown-item"&gt;About us&lt;/Link&gt;<br/>
                                                    &nbsp;&nbsp; &nbsp; &nbsp;&lt;div className="dropdown-divider"&gt;&lt;/div&gt; <br/>
                                                    &nbsp;&nbsp; &nbsp; &nbsp;&lt;Link to="#" className="dropdown-item"&gt;Contact us&lt;/Link&gt;<br/>
                                                    &nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &lt;/div&gt;
                                                </code>
                                            </div>
                                        </h6>

                                        <div className="btn-group dropdown-primary me-2 mt-2">
                                            <button type="button" className="btn btn-primary dropdown-toggle" onClick={()=>setShow(true)}>
                                                Primary
                                            </button>
                                            <div className={`${show ? 'show' : ''} dropdown-menu`}>
                                                <Link to="#" className="dropdown-item">Home</Link>
                                                <Link to="#" className="dropdown-item">Services</Link>
                                                <Link to="#" className="dropdown-item">About us</Link>
                                                <div className="dropdown-divider"></div>
                                                <Link to="#" className="dropdown-item">Contact us</Link>
                                            </div>
                                        </div>

                                        <div className="btn-group dropdown-secondary me-2 mt-2">
                                            <button type="button" className="btn btn-secondary dropdown-toggle" onClick={()=>setShow2(true)}>
                                                Secondary
                                            </button>
                                            <div className={`${show2 ? 'show' : ''} dropdown-menu`}>
                                                <Link to="#" className="dropdown-item">Home</Link>
                                                <Link to="#" className="dropdown-item">Services</Link>
                                                <Link to="#" className="dropdown-item">About us</Link>
                                                <div className="dropdown-divider"></div>
                                                <Link to="#" className="dropdown-item">Contact us</Link>
                                            </div>
                                        </div>

                                        <div className="btn-group dropdown-success me-2 mt-2">
                                            <button type="button" className="btn btn-success dropdown-toggle" onClick={()=>setShow3(true)}>
                                                Success
                                            </button>
                                            <div className={`${show3 ? 'show' : ''} dropdown-menu`}>
                                                <Link to="#" className="dropdown-item">Home</Link>
                                                <Link to="#" className="dropdown-item">Services</Link>
                                                <Link to="#" className="dropdown-item">About us</Link>
                                                <div className="dropdown-divider"></div>
                                                <Link to="#" className="dropdown-item">Contact us</Link>
                                            </div>
                                        </div>

                                        <div className="btn-group dropdown-warning me-2 mt-2">
                                            <button type="button" className="btn btn-warning dropdown-toggle" onClick={()=>setShow4(true)}>
                                                Warning
                                            </button>
                                            <div className={`${show4 ? 'show' : ''} dropdown-menu`}>
                                                <Link to="#" className="dropdown-item">Home</Link>
                                                <Link to="#" className="dropdown-item">Services</Link>
                                                <Link to="#" className="dropdown-item">About us</Link>
                                                <div className="dropdown-divider"></div>
                                                <Link to="#" className="dropdown-item">Contact us</Link>
                                            </div>
                                        </div>

                                        <div className="btn-group dropdown-info me-2 mt-2">
                                            <button type="button" className="btn btn-info dropdown-toggle" onClick={()=>setShow5(true)}>
                                                Info
                                            </button>
                                            <div className={`${show5 ? 'show' : ''} dropdown-menu`}>
                                                <Link to="#" className="dropdown-item">Home</Link>
                                                <Link to="#" className="dropdown-item">Services</Link>
                                                <Link to="#" className="dropdown-item">About us</Link>
                                                <div className="dropdown-divider"></div>
                                                <Link to="#" className="dropdown-item">Contact us</Link>
                                            </div>
                                        </div>

                                        <div className="btn-group dropdown-danger me-2 mt-2">
                                            <button type="button" className="btn btn-danger dropdown-toggle" onClick={()=>setShow6(true)}>
                                                Danger
                                            </button>
                                            <div className={`${show6 ? 'show' : ''} dropdown-menu`}>
                                                <Link to="#" className="dropdown-item">Home</Link>
                                                <Link to="#" className="dropdown-item">Services</Link>
                                                <Link to="#" className="dropdown-item">About us</Link>
                                                <div className="dropdown-divider"></div>
                                                <Link to="#" className="dropdown-item">Contact us</Link>
                                            </div>
                                        </div>

                                        <div className="btn-group dropdown-dark me-2 mt-2">
                                            <button type="button" className="btn btn-dark dropdown-toggle" onClick={()=>setShow7(true)}>
                                                Dark
                                            </button>
                                            <div className={`${show7 ? 'show' : ''} dropdown-menu`}>
                                                <Link to="#" className="dropdown-item">Home</Link>
                                                <Link to="#" className="dropdown-item">Services</Link>
                                                <Link to="#" className="dropdown-item">About us</Link>
                                                <div className="dropdown-divider"></div>
                                                <Link to="#" className="dropdown-item">Contact us</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
}