type Personprops = {
    name:{
        firstname:string,
        lastname:string
    }
}

export const Person = ({name}:Personprops) => {
  return (
    <><span>{name.firstname},{name.lastname}</span></>
  )
}
