import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';

export default function UiTooltipPopover(){
    return(
        <Wrapper>
            <div className="container-fluid">
                    <div className="layout-specing">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Tooltips & Popovers</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                                <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                    <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                    <li className="breadcrumb-item text-capitalize active" aria-current="page">Tooltips & Popovers</li>
                                </ul>
                            </nav>
                        </div>
                    
                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h4 className="title mb-0"> Tooltips </h4>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. <br/> 
                                            <pre><code className="text-danger">
                                                    &lt;OverlayTrigger placement="top" delay=&#123;&#123;show: 250, hide: 400 &#125;&#125; overlay=&#123;&lt;Tooltip id="button-tooltip"&gt;Top Tooltip&lt;/Tooltip&gt;&#125;&gt; <br/>
                                                    &nbsp;&nbsp;&lt;Link to="#" className="btn btn-primary me-2 mt-2"&gt;Top&lt;/Link&gt;<br/>
                                                    &nbsp;&lt;/OverlayTrigger&gt;<br/>

                                                    &lt;OverlayTrigger placement="left" delay=&#123;&#123;show: 250, hide: 400 &#125;&#125; overlay=&#123;&lt;Tooltip id="button-tooltip"&gt;Left Tooltip&lt;/Tooltip&gt;&#125;&gt; <br/>
                                                    &nbsp;&nbsp;&lt;Link to="#" className="btn btn-primary me-2 mt-2"&gt;Left&lt;/Link&gt;<br/>
                                                    &nbsp;&lt;/OverlayTrigger&gt;<br/>

                                                    &lt;OverlayTrigger placement="bottom" delay=&#123;&#123;show: 250, hide: 400 &#125;&#125; overlay=&#123;&lt;Tooltip id="button-tooltip"&gt;Bottom Tooltip&lt;/Tooltip&gt;&#125;&gt; <br/>
                                                    &nbsp;&nbsp;&lt;Link to="#" className="btn btn-primary me-2 mt-2"&gt;Bottom&lt;/Link&gt;<br/>
                                                    &nbsp;&lt;/OverlayTrigger&gt;<br/>

                                                    &lt;OverlayTrigger placement="right" delay=&#123;&#123;show: 250, hide: 400 &#125;&#125; overlay=&#123;&lt;Tooltip id="button-tooltip"&gt;Right Tooltip&lt;/Tooltip&gt;&#125;&gt; <br/>
                                                    &nbsp;&nbsp;&lt;Link to="#" className="btn btn-primary me-2 mt-2"&gt;Right&lt;/Link&gt;<br/>
                                                    &nbsp;&lt;/OverlayTrigger&gt;<br/>
                                                </code>
                                            </pre>
                                        </h6>
                                        <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Top Tooltip</Tooltip>}>
                                            <Link to="#" className="btn btn-primary me-2 mt-2">Top</Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Left Tooltip</Tooltip>}>
                                            <Link to="#" className="btn btn-primary me-2 mt-2">Left</Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Bottom Tooltip</Tooltip>}>
                                            <Link to="#" className="btn btn-primary me-2 mt-2">Bottom</Link>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Right Tooltip</Tooltip>}>
                                            <Link to="#" className="btn btn-primary me-2 mt-2">Right</Link>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="card rounded shadow">
                                    <div className="p-4 border-bottom">
                                        <h4 className="title mb-0"> Popovers </h4>
                                    </div>
        
                                    <div className="p-4">
                                        <h6 className="text-muted mb-2 pb-2">Ex. <br/> 
                                            <pre><code className="text-danger">
                                                &lt;OverlayTrigger trigger="click" key='top' placement='top' overlay=&#123; <br/>
                                                    &nbsp;&lt;Popover id= 'popover-positioned-top'&gt;<br/>
                                                    &nbsp;&nbsp;&lt;Popover.Body&gt;top popover&lt;/Popover.Body&gt;<br/>
                                                    &nbsp;&lt;/Popover&gt;&#125;<br/>
                                                    &gt;<br/>
                                                    &nbsp;&nbsp;&nbsp;&lt;Link to="#" className="btn btn-primary me-2 mt-2 text-capitalize"&gt;top&lt;/Link&gt;<br/>
                                                &lt;/OverlayTrigger&gt;<br/>
                                                </code>
                                            </pre>
                                        </h6>
                                        <div className="d-inline position-relative">
                                            <OverlayTrigger className='position-absolute' trigger="click" key='top' placement='top' overlay={ 
                                                <Popover id= 'popover-positioned-top'>
                                                    <Popover.Body>top popover</Popover.Body>
                                                </Popover>}
                                            >
                                                <Link to="#" className="btn btn-primary me-2 mt-2 text-capitalize">top</Link>
                                            </OverlayTrigger>
                                        </div>
                                            <OverlayTrigger trigger="click" key='right' placement='right' overlay={ 
                                                <Popover id= 'popover-positioned-right'>
                                                    <Popover.Body>right popover</Popover.Body>
                                                </Popover>}
                                            >
                                                <Link to="#" className="btn btn-primary me-2 mt-2 text-capitalize">right</Link>
                                            </OverlayTrigger>

                                            <OverlayTrigger trigger="click" key='bottom' placement='bottom' overlay={ 
                                                <Popover id= 'popover-positioned-bottom'>
                                                    <Popover.Body>bottom popover</Popover.Body>
                                                </Popover>}
                                            >
                                                <Link to="#" className="btn btn-primary me-2 mt-2 text-capitalize">bottom</Link>
                                            </OverlayTrigger>

                                            <OverlayTrigger trigger="click" key='left' placement='left' overlay={ 
                                                <Popover id= 'popover-positioned-left'>
                                                    <Popover.Body>left popover</Popover.Body>
                                                </Popover>}
                                            >
                                                <Link to="#" className="btn btn-primary me-2 mt-2 text-capitalize">left</Link>
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