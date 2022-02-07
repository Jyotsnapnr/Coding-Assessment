import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return <div className="container-fluid text-center"> 
      <nav className="navbar-inverse navbar-brand navbar-heading bg-primary">
      
         <Link to="/"><h1>BIS Safety Software</h1></Link>
      </nav>
  </div>;
}

export default Navbar;