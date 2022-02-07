import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function FormTable ({user}) {

//give state to all fields
    const [firstName, setFirstName] = useState(user.FirstName);
    const [lastName, setLastName] = useState(user.LastName);
    const [address, setAddress] = useState(user.Address);
    const [phone, setPhone] = useState(user.Phone);
    const [email, setEmail] = useState(user.Email);
    const [success, setSuccess] = useState();


//making a PUT request to edit values
    const sendNewData = async () => {
        try{
            const url = 'https://pre.bistrainer.com/v1/index.cfm?action=testapi.users'
            const response = await fetch(url, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({
                    userId:user.UserID,
                    firstName:firstName,
                    lastName:lastName,
                    address:address,
                    phone:phone,
                    email:email
                })

            })
            const responseData = await response.json()
            if(responseData === true){
                setSuccess(true)
            }else{setSuccess(false)}
        }catch(err){
            setSuccess(false)
            console.log(err)
        }
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        sendNewData()
    }

  return (
    <div>
        <form onSubmit={(e)=> onSubmitHandler(e)}>
            <div className="mb-3">
                <label 
                className="form-label">First Name</label>
                <input 
                value={firstName} 
                onChange={(e)=> {setFirstName(e.target.value)}}
                 type="text" className="form-control"  required/>
            </div>
            <div className="mb-3">
                <label 
                className="form-label">Last Name</label>
                <input 
                value={lastName} 
                onChange={(e)=>{setLastName(e.target.value)}} 
                type="text" className="form-control" required/>
            </div>
            <div className="mb-3">
                <label 
                className="form-label">Email</label>
                <input value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
                type="email" className="form-control" required/>
            </div>
            <div className="mb-3">
                <label 
                className="form-label">Address</label>
                <input value={address} onChange={(e)=> setAddress(e.target.value)} 
                type="text" className="form-control" required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input 
                value={phone} onChange={(e)=> setPhone(e.target.value)} 
                type="number" 
                className="form-control" required/>
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
            <Link to="/"><button type='button' className='btn btn-primary text-center'>Go Back</button></Link>
            {success ? 
                <div 
                className='alert alert-success mt-3'>Updated Successfully
                </div>
            :
                success === false ? 
                <div className='alert alert-danger mt-3'>Please try Again
                </div>:null
            }

           

        </form>

    </div>
  )
}

export default FormTable;