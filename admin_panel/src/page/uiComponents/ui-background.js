import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function UiBackground(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Background</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                <li className="breadcrumb-item text-capitalize active" aria-current="page">Background</li>
                            </ul>
                        </nav>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Background Color </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;div className="bg-primary"&gt; Doctris Saas & Software Template &lt;/div&gt;</code></h6>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-primary</Tooltip>}>
                                            <p className="avatar avatar-small bg-primary rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-secondary</Tooltip>}>
                                            <p className="avatar avatar-small bg-secondary rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-success</Tooltip>}>
                                            <p className="avatar avatar-small bg-success rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-danger</Tooltip>}>
                                            <p className="avatar avatar-small bg-danger rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-warning</Tooltip>}>
                                            <p className="avatar avatar-small bg-warning rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-info</Tooltip>}>
                                            <p className="avatar avatar-small bg-info rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-light</Tooltip>}>
                                            <p className="avatar avatar-small bg-light rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-white</Tooltip>}>
                                            <p className="avatar avatar-small bg-white border rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-dark</Tooltip>}>
                                            <p className="avatar avatar-small bg-dark rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-muted</Tooltip>}>
                                            <p className="avatar avatar-small bg-muted rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-black</Tooltip>}>
                                            <p className="avatar avatar-small bg-black rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Background Gradient Color </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;div className="bg-primary bg-gradient"&gt; Doctris Saas & Software Template &lt;/div&gt;</code></h6>
                                    
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-primary .bg-gradient</Tooltip>}>
                                            <p className="avatar avatar-small bg-primary bg-gradient rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-secondary .bg-gradient</Tooltip>}>
                                            <p className="avatar avatar-small bg-secondary bg-gradient rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-success .bg-gradient</Tooltip>}>
                                            <p className="avatar avatar-small bg-success bg-gradient rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-danger .bg-gradient</Tooltip>}>
                                            <p className="avatar avatar-small bg-danger bg-gradient rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-warning .bg-gradient</Tooltip>}>
                                            <p className="avatar avatar-small bg-warning bg-gradient rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-info .bg-gradient</Tooltip>}>
                                            <p className="avatar avatar-small bg-info bg-gradient rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-light .bg-gradient</Tooltip>}>
                                            <p className="avatar avatar-small bg-light bg-gradient rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-white .bg-gradient</Tooltip>}>
                                            <p className="avatar avatar-small bg-white border bg-gradient rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-dark .bg-gradient</Tooltip>}>
                                            <p className="avatar avatar-small bg-dark bg-gradient rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-muted .bg-gradient</Tooltip>}>
                                            <p className="avatar avatar-small bg-muted bg-gradient rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-black .bg-gradient</Tooltip>}>
                                            <p className="avatar avatar-small bg-black bg-gradient rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Soft Background Color </h5>
                                </div>

                                <div className="p-4">
                                    <h6 className="text-muted mb-2 pb-2">Ex. <code className="text-danger">&lt;div className="bg-soft-primary"&gt; Doctris Saas & Software Template &lt;/div&gt;</code></h6>
                                    
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-soft-primary</Tooltip>}>
                                            <p className="avatar avatar-small bg-soft-primary rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-soft-secondary</Tooltip>}>
                                            <p className="avatar avatar-small bg-soft-secondary rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-soft-success</Tooltip>}>
                                            <p className="avatar avatar-small bg-soft-success rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-soft-danger</Tooltip>}>
                                            <p className="avatar avatar-small bg-soft-danger rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-soft-warning</Tooltip>}>
                                            <p className="avatar avatar-small bg-soft-warning rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-soft-info</Tooltip>}>
                                            <p className="avatar avatar-small bg-soft-info rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-soft-light</Tooltip>}>
                                            <p className="avatar avatar-small bg-soft-light rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-soft-white</Tooltip>}>
                                            <p className="avatar avatar-small bg-soft-white border rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-soft-dark</Tooltip>}>
                                            <p className="avatar avatar-small bg-soft-dark rounded mb-0"></p>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="d-inline-block me-1 mt-2">
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }}  overlay={<Tooltip id="button-tooltip-2">.bg-soft-muted</Tooltip>}>
                                            <p className="avatar avatar-small bg-soft-muted rounded mb-0"></p>
                                        </OverlayTrigger>
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