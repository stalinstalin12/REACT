import{useState} from 'react';
import DispComp from "./DispComp";
import FormComp from "./FormComp";

export default function ParentComp(){
    console.log("parent component rendering..");
    const[dataToDisplay,setDataToDisplay]=useState("");

    const handleSubmit=(data)=>{
        setDataToDisplay(data);
    }

    return(
        <>
        <FormComp onSubmit={handleSubmit}/>
        <DispComp displayData={dataToDisplay}/>
        </>
    )
}