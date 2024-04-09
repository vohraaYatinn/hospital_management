import React from "react";
import { Link } from "react-router-dom";

export default function AdminFooter(){
    return(
        <footer className="py-4 fixed-footer">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <div className="text-sm-start text-center">
                        <p className="mb-0">{new Date().getFullYear()}© UJUR. all rights reserved</p>
                        </div>
                    </div>

                    <div className="col-sm-6 mt-4 mt-sm-0">
                        <ul className="list-unstyled footer-list text-sm-end text-center mb-0">
                            <li className="list-inline-item"><Link className="text-foot me-2">Terms</Link></li>
                            <li className="list-inline-item"><Link  className="text-foot me-2">Privacy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}