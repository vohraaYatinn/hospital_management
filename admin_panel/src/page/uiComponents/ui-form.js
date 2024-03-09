import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

export default function UiForm(){
    return(
        <Wrapper>
            <div className="container-fluid">
                    <div className="layout-specing">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Form Elements</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                                <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                    <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                    <li className="breadcrumb-item text-capitalize active" aria-current="page">Form Elements</li>
                                </ul>
                            </nav>
                        </div>
                    
                        <div className="row">
                            <div className="col-lg-6 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Forms </h5>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. 
                                            <pre><code className="text-danger">
                                                &lt;div className="row"&gt;<br/>
                                                    &nbsp; &nbsp;&lt;div className="col-md-6"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="mb-3"&gt;<br/>
                                                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-label"&gt;Your Name &lt;span className="text-danger"&gt;*&lt;/span&gt;&lt;/label&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input name="name" id="name" type="text" className="form-control" placeholder="First Name :"&gt;<br/>
                                                         &nbsp;&nbsp; &nbsp;&nbsp;&lt;/div&gt;<br/>
                                                    &nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/>
                                                    &nbsp;&nbsp;&lt;div className="col-md-6"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="mb-3"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-label"&gt;Your Email &lt;span className="text-danger"&gt;*&lt;/span&gt;&lt;/label&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input name="email" id="email" type="email" className="form-control" placeholder="Your email :"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/> 
                                                    &nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/>
                                                    &nbsp;&nbsp;&lt;div className="col-md-12"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="mb-3"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-label"&gt;Subject&lt;/label&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input name="subject" id="subject" className="form-control" placeholder="Your subject :"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>                                                                               
                                                    &nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/>
                                                    &nbsp;&nbsp;&lt;div className="col-md-12"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="mb-3"&gt;<br/>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-label"&gt;Comments&lt;/label&gt;<br/>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"&gt;&lt;/textarea&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                    &nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &lt;/div&gt;&lt;!--end row--&gt;<br/>
                                                &nbsp;&lt;div className="row"&gt;<br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="col-sm-12"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="submit" id="submit" name="send" className="btn btn-primary" value="Send Message"&gt;<br/>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;&lt;!--end col--&gt;<br/>
                                                &nbsp;&lt;/div&gt;&lt;!--end row--&gt;<br/>
                                            </code></pre>
                                        </h6>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                                            <input name="name" id="name" type="text" className="form-control" placeholder="First Name :"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                                    </div> 
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Subject</label>
                                                            <input name="subject" id="subject" className="form-control" placeholder="Your subject :"/>
                                                    </div>                                                                               
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Comments</label>
                                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <input type="submit" id="submit" name="send" className="btn btn-primary" value="Send Message"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Checkboxes </h5>
                                    </div>

                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. 
                                            <pre><code className="text-danger">
                                                &lt;div className="form-check form-check-inline"&gt;<br/>
                                                    &nbsp;&nbsp;&lt;div className="mb-0"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="form-check"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" defaultChecked value="" id="flexCheckDefault1"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexCheckDefault1"&gt;One&lt;/label&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                    &nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &lt;/div&gt;<br/><br/>

                                                &lt;div className="form-check form-check-inline"&gt;<br/>
                                                    &nbsp;&nbsp;&lt;div className="mb-0"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="form-check"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexCheckDefault2"&gt;Two&lt;/label&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                    &nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &lt;/div&gt;<br/><br/>

                                                &lt;div className="form-check form-check-inline"&gt;<br/>
                                                    &nbsp;&nbsp;&lt;div className="mb-0"&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="form-check"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" disabled value="" id="flexCheckDefault3"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexCheckDefault3"&gt;Disabled&lt;/label&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                                                    &nbsp;&nbsp;&lt;/div&gt;<br/>
                                                &lt;/div&gt;<br/>
                                            </code></pre>
                                        </h6>
                                        <div className="form-check form-check-inline">
                                            <div className="mb-0">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultChecked value="" id="flexCheckDefault1"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault1">One</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <div className="mb-0">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault2">Two</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <div className="mb-0">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" disabled value="" id="flexCheckDefault3"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault3">Disabled</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Radio Buttons </h5>
                                    </div>

                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. 
                                            <pre><code className="text-danger">
                                                    &lt;div className="custom-control custom-radio custom-control-inline"&gt;<br/>
                                                        &nbsp;&nbsp;&lt;div className="form-check mb-0"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" readOnly type="radio" name="flexRadioDefault" id="flexRadioDefault1"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexRadioDefault1"&gt;Yes&lt;/label&gt;<br/>
                                                        &nbsp;&nbsp;&lt;/div&gt;<br/>
                                                    &lt;/div&gt;<br/><br/>

                                                    &lt;div className="custom-control custom-radio custom-control-inline"&gt;<br/>
                                                        &nbsp;&nbsp;&lt;div className="form-check mb-0"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" readOnly type="radio" name="flexRadioDefault" id="flexRadioDefault2"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexRadioDefault2"&gt;No&lt;/label&gt;<br/>
                                                        &nbsp;&nbsp;&lt;/div&gt;<br/>
                                                    &lt;/div&gt;<br/><br/>

                                                    &lt;div className="custom-control custom-radio custom-control-inline"&gt;<br/>
                                                        &nbsp;&nbsp;&lt;div className="form-check mb-0"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input className="form-check-input" defaultChecked type="radio" disabled name="flexRadioDefault" id="flexRadioDefault3"&gt;<br/>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexRadioDefault3"&gt;Disabled&lt;/label&gt;<br/>
                                                        &nbsp;&nbsp;&lt;/div&gt;<br/>
                                                    &lt;/div&gt;<br/><br/>
                                            </code></pre>
                                        </h6>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">Yes</label>
                                            </div>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" readOnly type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">No</label>
                                            </div>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" defaultChecked type="radio" disabled name="flexRadioDefault" id="flexRadioDefault3"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault3">Disabled</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Switches Button </h5>
                                    </div>

                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. 
                                            <pre><code className="text-danger">
                                                    &lt;div className="form-check form-switch"&gt;<br/>
                                                        &nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"&gt;<br/>
                                                        &nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexSwitchCheckDefault"&gt;Default switch checkbox input&lt;/label&gt;<br/>
                                                    &lt;/div&gt;<br/><br/>

                                                    &lt;div className="form-check form-switch"&gt;<br/>
                                                        &nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" id="flexSwitchCheckreadOnly" defaultChecked&gt;<br/>
                                                        &nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexSwitchCheckreadOnly"&gt;readOnly switch checkbox input&lt;/label&gt;<br/>
                                                    &lt;/div&gt;<br/><br/>

                                                    &lt;div className="form-check form-switch"&gt;<br/>
                                                        &nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled&gt;<br/>
                                                        &nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexSwitchCheckDisabled"&gt;Disabled switch checkbox input&lt;/label&gt;<br/>
                                                    &lt;/div&gt;<br/><br/>

                                                    &lt;div className="form-check form-switch"&gt;<br/>
                                                        &nbsp;&nbsp;&lt;input className="form-check-input" type="checkbox" id="flexSwitchCheckreadOnlyDisabled" defaultChecked disabled&gt;<br/>
                                                        &nbsp;&nbsp;&lt;label className="form-check-label" htmlFor="flexSwitchCheckreadOnlyDisabled"&gt;Disabled readOnly switch checkbox input&lt;/label&gt;<br/>
                                                    &lt;/div&gt;<br/><br/>
                                            </code></pre>
                                        </h6>
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                                        </div>

                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckreadOnly" defaultChecked/>
                                            <label className="form-check-label" htmlFor="flexSwitchCheckreadOnly">readOnly switch checkbox input</label>
                                        </div>

                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled/>
                                            <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                                        </div>

                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckreadOnlyDisabled" defaultChecked disabled/>
                                            <label className="form-check-label" htmlFor="flexSwitchCheckreadOnlyDisabled">Disabled readOnly switch checkbox input</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Form Select Box </h5>
                                    </div>

                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. 
                                            <pre><code className="text-danger">
                                                    &lt;select className="form-select form-control" aria-label="Default select example"&gt;<br/>
                                                        &nbsp;&nbsp;&lt;option defaultValue&gt;Open this select menu&lt;/option&gt;<br/>
                                                        &nbsp;&nbsp;&lt;option value="1"&gt;One&lt;/option&gt;<br/>
                                                        &nbsp;&nbsp;&lt;option value="2"&gt;Two&lt;/option&gt;<br/>
                                                        &nbsp;&nbsp;&lt;option value="3"&gt;Three&lt;/option&gt;<br/>
                                                    &lt;/select&gt;<br/>
                                            </code></pre>
                                        </h6>    
                                        <select className="form-select form-control" aria-label="Default select example">
                                            <option defaultValue>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h5 className="title mb-0"> Subscribe Form </h5>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. 
                                            <pre><code className="text-danger">
                                                &lt;div className="subcribe-form"&gt;<br/>
                                                    &nbsp;&nbsp;&lt;form&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input name="email" id="email2" type="email" className="form-control rounded-pill shadow" placeholder="Your email :" required&gt;<br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="submit" className="btn btn-pills btn-primary"&gt;Subscribe&lt;/button&gt;<br/>
                                                    &nbsp;&nbsp;&lt;/form&gt;&lt;!--end form--&gt;<br/>
                                                &lt;/div&gt;<br/>
                                            </code></pre>
                                           </h6> 
                                        <div className="subcribe-form">
                                            <form>
                                                <input name="email" id="email2" type="email" className="form-control rounded-pill shadow" placeholder="Your email :" required/>
                                                <button type="submit" className="btn btn-pills btn-primary">Subscribe</button>
                                            </form>
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