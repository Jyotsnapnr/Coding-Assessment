import React from 'react'
import UserHome from '../UserHome';
import Navbar from '../Navbar';
import Search from '../Search';
import Footer from '../Footer';


function UserTable() {

  // for displaying all the user 
  return (
      <div>
          <Navbar /> 
 <h2 className='col-md-12 mt-md-4 text-center'>User's List</h2>
 <hr />
 <div className='container'>
          <Search />
          <UserHome />
</div>
<div>
  <Footer />
</div>
      </div>
  )
}

export default UserTable;