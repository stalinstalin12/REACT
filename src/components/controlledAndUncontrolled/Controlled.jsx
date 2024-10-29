import { useState } from "react";
 
function Controlled(){
    const[inputValue,SetInputValue]=useState('')
    const handleChange=(e)=>{
        SetInputValue(e.target.value);
    }
    const handleSubmit=()=>{
        alert(`${inputValue}`)
    }
}

export default Controlled