import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'; // If you're using smooth scroll for other links
import { Link, useLocation, useNavigate } from 'react-router-dom'; // For React Router navigation
import './Navbar.css';
import logo from '../../assets/IEMCSLogo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false); // New state for blog dropdown
  const navigate = useNavigate(); // React Router's navigation hook
  const [bgColor, setBgColor] = useState(''); // Default background color
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  useEffect(() => {
    // Check if the URL starts with '/blog'
    if (location.pathname.startsWith('/blog')) {
      setBgColor('#212EA0'); // Change state to the new color
    } else {
      setBgColor("")
    }
  }, [location]);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleBlogDropdown = () => {
    setBlogDropdown(!blogDropdown);
  };

  // Function to handle navigation on category click
  const handleCategoryClick = (category) => {
    navigate(`/blog/${category}`);
    setBlogDropdown(false); // Close dropdown after click
  };

  console.log(`bg-[${bgColor}]`);

  return (
    <nav className={`my-container ${sticky ? 'dark-nav' : `bg-[${bgColor}]`}`}>
      <img src={logo} alt="logo" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='/' offset={0} duration={500}>Home</Link></li>
        <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About us</ScrollLink></li>
        <li><ScrollLink to='program' smooth={true} offset={-260} duration={500}>Service Offering</ScrollLink></li>
        <li><ScrollLink to='testimonials' smooth={true} offset={-260} duration={500}>Stakeholders</ScrollLink></li>

        {/* Blog Link with Dropdown */}
        <li className="dropdown" onMouseEnter={toggleBlogDropdown} onMouseLeave={toggleBlogDropdown}>
          <span>Blog</span>
          {blogDropdown && (
            <div className="dropdown-content">
              {/* <button onClick={() => handleCategoryClick('automation')}>Automation</button>
              <button onClick={() => handleCategoryClick('iot')}>IoT</button>
              <button onClick={() => handleCategoryClick('robotics')}>Robotics</button> */}
              <button onClick={() => handleCategoryClick('itservices1')}>DevOps</button>  
              <button onClick={() => handleCategoryClick('itservices2')}>Gen AI</button>              
            </div>
          )}
        </li>

        <li><ScrollLink to='contact' smooth={true} offset={-260} duration={500} >Contact us</ScrollLink></li>
      </ul>
      <img src={menu_icon} alt="menu icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )

}

export default Navbar;
