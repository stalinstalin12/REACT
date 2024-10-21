import Example from "./components/Example";
import ClassComponent from "./components/ClassComponent";

function App() {
  

  return (
    <>
      <Example name={'Rahul'}/>
      <Example name={'Akshay'}/>
      <Example name={'Neeraja'}/>
      <Example name={'Niyatha'}/>

      <ClassComponent age={12} />

      
    </>
  )
}

export default App
