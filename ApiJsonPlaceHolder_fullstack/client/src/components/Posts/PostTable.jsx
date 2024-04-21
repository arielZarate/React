import React,{useEffect, useState} from 'react'
import Navbar from '../NavBar/Navbar';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {getPosts ,deletePost, loadProps} from '../../Redux/action';

import Loading from '../Loading/Loading'



function PostTable() {
let dispatch =useDispatch(); //DISPARA ACCIONES EJECUTA ACCIONES
const allPosts =useSelector((state)=>state.posts);//TRAE EL ESTADO DE LA TIENDA




//MONTANDO EN COMPONENTE --CICLO DE VIDA DEL COMPONENTE
  useEffect(()=>{ 
  dispatch(getPosts())
},[dispatch]);
 

const handlerReset=()=>{

alert("Ha reseteado la pagina")
dispatch( getPosts());

}


const handlerPropsUpdate=(title,body,userId)=>{
// console.log(title,body,userId);
dispatch(loadProps(title,body,userId))

}




 const handlerDelete=(id)=>{
   //console.log(id)

  dispatch(deletePost(id));
   alert("El objeto ha sido Eliminado")
  
   history.push('/PostList'); 
   
 }

return (
  <> 
 <Navbar/>

<div className='container mt-5 '>
<h2 className='d-flex justify-content-center bg-dark text-white-50'>Listado de Posts</h2>

 

<div className='container-sm'>

 <div className=' d-flex justify-content-end '>
 <div className=''>
 <button type="button" className="btn btn-secondary btn-lg" onClick={()=>handlerReset()} >Reset</button>
 </div>
 <Link className='btn-lg' to={`/PostCreateUpdate/`}>
  <button type="button" className="btn btn-primary btn-lg">Crear Post</button>
 </Link>
</div>


<table className="table table-hover table-striped  table-bordered table-dark">
 <thead>
   <tr>

     {/* <th scope="col">userId</th> */}
     <th scope="col">Title</th>
     <th scope="col">Body</th>
      <th scope="col">Created In DB</th>
     <th scope="col">Action</th>
      <th scope="col">Detail</th> 
   </tr>
 </thead>
 <tbody>
   

   { allPosts?  
    
   allPosts.map(e=>{
     return(
       <tr key={e.id}>
      {/*  <th scope="row">{e.userId}</th> */}
       <td>{e.title}</td>
       <td>{e.body}</td>
        <td >{e.createInDB === true?"true":"false"}</td> 
        <td>
        <Link to={`./PostCreateUpdate/${e.id}`}> 

                                                           {/* Si hace click aca le mando el titulo , body y el userId */}
        <button className='btn btn-warning btn-md'   onClick={()=>handlerPropsUpdate(e.title,e.body,e.userId)}>Editar</button>
        </Link>
       
       <Link to={`/PostList`}>  
        <button className='btn btn-danger btn-md '  onClick={()=>handlerDelete(e.id)} >Delete</button>
          </Link>  
         </td> 
         
         <td>
         <Link to={`/PostDetail/${e.id}`}>
         <button type='button' className='btn btn-info btn-lg'>Ver Detail</button>
         </Link>
         </td>
      
        </tr>

     )
   } ): <Loading/>
 }
 </tbody>
</table>

</div>


   </div>{/* Fin del div */}

</>

 )

        
      }

export default PostTable




