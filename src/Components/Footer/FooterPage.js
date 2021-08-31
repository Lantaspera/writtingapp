import React from 'react'
import './Footer.css'

function FooterPage(){
    return(
        <footer className="footer-style">
            <hr className="footer-line"/>
            <div className="footer-content">
                <div className="footer-left">
                    <h2 className="footer-logo">Logoname</h2>
                    <div className="footer-paradata">
                        <p className="footer-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="footer-right">
                    <h2 className="footer-info">Info</h2>
                    <ul className="footer-term">
                        <li><a href="#">Contact us</a> </li>
                        <li><a href="#">Privacy Policies</a> </li>
                        <li><a href="#">Terms & Conditions</a> </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterPage

