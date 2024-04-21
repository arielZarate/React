import React,{useEffect} from 'react'
import Navbar from '../NavBar/Navbar';
import { Link, useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {detailPost} from '../../Redux/action';


function PostDetail() {

  //PARA USAR POR PROPS
 // console.log(props.match.params.id) 
  let {id}=useParams();
 const  dispatch =useDispatch(); //DISPARA ACCIONES EJECUTA ACCIONES
  const onePost =useSelector((state)=>state.detail);//TRAE EL ESTADO DE LA TIENDA
 


 useEffect(()=>{
dispatch(detailPost(id))
},[dispatch,id])
 
  return (
 
    <div key={onePost.id}>
         < Navbar/>

      <div className='d-flex justify-content-center  mt-5'> 

              
        {
           onePost?
            
           <div className=" card w-75 mb-3">

             <h2 className='text-center'>Detalle de Post</h2>
           <div className="card-body text-center">
             <h2 className="card-title  "><span >{onePost.userId}</span></h2>
             <p>{onePost.id}</p>  
             <h4 className="card-title">{onePost.title}</h4>
             <p className="card-text">{onePost.body}</p>
             <p>Create in DB: {onePost.createInDB===true?"True":"False"} </p>
             <a href="https://jsonplaceholder.typicode.com/" class="btn btn-primary" target="_blank">ir a JsonPlaceholder</a>
           
           </div>
         </div>
         : <div>
             <h3 className='text-primary'>Loading...</h3>
           </div>
        }
    </div>

  
    </div>
  )
}

export default PostDetail



/* 

    <div className='container '>

        <h1>Detalle de Post</h1>
      <div className="card" style="width: 18rem;">
    <div className="card-body"  >
    <h4 className="card-title"></h4>
      <h5 className="card-subtitle mb-2 text-muted"></h5>
      <p>{}</p>
      <p class="card-text"></p>

    </div>
  </div>
      </div>

*/