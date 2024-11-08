import {MyContext} from './useContext'
import {useContext} from 'react';


export default function Comp2(){
    const contextValue=useContext(MyContext);

    return(
        <>
        <h1>ContextValue:{contextValue}</h1>
        </>
    )
}