import {createStore}from 'redux';


//CREANDO EL STORE (ALMACEN DE TODOS LOS ESTADOS)
const store=createStore(reducer);


//EL STORE TIENE EL ESTADO GLOBAL Y UN INITIALSTATE
const initialState={
    owner:'FT-31C',
    counter:0,
    array:[1,2,3]
}


//el store recibe un reducer : que es una funcion pura que tiene el estado incial y una acccion 


function reducer(state=initialState,action)
{
  switch (action.type) {
    case 'INCREMENTAR':
        return {
        { 
         ...state,
         counter:state.counter+1,
         array:[...state.array,`TUKI-${state.counter+1}`]

        }
        }
        break;
  
  case:'DECREMENTAR' :
  return (
    {
        ...state,
        counter:state.counter -1,
        array:[...state.array,`TUKI-${state.counter-1}`]
    }
  )

    default:
        
  }

}





//function que al hacer click incrementa o decrementa
//estas funciones al hacer click ejecutan eventos y esos mandan un dispatch
//EL DISPATCH CAMBIA EL ESTADO GRAL DEL STORE 
//TIENE UN TYPE 
//Y UNA ACCION QUE EJECUTARA EN EL REDUCR
function Wallet()
{

    return (

        <div> 
             <button onClick={()=>dispatch(type:'AUMENTAR')}> incrementar</button>
            <button onClick={()=>dispatch(type:'DECREMENTAR')}> decrementar</button>
        </div>

    )
}