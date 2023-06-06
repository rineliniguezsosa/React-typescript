import { Button } from "./components/Button";
import { Person } from "./components/Person"
import { PersonList } from './components/PersonList';
import { Saludar } from "./components/Saludar"

export type HeroListype = {
  id:number,
  first:string,
  last:string
}

function App() {
  const Hero ={
    firstname:'Bruce',
    lastname:'wayne'
  }
const Herolist:HeroListype[] = [
    {
      id:0,
      first:'bruce',
      last:'wayne',
    },
    {
      id:1,
      first:'clark',
      last:'kent',
    },
    {
      id:2,
      first:'princess',
      last:'diana'
    }
  ]
  return (
    <>
      <h1>React typescript</h1>

      <Saludar name="rinel" message={10}/>
      <br></br>
      <Person name={Hero}/>
      <br></br>
      <PersonList hero={Herolist}/>

      <Button handleClick={(event)=> console.log('botón seleccionado')}></Button>
    </>
  )
}

export default App
