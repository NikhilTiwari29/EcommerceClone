import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <ul className="footer-contact">
              <li>Email: info@example.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Main Street, City</li>
            </ul>
          </div>
          <div className="col-md-6 text-md-end">
            <h5>Follow Us</h5>
            <ul className="footer-social">
              <li><Link to="#" target="_blank">Facebook</Link></li>
              <li><Link to="#" target="_blank">Twitter</Link></li>
              <li><Link to="#" target="_blank">Instagram</Link></li>
              <li><Link to="#" target="_blank">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="footer-copyright">&copy; 2024 Nikhil Ecommerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
