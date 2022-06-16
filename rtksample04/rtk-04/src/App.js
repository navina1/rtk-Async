
import './App.css';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {addUser} from './features/userSlice';
import { deleteUser } from './features/userSlice';
import { updateUsername } from './features/userSlice';
import { useState } from 'react';

function App() {
  const userList=useSelector((state)=>state.user.value);
  const dispatch=useDispatch();
  console.log(userList);
  const [name,setName]=useState("");
  const [username,setUserName]=useState("");
  const [newUserName,setNewUserName]=useState("");
  return (
    <div className="App">
      <div className="addUser">
          <input type="text" placeholder="Name..." onChange={(event)=>{setName(event.target.value)}}/>
          <input type="text" placeholder="Username..." onChange={(event)=>{setUserName(event.target.value)}}/>
          <button onClick={()=>dispatch(addUser({id:userList[userList.length-1].id +1,name,username}))}>Add User</button>
      </div>
    
      {userList.map((user)=>{
        return(<div className="displayUsers">
                  <h1>{user.name}</h1>
                  <h1>{user.username}</h1>
                  <input type="text" placeholder='New username' onChange={(event)=>setNewUserName(event.target.value)}/>
                  <button onClick={()=>dispatch(updateUsername({id:user.id,username:newUserName}))}>Update Username</button>
                  <button onClick={()=>dispatch(deleteUser({id:user.id}))}>Delete User</button>
              </div>)
           
           
      })}
      
    </div>
  );
}

export default App;
