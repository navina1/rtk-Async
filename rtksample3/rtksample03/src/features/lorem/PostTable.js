import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchPostAsync } from './loremSlice';
import './PostTable.css'

function PostTable() {
    const {posts}=useSelector(state=>state.data);
    // const userData = data;
    // const {id,user_id,title,body}=userData;

    
    console.log(posts)
    const dispatch=useDispatch();
  return (
    <section>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USER ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((post)=>(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.user_id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                }
            </tbody>
            
        </table>

        <button onClick={()=>dispatch(fetchPostAsync())}>Show Data</button><br></br>
 
    </section>
  )
}

export default PostTable