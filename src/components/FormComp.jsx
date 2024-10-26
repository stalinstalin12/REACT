import{Fragment, useState} from "react"

export default function FormComp({onSubmit}){
    console.log("form component rendering");

    const[inputData,setInputData]=useState({
        name:'',
        email:'',
        place:'',
        pincode:''
    });

    const handleInputChange=(e)=>{
        console.log("value :",e.target.value);
        // setInputData(e.target.value);

        if(e.target.name==='name'){
            console.log("name",e.target.value);

            setInputData({
                ...inputData,
                name:e.target.value
            })
        }
        if(e.target.name==='email'){
            console.log("email",e.target.value);

            setInputData({
                ...inputData,
                email:e.target.value
            })
        }
        if(e.target.name==='place'){
            console.log("place",e.target.value);

            setInputData({
                ...inputData,
                place:e.target.value
            })
        }
        if(e.target.name==='pincode'){
            console.log("pincode",e.target.value);

            setInputData({
                ...inputData,
                pincode:e.target.value
            })
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form submitted..");
        onSubmit(inputData);
    }
    return(
         <Fragment>
        <form onSubmit={handleSubmit}>
            <div className="inputs">
            <input type="text" name="name"onChange={handleInputChange} placeholder="NAME" /><br />
            <input type="email" name="email"onChange={handleInputChange} placeholder="EMAIL"/><br />
            <input type="text" name="place"onChange={handleInputChange} placeholder="PLACE"/><br />
            <input type="number" name="pincode"onChange={handleInputChange} placeholder="PINCODE"/><br />       
            <button type="submit">submit</button></div>
        </form>
        </Fragment>
        )     
}