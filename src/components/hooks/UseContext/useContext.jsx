import{createContext} from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2'
const MyContext=createContext('default')

export default function UseContext(){
     
    return(
        <>
        <MyContext.Provider value='HI'>
            <Comp1 />
            <Comp2/>

        </MyContext.Provider>
        </>
    )
}
export {MyContext};