import React from "react";
import { Link, useParams } from "react-router-dom";

import blog from '../assets/images/blog/single.jpg'

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

import { blogData, commentData, recentPost } from "../data/data";

import {FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiGithub, FiGitlab, FiYoutube, FiCalendar, FiClock} from '../assets/icons/vander'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function BlogDetail(){

    let settings = {
        container: '.slider-range-three',
        items: 3,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 24,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };

    let params = useParams();
    let id = params.id
    let data = blogData.find((blog)=>blog.id === parseInt(id))
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>
        <section className="bg-half-150 d-table w-100 bg-light">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4">{data?.title ? data.title : 'Lockdowns lead to fewer people seeking medical care'}</h3>
                            <p className="para-desc mx-auto text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        
                            <ul className="list-unstyled mt-4">
                                <li className="list-inline-item user text-muted me-2"><i className="mdi mdi-account"></i> Calvin Carlo</li>
                                <li className="list-inline-item date text-muted"><i className="mdi mdi-calendar-check"></i> {data?.date ? data.date : '19th June, 2023'}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-color-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-7">
                        <img src={data?.image ? data.image : blog} className="img-fluid rounded shadow" alt=""/>
                        <p className="text-muted mt-4">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century.</p>
                        <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                        <p className="text-muted mb-0">For this reason, dummy text usually consists of a more or less random series of words or syllables.</p>
                    
                        <h5 className="card-title mt-4 mb-0">Comments :</h5>

                        <ul className="media-list list-unstyled mb-0">
                            {commentData.map((item,index)=>{
                                return(
                                <li className="mt-4" key={index}>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <Link className="pe-3" to="#">
                                                <img src={item.image} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                                            </Link>
                                            <div className="commentor-detail">
                                                <h6 className="mb-0"><Link to="#" className="text-dark media-heading">{item.name}</Link></h6>
                                                <small className="text-muted">{item.date}</small>
                                            </div>
                                        </div>
                                        <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-muted font-italic p-3 bg-light rounded">{item.desc}</p>
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

                    <div className="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card border-0 sidebar sticky-bar rounded shadow">
                            <div className="card-body">
                                <div className="widget mb-4 pb-2">
                                    <h5 className="widget-title">Search</h5>
                                    <div id="search2" className="widget-search mt-4 mb-0">
                                        <form role="search" method="get" id="searchform" className="searchform">
                                            <div>
                                                <input type="text" className="border rounded form-control" name="s" id="s" placeholder="Search Keywords..."/>
                                                <input type="submit" id="searchsubmit" value="Search"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget mb-4 pb-2">
                                    <h5 className="widget-title">Recent Post</h5>
                                    <div className="mt-4">
                                        {recentPost.map((item,index)=>{
                                            return(
                                                <div className="clearfix post-recent" key={index}>
                                                    <div className="post-recent-thumb float-start"> <Link to="#"> <img alt="" src={item.image} className="img-fluid rounded"/></Link></div>
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

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h4 className="title mb-0">Related Post:</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 mt-4 pt-2">
                        <div className="slider-range-three">
                            <TinySlider settings={settings}>
                                {blogData.slice(0,5).map((item,index) =>{
                                    return(
                                        <div className="tiny-slide">
                                            <div className="card blog blog-primary border-0 shadow rounded overflow-hidden m-1" key={index}>
                                                <img src={item.image} className="img-fluid" alt=""/>
                                                <div className="card-body p-4">
                                                <ul className="list-unstyled mb-2">
                                                    <li className="list-inline-item text-muted small me-3 d-inline-flex align-items-center"><FiCalendar className="mb-0 text-dark h6 me-1"/>{item.date}</li>
                                                    <li className="list-inline-item text-muted small d-inline-flex align-items-center"><FiClock className="mb-0 text-dark h6 me-1"/>{item.time}</li>
                                                </ul>
                                                    <Link to={`/blog-detail/${item.id}`} className="text-dark title h5">{item.title}</Link>
                                                    <div className="post-meta d-flex justify-content-between mt-3">
                                                        <ul className="list-unstyled mb-0">
                                                            <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline me-1"></i>33</Link></li>
                                                            <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline me-1"></i>08</Link></li>
                                                        </ul>
                                                        <Link to={`/blog-detail/${item.id}`} className="link">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}