import { useEffect } from "react"

const Ejemplo=()=>{

    const unaVariable={}

    useEffect(()=>{
        console.log("Hola. Me monté");
        return ()=>{
            console.log("Me estoy desmontando");
        }
    },[unaVariable])
}