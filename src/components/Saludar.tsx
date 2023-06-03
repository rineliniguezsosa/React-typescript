type Saludarprops = {
    name:string,
    message:number
}

export const Saludar = ({name}:Saludarprops) => {
  return (
    <>
        <span>Bienvenido {name}</span>    
    </>
  )
}
