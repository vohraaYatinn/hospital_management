import React from "react";
import { Link, useParams } from "react-router-dom";

import blogImg from '../../assets/images/blog/single.jpg'

import Wrapper from "../../components/wrapper";

import { blogData, blogcomment, recentBlog } from "../../data/data";

import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiGithub, FiGitlab, FiYoutube } from '../../assets/icons/vander'

export default function BlogDetail(){
    let params = useParams();
    let id = params.id
    let data = blogData.find((blog) =>blog.id === parseInt(id))
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <div>
                            <h5 className="mb-0">{data?.title ? data.title : 'Lockdowns lead to fewer people seeking medical care'}</h5>

                            <ul className="list-unstyled mt-2 mb-0">
                                <li className="list-inline-item user text-muted me-2"><i className="mdi mdi-account"></i> Calvin Carlo</li>
                                <li className="list-inline-item date text-muted"><i className="mdi mdi-calendar-check"></i> {data?.date ? data.date : '19th June, 2023'}</li>
                            </ul>
                        </div>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item"><Link to="/blogs">Blogs</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog Detail</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-8 col-lg-7 mt-4">
                            <div className="card rounded shadow border-0 overflow-hidden">
                                <img src={data?.image ? data.image : blogImg} className="img-fluid" alt=""/>
    
                                <div className="p-4">
                                    <p className="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century.</p>
                                    <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                                    <p className="text-muted mb-0">For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                                
                                    <h5 className="card-title mt-4 mb-0">Comments :</h5>
            
                                    <ul className="media-list list-unstyled mb-0">
                                        {blogcomment.map((item, index) =>{
                                            return(
                                                <li className="mt-4" key={index}>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <Link className="pe-3" to="#">
                                                                <img src={item.image} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                                                            </Link>
                                                            <div className="commentor-detail">
                                                                <h6 className="mb-0"><Link to="#" className="media-heading text-dark">{item.name}</Link></h6>
                                                                <small className="text-muted">{item.date}</small>
                                                            </div>
                                                        </div>
                                                        <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                                    </div>
                                                    <div className="mt-3">
                                                        <p className="text-muted font-italic p-3 bg-light rounded">{item.deac}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                
                                    <h5 className="card-title mt-4 mb-0">Leave A Comment :</h5>
            
                                    <form className="mt-3">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Comment</label>
                                                    <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control" required=""></textarea>
                                                </div>
                                            </div>
            
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Name <span className="text-danger">*</span></label>
                                                    <input id="name" name="name" type="text" placeholder="Name" className="form-control" required=""/>
                                                </div>
                                            </div>
            
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                    <input id="email" type="email" placeholder="Email" name="email" className="form-control" required=""/>
                                                </div>
                                            </div>
            
                                            <div className="col-md-12">
                                                <div className="send d-grid">
                                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-5 mt-4">
                            <div className="card border-0 sidebar sticky-bar rounded shadow">
                                <div className="card-body">
                                    
                                    <div className="widget mb-4 pb-2">
                                        <h5 className="widget-title">Search</h5>
                                        <div id="search2" className="widget-search mt-4 mb-0">
                                            <form className="searchform">
                                                <div>
                                                    <input type="text" className="border rounded form-control" name="s" id="s1" placeholder="Search Keywords..."/>
                                                    <input type="submit" id="searchsubmit1" value="Search"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    
        
                                    
                                    <div className="widget mb-4 pb-2">
                                        <h5 className="widget-title">Recent Post</h5>
                                        <div className="mt-4">
                                            {recentBlog.map((item, index) =>{
                                                return(
                                                    <div className="clearfix post-recent" key={index}>
                                                        <div className="post-recent-thumb float-start"> <Link to="#"> <img alt="img" src={item.image} className="img-fluid rounded"/></Link></div>
                                                        <div className="post-recent-content float-start"><Link to="#">{item.title}</Link><span className="text-muted mt-2">{item.date}</span></div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    
                                    <div className="widget mb-4 pb-2">
                                        <h5 className="widget-title">Tags Cloud</h5>
                                        <div className="tagcloud mt-4">
                                            <Link to="#" className="rounded">Business</Link>
                                            <Link to="#" className="rounded">Finance</Link>
                                            <Link to="#" className="rounded">Marketing</Link>
                                            <Link to="#" className="rounded">Fashion</Link>
                                            <Link to="#" className="rounded">Bride</Link>
                                            <Link to="#" className="rounded">Lifestyle</Link>
                                            <Link to="#" className="rounded">Travel</Link>
                                            <Link to="#" className="rounded">Beauty</Link>
                                            <Link to="#" className="rounded">Video</Link>
                                            <Link to="#" className="rounded">Audio</Link>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    <div className="widget">
                                        <h5 className="widget-title">Follow us</h5>
                                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                                            <li className="list-inline-item"><Link to="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><FiGithub className="fea icon-sm fea-social"/></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><FiYoutube className="fea icon-sm fea-social"/></Link></li>
                                            <li className="list-inline-item"><Link to="#" className="rounded"><FiGitlab className="fea icon-sm fea-social"/></Link></li>
                                        </ul>
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