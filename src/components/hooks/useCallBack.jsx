import {useCallback ,useEffect,useState} from 'react';
export default function UseCallbackComp(){
    console.log("component rendering");
    const [count,setCount]=useState(0);

    const increment=useCallback(()=>{
        setCount((prevCount)=>prevCount+1)
    });

    useEffect(()=>{
        console.log("increment recreated");
    },[increment])


    return(
        <>
        <h1>COUNT ::{count}</h1>
        <button onClick={increment}>INCREMENT</button>
        </>

    )

}
