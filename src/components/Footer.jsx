import React from 'react';
import '../App.css'

const Footer = () => {
  return (
    <footer className="text-black pb-1 pt-5 " style={{background:"#fff6f0"}}>
      <div className="container-fluid mb-5 ps-3">
        <div className="row g-0">
          {/* Column 1 */}
          <div className="col-md-5 mb-3">
            <img
                src="/img/logo.png"
                alt="Todoist Logo"
                width="150"
              />
            <p className=" fs-5 fw-semibold ps-2">
              Join millions of people who organize
              <br />
               work and life with Todoist.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-2 mb-3">
            <h5 className='mb-4'>Feature</h5>
            <ul className="list-unstyled">
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">How It Works</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">For Teams</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Pricing</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Templates</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-2 mb-3">
            <h5 className='mb-4'>Resources</h5>
            <ul className="list-unstyled">
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Download Apps</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Productivity Methods</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Help Center</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Integrations</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Channel Partners</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Developer API</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Status</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-2 mb-3">
            <h5 className='mb-4'>Company</h5>
            <ul className="list-unstyled">
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">About Us</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Careers</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Inspiration Hub</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Press</a></li>
              <li className='mb-2'><a href="#" className="text-black text-decoration-none me-1 p-2 rounded hover-btn">Twist</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="col-md-1 mb-3">
             <ul className="list-unstyled">
              <li className='mb-4'><a href="https://www.youtube.com/channel/UCQ_61yRKscCnkIJBPoR15EA" target="_blank" rel="noopener noreferrer" className="text-black rounded ms-5 hover-btn"><i className="fa-brands fa-youtube"></i></a></li>
              <li className='mb-4'><a href="https://www.linkedin.com/showcase/todoist" target="_blank" rel="noopener noreferrer" className="text-black rounded ms-5 hover-btn"><i className="fa-brands fa-linkedin"></i></a></li>
              <li className='mb-4'><a href="https://www.instagram.com/todoistofficial/#" target="_blank" rel="noopener noreferrer" className="text-black rounded ms-5 hover-btn"><i className="fa-brands fa-instagram"></i></a></li>
              <li className='mb-4'><a href="https://www.reddit.com/r/todoist/" target="_blank" rel="noopener noreferrer" className="text-black rounded ms-5 hover-btn"><i className="fa-brands fa-reddit"></i></a></li>
             </ul>
          </div>
        </div>
      </div>
         

          <ul className="list-unstyled d-flex small ps-3">
            <li><a className='list-unstyled text-secondary text-decoration-none' href="#">Security</a></li>
                <div className="vr bg-black mx-1 mt-1 h-75"></div>
            <li><a className='list-unstyled text-secondary text-decoration-none' href="#">Privacy</a></li>
                <div className="vr bg-black mx-1 mt-1 h-75"></div>
            <li><a className='list-unstyled text-secondary text-decoration-none' href="#">Terms</a></li>
                <div className="vr bg-black mx-1 mt-1 h-75"></div>
            <li><a className='list-unstyled text-secondary text-decoration-none' href="#">© Doist Inc.</a></li>
          </ul>
    </footer>
  );
};

export default Footer;
