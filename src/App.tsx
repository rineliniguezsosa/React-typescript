import { Person } from "./components/Person"
import { Saludar } from "./components/Saludar"


function App() {
  return (
    <>
      <h1>React typescript</h1>

      <Saludar name="rinel" message={10}/>
      <Person/>
    </>
  )
}

export default App
