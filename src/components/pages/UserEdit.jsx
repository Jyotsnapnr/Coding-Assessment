import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import FormTable from '../FormTable';
import useStore from '../../app/store';
import { useParams} from 'react-router-dom';
import load from '../../images/image1.gif';

function UserEdit () {

  let params = useParams();
const {users} = useStore();

//Edit form render

  return (
      <div>
          <Navbar />
          <div className="container">
          <h2 className='col-md-12 text-center mt-md-4'>Edit User</h2>
         <hr />
          {users === undefined ? 
         <div className="col-md-12 text-center"><img src={load} alt="Loading.." className="img-responsive img-centered"/> </div> :
          users.map((user,index) => {
            if (parseInt(user.UserID) === parseInt(params.userId)){
                return (
                    <FormTable user={user} key={index} />
                )
            }
            return null
        })}
        </div>
        <div className="container-fluid">
            <Footer />
</div>
      </div>
  )
}

export default UserEdit;