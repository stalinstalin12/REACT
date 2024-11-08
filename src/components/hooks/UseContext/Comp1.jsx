import {MyContext} from './useContext'
import {useContext} from 'react';

export default function Comp1(){
    const contextValue=useContext(MyContext);

    return(
        <>
        <h1>ContextValue:{contextValue}</h1>
        </>
    )
}