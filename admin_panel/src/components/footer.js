import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="bg-footer-color shadow py-3">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="text-sm-start text-center">
                            <p className="mb-0 text-muted">{new Date().getFullYear()} © UJUR.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}