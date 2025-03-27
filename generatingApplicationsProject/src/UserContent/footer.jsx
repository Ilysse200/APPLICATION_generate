import React from 'react';
import './userStyles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>About Us</h4>
                <p>Join our growing team and help shape the future of technology.</p>
            </div>
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Benefits</a></li>
                    <li><a href="#">Culture</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Contact</h4>
                <p>📧 careers@company.com</p>
                <p>📞 +1 (555) 123-4567</p>
            </div>
            <div className="footer-section">
                <h4>Follow Us</h4>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                © 2025 JobPortal. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
