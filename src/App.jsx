import Example from "./components/Example";
import ClassComponent from "./components/ClassComponent";
import ParentComp from "./components/ParentComp";

function App() {
  

  return (
    <>
      <Example name={'Rahul'}/>
      <Example name={'Akshay'}/>
      <Example name={'Neeraja'}/>
      <Example name={'Niyatha'}/>

      <ClassComponent age={12} />

        <ParentComp/>

      
    </>
  )
}

export default App
