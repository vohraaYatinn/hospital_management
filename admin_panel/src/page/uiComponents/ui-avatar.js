import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import client from '../../assets/images/client/05.jpg'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function UiAvatar(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Avatars</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                <li className="breadcrumb-item text-capitalize active" aria-current="page">Avatars</li>
                            </ul>
                        </nav>
                    </div>
                
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Default Avatars </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;img src=&#123;client&#125; className="avatar avatar-ex-sm rounded"/&gt;</code></h6>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-ex-sm</Tooltip>}>
                                        <img src={client} className="avatar avatar-ex-sm me-2 rounded" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-ex-small</Tooltip>}>
                                        <img src={client} className="avatar avatar-ex-small me-2 rounded" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-md-sm</Tooltip>}>
                                        <img src={client} className="avatar avatar-md-sm me-2 rounded" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-small</Tooltip>}>
                                        <img src={client} className="avatar avatar-small me-2 rounded" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-md-md</Tooltip>}>
                                        <img src={client} className="avatar avatar-md-md me-2 rounded" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-medium</Tooltip>}>
                                        <img src={client} className="avatar avatar-medium me-2 rounded" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-large</Tooltip>}>
                                        <img src={client} className="avatar avatar-large me-2 rounded" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-ex-large</Tooltip>}>
                                        <img src={client} className="avatar avatar-ex-large me-2 rounded" alt=""/>
                                    </OverlayTrigger>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Circle Avatars </h5>
                                </div>
    
                                <div className="p-4">
                                    <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;img src=&#123;client&#125; className="avatar avatar-ex-sm rounded-circle"/&gt;</code></h6>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-ex-sm</Tooltip>}>
                                        <img src={client} className="avatar avatar-ex-sm me-2 rounded-circle" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-ex-small</Tooltip>}>
                                        <img src={client} className="avatar avatar-ex-small me-2 rounded-circle" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-md-sm</Tooltip>}>
                                        <img src={client} className="avatar avatar-md-sm me-2 rounded-circle" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-small</Tooltip>}>
                                        <img src={client} className="avatar avatar-small me-2 rounded-circle" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-md-md</Tooltip>}>
                                        <img src={client} className="avatar avatar-md-md me-2 rounded-circle" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-medium</Tooltip>}>
                                        <img src={client} className="avatar avatar-medium me-2 rounded-circle" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-large</Tooltip>}>
                                        <img src={client} className="avatar avatar-large me-2 rounded-circle" alt=""/>
                                    </OverlayTrigger>

                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">avatar-ex-large</Tooltip>}>
                                        <img src={client} className="avatar avatar-ex-large me-2 rounded-circle" alt=""/>
                                    </OverlayTrigger>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}