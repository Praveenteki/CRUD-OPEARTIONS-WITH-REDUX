import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';

function Update() {
    const {id} = useParams();
    const users  = useSelector((state) =>state.users);
    const existingUser = users.filter(f => f.id === id)
    let data = existingUser[0]
    let name = data.name;
    let email = data.email;
    const [upname ,setUpName] = useState(name)
    const [upemail ,setUpEmail] = useState(email)
    
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
     const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser( {
            id: id , 
            name: upname,
            email: upemail,
            version: users[users.length-1].version+0.2,
     }))
     navigate('/')
    }
  return (
    <div>
        <h3>update User</h3>
        <form onSubmit={handleUpdate}>
            <div>
                <label htmlFor = 'name'>Name : </label>
               <input type = "text" name = {upname} placeholder='enter name' value={upname}
               onChange={e => setUpName( e.target.value)}/>
            </div>
            
            <div>
                <label htmlFor = 'email'>Email : </label>
               <input type = "email" email  = {upemail} placeholder='enter email' value ={upemail}
               onChange = {e => setUpEmail(e.target.value)}/>
            </div>
            <button className='btn btn-primary my-3'>update</button>
            <Link to = "/" className='btn btn-success my-3'>Back</Link>
        
        </form>
    </div>
  )
}

export default Update