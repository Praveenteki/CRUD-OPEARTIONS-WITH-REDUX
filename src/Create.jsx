import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';

function Create() {
    const [name ,setName] = useState('')
    const [email ,setEmail] = useState('')
    const users  = useSelector((state) =>state.users);
    let userId = users[users.length-1].id;
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
     const handlesubmit = (event) => {
        event.preventDefault();
        dispatch(addUser( {
            id: userId.toString(),
            name: name,
            email: email,
            version: users[users.length-1].version+0.2,
        }))
        navigate('/')
     }
  return (
    <div>

        <h3>Add New User</h3>
        <form onSubmit={handlesubmit}>
            <div>
                <label htmlFor = 'name'>Name : </label>
               <input type = "text" name = {name} placeholder='enter name' 
               onChange={e => setName( e.target.value)}/>
            </div>
            
            <div>
                <label htmlFor = 'email'>Email : </label>
               <input type = "email" email  = {email} placeholder='enter email'
               onChange = {e => setEmail(e.target.value)}/>
            </div>
            <button className='btn btn-primary my-3'>submit</button>
            <Link to = "/" className='btn btn-success my-3'>Back</Link>
            {/* <link to = "/" >back</link> */}
        </form>
    </div>
  )
}

export default Create