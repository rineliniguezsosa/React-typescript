type Saludarprops = {
    name:string
}

export const Saludar = ({name}:Saludarprops) => {
  return (
    <div>Bienvenido {name}</div>
  )
}
