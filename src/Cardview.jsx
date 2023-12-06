import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';


function Cardview() {
const {id} = useParams();
const navigate = useNavigate();
const users  = useSelector((state) =>state.users);
const existingUser = users.filter(f => f.id === id)
let data = existingUser[0]
let name = data.name;
let email = data.email;
navigate('/')

  return (<>
  
  <div class="card">
  <img src="" alt="Avatar" />
  <div class="container">
    <h4><b>Name : {name}</b></h4>
    <p>Mail : {email} </p>
  </div>
  
</div>
<Link to = "/" className='btn btn-success my-3'>Back</Link>
    </> )
}

export default Cardview




