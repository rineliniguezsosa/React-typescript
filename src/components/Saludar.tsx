type Saludarprops = {
    name:string
}

export const Saludar = ({name}:Saludarprops) => {
  return (
    <>
        <span>Bienvenido {name}</span>    
    </>
  )
}
