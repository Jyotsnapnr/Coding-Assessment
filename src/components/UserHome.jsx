import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';
import SingleUser from './SingleUser';
import useStore from '../app/store.js';
import load from '../images/image1.gif';

 function UserHome  ()  {

         const {users, search, userArray, setUserArray} = useStore()
  
          let currentUsers;
          const [currentPage, setCurrentPage] = useState(1);  
          const [usersPerPage] = useState(10);
          const indexOfLastUser = currentPage * usersPerPage;
          const indexOfFirstUser = indexOfLastUser - usersPerPage;
          const maxPages = 10;
  

            useEffect(()=>{
                 const getUserArray = () => {
                  const newUserList = []
                   users.forEach((user) => {
                   const fullName = user.FirstName+user.LastName
             if(fullName.toLowerCase().includes(search.toLowerCase())){
              newUserList.push(user)
             }
         return null
      })

          setUserArray(newUserList)
     }
 
              if(search!== ""){
                     setCurrentPage(1)
                      getUserArray()
                   }
                },[search, setUserArray, users])


      const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
      }

      if(users !== undefined){
              if(search !== ""){
                    currentUsers = userArray.slice(indexOfFirstUser, indexOfLastUser)
    }
    else  { 
             currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
         }
  }

  return (
      <>
           {users === undefined ? 
            <div className="col-md-12 text-center">
            <img src={load} alt="Loading.." 
            className="img-responsive img-centered"/> </div>
      : 
      <div className='mt-md-4 col-md-12 text-center'>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
          <thead className="table-active">
                 <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">City</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Courses</th>
                    <th scope="col">Edit</th>
                </tr>
          </thead>
          <tbody>
              {currentUsers.map((user,index) => {
                  return <SingleUser
                                 key={index} user={user} />
              })
              }
          </tbody>
        </table>
      </div>
      {search === "" ? 
      <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} maxPages={maxPages} currentPage={currentPage}/>
      :
      <Pagination usersPerPage={usersPerPage} totalUsers={userArray.length} paginate={paginate} maxPages={maxPages} currentPage={currentPage}/>
      }
    </div>
      }
    </>
    
  )
}

export default UserHome;