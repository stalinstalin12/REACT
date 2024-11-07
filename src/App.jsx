import Example from "./components/Example";
import ClassComponent from "./components/ClassComponent";
import ParentComp from "./components/ParentComp";
import Login from "./components/conditional_components/Login";
import Index from "./components/routers/Index";

import ConvertedText from "./components/higherOrderComponent/HigherOrder";
import UseEffectComponent from "./components/hooks/useEffect";
import UseEffectComponent1 from "./components/hooks/useEffect1";
import UseCallbackComp from "./components/hooks/useCallBack";
import UserList from "./components/hooks/useMemo";
function App() {
  

  return (
    <>
       {/* <Example name={'Rahul'}/>
      <Example name={'Akshay'}/>
      <Example name={'Neeraja'}/>
      <Example name={'Niyatha'}/>

      <ClassComponent age={12} /> 

        <ParentComp/>
        <ParentComp/> 
        <Login />*/}
       
        {/* <Index /> */}
        {/* <ConvertedText text={"STALIN"}/> */}

        {/* <UseEffectComponent1/> */}

        {/* <UseCallbackComp/> */}
        <UserList/>
      
    </>
  )
}

export default App
