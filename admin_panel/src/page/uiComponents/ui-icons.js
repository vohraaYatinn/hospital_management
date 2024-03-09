import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import { FiUser, FiFacebook, FiMapPin, FiLinkedin, FiCamera, FiMail } from '../../assets/icons/vander'
export default function UiIcon(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Icons</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                <li className="breadcrumb-item text-capitalize active" aria-current="page">Icons</li>
                            </ul>
                        </nav>
                    </div>
                
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Icons </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6>React Icons</h6>
                                    <p className="text-muted">Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using. <Link to="https://react-icons.github.io/react-icons/" target="_blank"><code className="text-primary">https://react-icons.github.io/react-icons/</code></Link></p>
                                    <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;FiArrowRight className="fea icon-sm"/&gt;</code></h6>

                                    <FiUser className="fea icon-ex-md me-2"/>
                                    <FiFacebook className="fea icon-ex-md me-2"/>
                                    <FiMapPin className="fea icon-ex-md me-2"/>
                                    <FiLinkedin className="fea icon-ex-md me-2"/>
                                    <FiCamera className="fea icon-ex-md me-2"/>
                                    <FiMail className="fea icon-ex-md me-2"/>

                                    <h6 className="mt-4">Material Design Icons</h6>
                                    <p className="text-muted">There are 4400+ Material Design icons and you can get all icons info from here: <Link to="https://materialdesignicons.com/" target="_blank"><code className="text-primary">https://materialdesignicons.com/</code></Link></p>
                                    <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;i className="mdi mdi-home"&gt; &lt;/i&gt;</code></h6>

                                    <i className="mdi mdi-home h4 me-2"></i>
                                    <i className="mdi mdi-facebook h4 me-2"></i>
                                    <i className="mdi mdi-chevron-tight h4 me-2"></i>
                                    <i className="mdi mdi-camera-image h4 me-2"></i>
                                    <i className="mdi mdi-car-light-high h4 me-2"></i>
                                    <i className="mdi mdi-silverware-fork-knife h4 me-2"></i>
                                </div>
                                </div>   
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}