type Saludarprops = {
    name:string,
    message:number
}

export const Saludar = ({name,message}:Saludarprops) => {
  return (
    <>
        <span>Bienvenido {name}</span>    
    </>
  )
}
