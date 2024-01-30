// import React, { useState } from 'react';
// import logo from '../Assets/logo.png';
// import './Sidebar.css';

// function LogoutConfirmationPopup({ onCancel, onLogout }) {
//   return (
//     <div className="popup">
//       <p>Are you sure you want to log out?</p>
//       <div className="popup-buttons">
//         <button onClick={onCancel}>Cancel</button>
//         <button onClick={onLogout}>OK</button>
//       </div>
//     </div>
//   );
// }

// function Sidebar() {
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleLogoutClick = () => {
//     setShowConfirmation(true);
//   };

//   const handleCancelLogout = () => {
//     setShowConfirmation(false);
//   };

//   const handleConfirmLogout = () => {
//     window.location.href = '/home'; 
//   };

//   return (
//     <div>
//       <div className="sidebar">
//         <header>FAIRMED</header>
//         <ul>
//           <li>
//             <a href="/doctor-dashboard">
//               <i className="fa fa-qrcode" />
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="fa fa-hospital-o" />
//               Update Medical Record
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="fa fa-star-o" />
//               My Rating 
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="fa fa-comment-o" />
//               My Reviews
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <i className="fa fa-question-circle" />
//               Support
//             </a>
//           </li>
//         </ul>
//         <button className="logout_button" onClick={handleLogoutClick}>
//           Logout
//         </button>
//       </div>
//       {showConfirmation && (
//         <div className="popup-container">
//           <LogoutConfirmationPopup
//             onCancel={handleCancelLogout}
//             onLogout={handleConfirmLogout}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Sidebar;
import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import './Sidebar.css';

function LogoutPopup({ onConfirm, onCancel }) {
  return (
    <div className="popup">
      <div className="popup_content">
        <h4>Are you sure you want to log out?</h4>
        <div className="popup_buttons">
          <button className="popup_button" onClick={onConfirm}>OK</button>
          <button className="popup_button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
function Sidebardoc() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (event) => {
    const navLinks = document.querySelectorAll('.nav_link');
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });

    const clickedLink = event.currentTarget;
    clickedLink.classList.add('active');
  };

  const handleLogout = () => {
    setShowPopup(true);
  };

  const handleLogoutConfirm = () => {
    window.location.href = '/home';
  };

  const handleLogoutCancel = () => {
    setShowPopup(false);
  };

  const handleLogoClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="sidebar">
      <header className="header-sidebar" id="header">
        <div className="header_toggle">
          <i
            className={`bx ${isNavOpen ? 'bx-x' : 'bx-menu'}`}
            onClick={toggleNavbar}
            id="header-toggle"
          ></i>
        </div>
      </header>
      <div className={`l-navbar ${isNavOpen ? 'show' : ''}`} id="nav-bar">
        <nav className="nav-sidebar">
          <div>
            <a href="#" className="nav_logo" onClick={handleLogoClick}>
              <img className="navlogo-sidebar" src={logo} alt="Logo" />
              <span className="nav_logo-name">
                FairMed <i className="bx bx-x fs-3"></i>
              </span>
            </a>
            <div className="nav_list">
              <a href="/patient-dashboard" className="nav_link" onClick={handleLinkClick}>
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </a>
              <a href="/update-medical-record" className="nav_link " onClick={handleLinkClick}>
                <i className="bx bx-id-card nav_icon"></i>
                <span className="nav_name"> Update Record</span>
              </a>
              <a href="#" className="nav_link " onClick={handleLinkClick}>
                <i className="bx bx bx-star"></i>
                <span className="nav_name">My Ratings</span>
              </a>
              <a href="#" className="nav_link " onClick={handleLinkClick}>
                <i className="bx bx bx-star"></i>
                <span className="nav_name">My Reviews</span>
              </a>
              <a href="/support-doctor" className="nav_link " onClick={handleLinkClick}>
                <i className="bx bx-question-mark nav_icon"></i>
                <span className="nav_name">Support</span>
              </a>
            </div>
          </div>
          <a href="#" className="nav_link" onClick={handleLogout}>
            <i className="bx bx-log-out nav_icon text-danger"></i>
            <span className="nav_name text-danger ">Log Out</span>
          </a>
        </nav>
      </div>
      {showPopup && (
        <LogoutPopup onConfirm={handleLogoutConfirm} onCancel={handleLogoutCancel} />
      )}
    </div>
  );
}


export default Sidebardoc
