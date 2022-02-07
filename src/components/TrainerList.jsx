import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import load from '../images/image1.gif';

function TrainerList ({courses})  {

  return (
     <>
     {/* search form */}
     <form className="form-horizontal container">
       <input 
          className="form-control"
          type="text"
          placeholder="Search"
        />
     </form>

        {courses === undefined ? 
        <div className="col-md-12 text-center">
          <img src={load} alt="Loading.." 
          className="img-responsive img-centered"/>
         </div> :
        <div className='mt-md-4 col-md-12 text-center'>
          <div className="table-responsive">
             <table className="table table-bordered table-hover">
            <thead className="table-active">
                <tr>
                    <th scope="col" >Certificate</th>
                    <th scope="col">Passmarks</th>
                    <th scope="col">Class Name</th>
                    <th scope="col">Marks</th>
                    <th scope="col">Class Id</th>
                    <th scope="col">Class code</th>
                </tr>
            </thead>
           <tbody>
              {courses.classes.map((item,index) => {
                     return (
                            <tr key={index}>
                                  <td><a href={item.certificate} target="_blank">Certificate</a></td>
                                   <td>{item.passmarks}</td>
                                  <td>{item.classname}</td>
                                  <td>{item.marks}</td>
                                   <td>{item.classid}</td>
                                   <td>{item.classcode}</td>     
                  
                             </tr>
                              );
                    })}
             </tbody>
              </table>
                <Link to="/">
                <button 
                      type='button' 
                      className='btn btn-primary justify-content-center'>Go Back
                      </button></Link>
          </div>

         </div>

        }
    </>
)
}

export default TrainerList;