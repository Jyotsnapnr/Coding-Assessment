import React from 'react'

 const SingleUser = ({user, id}) => {
    
  return (
    <tr key={id}>
        <td>{user.FirstName}</td>
        <td>{user.LastName}</td>
        <td>{user.City}</td>
        <td>{user.Address}</td>
        <td>{user.Phone}</td>
        <td>{user.Email}</td>
        <td><a className="btn btn-link" href={`edit/${user.UserID}`}>Edit User</a></td>
        <td><a className="btn btn-link" href={`details/${user.UserID}`}>Courses</a></td>
        
    </tr>
  )
}

export default SingleUser;