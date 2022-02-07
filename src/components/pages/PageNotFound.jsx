import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
  
// page to show if any 404 errors

const PageNotFound= () =>{
  <div>
        <Navbar />
        <div className="md-col-12 text-center">
            <h2> Page Not Found</h2>
            <h2> 404 Error</h2>
        </div>
        <Footer />
    </div>
}
  
export default PageNotFound;