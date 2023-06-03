import { Person } from "./components/Person"
import { Saludar } from "./components/Saludar"


function App() {
  const Hero ={
    firstname:'Bruce',
    lastname:'wayne'
  }
  return (
    <>
      <h1>React typescript</h1>

      <Saludar name="rinel" message={10}/>
      <Person name={Hero}/>
    </>
  )
}

export default App
