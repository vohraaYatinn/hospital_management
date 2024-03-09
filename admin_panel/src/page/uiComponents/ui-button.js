import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import { FiFacebook, FiTwitter, FiYoutube, FiGitlab, FiLinkedin, FiGithub, FiStar} from '../../assets/icons/vander'

export default function UiButton(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Buttons</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                <li className="breadcrumb-item text-capitalize active" aria-current="page">Buttons</li>
                            </ul>
                        </nav>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Buttons</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-primary"&gt; Primary &lt;/Link&gt;</code></h6>
                                    
                                    <Link to="#" className="btn btn-primary mt-2 me-2">Primary</Link>
                                    <Link to="#" className="btn btn-secondary mt-2 me-2">Secondary</Link>
                                    <Link to="#" className="btn btn-success mt-2 me-2">Success</Link>
                                    <Link to="#" className="btn btn-danger mt-2 me-2">Danger</Link>
                                    <Link to="#" className="btn btn-info mt-2 me-2">Info</Link>
                                    <Link to="#" className="btn btn-warning mt-2 me-2">Warning</Link>
                                    <Link to="#" className="btn btn-light mt-2 me-2">Light</Link>
                                    <Link to="#" className="btn btn-dark mt-2 me-2">Dark</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Buttons Pill</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-pills btn-primary"&gt; Primary &lt;/Link&gt;</code></h6>

                                    <Link to="#" className="btn btn-pills btn-primary mt-2 me-2">Primary</Link>
                                    <Link to="#" className="btn btn-pills btn-secondary mt-2 me-2">Secondary</Link>
                                    <Link to="#" className="btn btn-pills btn-success mt-2 me-2">Success</Link>
                                    <Link to="#" className="btn btn-pills btn-danger mt-2 me-2">Danger</Link>
                                    <Link to="#" className="btn btn-pills btn-info mt-2 me-2">Info</Link>
                                    <Link to="#" className="btn btn-pills btn-warning mt-2 me-2">Warning</Link>
                                    <Link to="#" className="btn btn-pills btn-light mt-2 me-2">Light</Link>
                                    <Link to="#" className="btn btn-pills btn-dark mt-2 me-2">Dark</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Buttons Soft</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-soft-primary"&gt; Primary &lt;/Link&gt;</code></h6>
                                    
                                    <Link to="#" className="btn btn-soft-primary mt-2 me-2">Primary</Link>
                                    <Link to="#" className="btn btn-soft-secondary mt-2 me-2">Secondary</Link>
                                    <Link to="#" className="btn btn-soft-success mt-2 me-2">Success</Link>
                                    <Link to="#" className="btn btn-soft-danger mt-2 me-2">Danger</Link>
                                    <Link to="#" className="btn btn-soft-info mt-2 me-2">Info</Link>
                                    <Link to="#" className="btn btn-soft-warning mt-2 me-2">Warning</Link>
                                    <Link to="#" className="btn btn-soft-light mt-2 me-2">Light</Link>
                                    <Link to="#" className="btn btn-soft-dark mt-2 me-2">Dark</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Buttons Pill Soft</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-pills btn-soft-primary"&gt; Primary &lt;/Link&gt;</code></h6>

                                    <Link to="#" className="btn btn-pills btn-soft-primary mt-2 me-2">Primary</Link>
                                    <Link to="#" className="btn btn-pills btn-soft-secondary mt-2 me-2">Secondary</Link>
                                    <Link to="#" className="btn btn-pills btn-soft-success mt-2 me-2">Success</Link>
                                    <Link to="#" className="btn btn-pills btn-soft-danger mt-2 me-2">Danger</Link>
                                    <Link to="#" className="btn btn-pills btn-soft-info mt-2 me-2">Info</Link>
                                    <Link to="#" className="btn btn-pills btn-soft-warning mt-2 me-2">Warning</Link>
                                    <Link to="#" className="btn btn-pills btn-soft-light mt-2 me-2">Light</Link>
                                    <Link to="#" className="btn btn-pills btn-soft-dark mt-2 me-2">Dark</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Buttons Outline</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-outline-primary"&gt; Primary &lt;/Link&gt;</code></h6>

                                    <Link to="#" className="btn btn-outline-primary mt-2 me-2">Primary</Link>
                                    <Link to="#" className="btn btn-outline-secondary mt-2 me-2">Secondary</Link>
                                    <Link to="#" className="btn btn-outline-success mt-2 me-2">Success</Link>
                                    <Link to="#" className="btn btn-outline-danger mt-2 me-2">Danger</Link>
                                    <Link to="#" className="btn btn-outline-info mt-2 me-2">Info</Link>
                                    <Link to="#" className="btn btn-outline-warning mt-2 me-2">Warning</Link>
                                    <Link to="#" className="btn btn-outline-light mt-2 me-2">Light</Link>
                                    <Link to="#" className="btn btn-outline-dark mt-2 me-2">Dark</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Buttons Pill Outline</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-outline-primary"&gt; Primary &lt;/Link&gt;</code></h6>

                                    <Link to="#" className="btn btn-pills btn-outline-primary mt-2 me-2">Primary</Link>
                                    <Link to="#" className="btn btn-pills btn-outline-secondary mt-2 me-2">Secondary</Link>
                                    <Link to="#" className="btn btn-pills btn-outline-success mt-2 me-2">Success</Link>
                                    <Link to="#" className="btn btn-pills btn-outline-danger mt-2 me-2">Danger</Link>
                                    <Link to="#" className="btn btn-pills btn-outline-info mt-2 me-2">Info</Link>
                                    <Link to="#" className="btn btn-pills btn-outline-warning mt-2 me-2">Warning</Link>
                                    <Link to="#" className="btn btn-pills btn-outline-light mt-2 me-2">Light</Link>
                                    <Link to="#" className="btn btn-pills btn-outline-dark mt-2 me-2">Dark</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Button Icons</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-icon btn-primary"&gt;&lt;FiFacebook className="icons"/&gt;&lt;/Link&gt;</code></h6>

                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-info mt-2"><FiTwitter className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-danger mt-2"><FiYoutube className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-success mt-2"><FiGitlab className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-secondary mt-2"><FiLinkedin className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-warning mt-2"><FiGithub className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-info mt-2"><FiStar className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-light mt-2"><FiGithub className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-dark mt-2"><FiStar className="icons"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Outline Button Icons</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-icon btn-outline-primary"&gt;&lt;FiFacebook className="icons"/&gt;&lt;/Link&gt;</code></h6>

                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-outline-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-outline-info mt-2"><FiTwitter className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-outline-danger mt-2"><FiYoutube className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-outline-success mt-2"><FiGitlab className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-outline-secondary mt-2"><FiLinkedin className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-outline-warning mt-2"><FiGithub className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-outline-info mt-2"><FiStar className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-outline-light mt-2"><FiGithub className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-outline-dark mt-2"><FiStar className="icons"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Button Pill Icons</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-icon btn-pills btn-primary"&gt;&lt;FiFacebook className="icons"/&gt;&lt;/Link&gt;</code></h6>

                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-info mt-2"><FiTwitter className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-danger mt-2"><FiYoutube className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-success mt-2"><FiGitlab className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-secondary mt-2"><FiLinkedin className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-warning mt-2"><FiGithub className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-info mt-2"><FiStar className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-light mt-2"><FiGithub className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-dark mt-2"><FiStar className="icons"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Outline Button Pill Icons</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-icon btn-pills btn-outline-primary"&gt;&lt;FiFacebook className="icons"/&gt;&lt;/Link&gt;</code></h6>

                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-outline-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-outline-info mt-2"><FiTwitter className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-outline-danger mt-2"><FiYoutube className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-outline-success mt-2"><FiGitlab className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-outline-secondary mt-2"><FiLinkedin className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-outline-warning mt-2"><FiGithub className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-outline-info mt-2"><FiStar className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-outline-light mt-2"><FiGithub className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-outline-dark mt-2"><FiStar className="icons"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0">Button Sizing</h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-primary btn-sm"&gt; Primary &lt;/Link&gt;</code></h6>

                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item"><Link to="#" className="btn btn-sm btn-primary mt-2 me-2">Small</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-sm btn-pills btn-primary mt-2 me-2">Small</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-sm btn-outline-primary mt-2 me-2">Small</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-sm btn-pills btn-outline-primary mt-2 me-2">Small</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-sm btn-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-sm btn-pills btn-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-sm btn-outline-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-sm btn-pills btn-outline-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                    </ul>
                                    
                                    <h6 className="text-muted mb-2 mt-4 pb-2">Ex. <code className="text-danger">&lt;Link to="#" className="btn btn-primary btn-lg"&gt; Primary &lt;/Link&gt;</code></h6>

                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item"><Link to="#" className="btn btn-lg btn-primary mt-2 me-2">Large</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-lg btn-pills btn-primary mt-2 me-2">Large</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-lg btn-outline-primary mt-2 me-2">Large</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-lg btn-pills btn-outline-primary mt-2 me-2">Large</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-lg btn-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-lg btn-pills btn-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-lg btn-outline-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                        <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-lg btn-pills btn-outline-primary mt-2"><FiFacebook className="icons"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}