import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector}from 'react-redux'
import Navbar from '../NavBar/Navbar'
import {createPosts,updatePosts}from '../../Redux/action' 
 import {useHistory,useParams}from 'react-router-dom' 




//==========ESTE FORMULARIO ES DINAMICO : SIRVE PARA ACTUALIZAR Y CREAR====================== 



const PostCreateUpdate = () => {
//====================================================================
const dispatch=useDispatch();

//con este useSelector  traigo los datos de las pripiedades del form update 
const loadProps=useSelector((state)=>state.props)
//console.log(loadProps)
 
//==en las versiones 5 de reacr-router-dom usar useHistory en las nuevas useNavigate
const history = useHistory(); 

//=========================================================

/* const [modoEdicion, setModoEdicion] = useState(true) */
//RECIBO EL ID POR PARAMETRO
const {id}=useParams();
  //VARIABLE DE ESTADO 

let modoEdicion=null;

//si recibo un id significa que traigo un parametro pasara a true
(id)?modoEdicion=true :modoEdicion=false;


//====================================================================

/* 
ATENCION El useState depende de la condicion de modoEdition 
si exixte un id y eso quiere decir que se va actualizar el useState se carga con los valores pasados de los props
sino quedan vacios para crear un posts


*/
const [input,setInput]=useState(

  (modoEdicion === false)?
  {title:"",
  body:"",
  userId: ""}
  :
    {title: loadProps.title,
    body:loadProps.body,
    userId: loadProps.userId}
  )




  //==================hanlders==========================
const handlerChange=(e)=>{
   //console.log(e.target.value);
setInput({
   ...input,
  [e.target.name]: e.target.value
})
}



//handlerPost

const  handlerPost=(e)=>{

/*   setTimeout(()=>{

  },2000) */
 e.preventDefault();

//le paso el objeto input que ya tiene los 3 objetos con datos previamente cargados por el onchange
 dispatch(createPosts(input));

 setInput({
title:"",
body:"",
userId:""
 })


history.push('/PostList'); 

}


//handler Update

const  handlerUpdate=(e)=>{
 e.preventDefault();

 //le paso los input que seria el body y el id recibido por parametro
 dispatch(updatePosts(input,id));

 setInput({
title:"",
body:"",
userId:""
 })


history.push('/PostList'); 

}



//RETURN 
  return (

  <div>
    <Navbar/>
        
    <div className='d-flex justify-content-center  m-5'>

    <div className='container-sm ' >
          
          {/* el titulo es igual al form si el modoEdicion es true cargara el titulo Editar Post */}
    <h4 className="d-flex justify-content-center">
             { modoEdicion===true? <span className='text-warning'>EDITAR POSTS</span> :<span className='text-primary'>CREAR POSTS</span>
              }
    </h4> 
      
        
          {/* Nuevamente condiciono si es modoEdicion===true cargo el formulario con datos
          t si es modoEdition===false o sea crear un post nuevo lo cargo vacio
          
         */}
      {

       
      modoEdicion===true?  //ternario
      
     <form  onSubmit={(e)=>handlerUpdate(e)}>

       <div className="mb-3">
       <label for="title" className="form-label">Title</label>
       <input type="text" 
        className="form-control" 
        name='title'
        id="title" 
        value={input.title}  
      onChange={(e)=>handlerChange(e)} 
       />
     </div>


     <div className="mb-3">
       <label for="body" className="form-label">Body</label>
       <textarea rows="5" 
       id="body" 
       name='body'
       className="form-control"
       value={input.body} 
       onChange={(e)=>handlerChange(e)} 
       /> 
       </div>

     <div className="mb-3">
       <label for="userId" className="form-label">UserId</label>
       <input type="number" 
       className="form-control" 
       id="userId" 
       name='userId'
       value={input.userId}  
      onChange={(e)=>handlerChange(e)} 
      />
    </div>
      <div className=' d-grid gap-2 col-6 mx-auto '>
      <button type='submit' className="btn btn-warning ">Guardar Edicion</button>
      </div> 

  </form>

    
 /* si la condicion es false del ternario */  
:

  <form   onSubmit={(e)=>handlerPost(e)}>   {/* Inicio segundo form */}

   <div className="mb-3">
   <label for="title" className="form-label">Title</label>
   <input type="text" 
    className="form-control" 
    name='title'
    id="title" 
    value={input.title}  
    onChange={(e)=>handlerChange(e)} 
   />
 </div>


 <div className="mb-3">
   <label for="body" className="form-label">Body</label>
   <textarea rows="5" 
   id="body" 
   name='body'
   className="form-control"
   value={input.body} 
   onChange={(e)=>handlerChange(e)} 
   /> 

 </div>
 <div className="mb-3">
   <label for="userId" className="form-label">UserId</label>
   <input type="number" 
   className="form-control" 
   id="userId" 
   name='userId'
   value={input.userId}  
  onChange={(e)=>handlerChange(e)} 
  />
</div>
 
 <div className=' d-grid gap-2 col-6 mx-auto '>

  <button type='submit' className="btn btn-primary ">Crear</button>
  </div> 

 </form>  
}

</div>

     
       </div>
    </div>
  )
}

export default PostCreateUpdate



