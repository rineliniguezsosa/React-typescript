type Personprops = {
    name:{
        firstname:string,
        lastname:string
    }
}

export const Person = ({name}:Personprops) => {
  return (
    <>Person</>
  )
}
