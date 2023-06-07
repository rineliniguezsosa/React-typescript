import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Person } from "./components/Person"
import { PersonList } from './components/PersonList';
import { Saludar } from "./components/Saludar"
import { Text } from "./components/Text";
import { Counter } from "./hooks/Counter";
import { User } from "./hooks/User";

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

      <Input></Input>
      <Button></Button>

      <Text styles={{color:'#213547',fontWeight:"bold"}}></Text>
      <p>useState hook</p>
      <User/>
    </>
  )
}

export default App
