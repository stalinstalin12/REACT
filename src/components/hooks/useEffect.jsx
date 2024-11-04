    import { useEffect } from "react";

    export default function UseEffectComponent(){
        console.log("component rendered..");

        useEffect(()=>{
            console.log("component has been rendered..");
        },[]);

        return(
            <>
            <h1>useEffect Component</h1>
            </>
        )

    }