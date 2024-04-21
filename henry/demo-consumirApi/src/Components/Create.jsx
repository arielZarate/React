import React, { useState } from "react";
import { connect } from "react-redux";


const Create =(props)=>{ 

    const [form,setForm] = useState({
        name:"",
        username:"",
        email:""
    }) 

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

        return(
            <>
                <form>
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                    <input type="text" name="username" id="" />
                    <input type="text" name="email" id="" />
                </form>
                
            </>
        )
    
}



// export default connect(mapStateToProps,mapDispatchToProps)(Create)