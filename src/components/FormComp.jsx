import{useState} from "react"

export default function FormComp({onSubmit}){
    console.log("form component rendering");

    const[inputData,setInputData]=useState(null);

    const handleInputChange=(e)=>{
        console.log("value :",e.target.value);
        setInputData(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form submitted..");
        onSubmit(inputData);
    }
    return(
         <>
        <form onSubmit={handleSubmit}>
            <input type="text"onChange={handleInputChange} />
            <button type="submit">submit</button>
        </form>
        </>
        )     
}