import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser, searchUser, viewUser } from './UserReducer';

 

function Home() {
    const users  = useSelector((state) =>state.users);
    const dispatch = useDispatch();

    const handledelete = (id) =>{
      dispatch(deleteUser({id: id}));
    }

  return (

    <div>
    
        <h2>user list </h2>
        < Link to = "/Create" className='btn btn-success m-3'>create</Link>
  <table className='table' id="myTable">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Version</th>
                    <th>actions</th>
                </tr>
              {users.map((user, index) =>  (
                <><tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.version}</td>
                  <td>
                    <Link to = {`/edit/${user.id}` }className='btn btn-primary m-1'>edit</Link>
                    <button onClick={() => handledelete(user.id)} className='btn btn-danger m-1'>delete</button>
                    <Link to = {`/view/${user.id}` } className='btn btn-success m-1'>view</Link>
                  </td>
                </tr></>
              ))}
   </table>
   
 </div>
  )
}

export default Home