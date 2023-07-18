import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username:'Elquin',
    email:'Elquin@gmail.com',
  });
  
  const { username,email } = formState


  const onInputChange = ( { target }) =>{
    const { name ,  value } = target
    setFormState({
      ...formState,
      [ name ]: value
    })
  
  }


  useEffect(() => {
    // console.log('se llamo useEffect')
    
  }, []);

  useEffect(() => {
    console.log('cambio el username',username)
  }, [ username ]);
  
  useEffect(() => {
    // console.log('cambio el email')
  }, [ email ]);



  // TODO: 1. Cuando tiene paso por referencia esta pendiente de lo que hace esa variable 2. cuando no tiene se renderiza cada vez que cualquier componente cambia si no tiene referencia y no tiene el arreglo 3. no se vuelve a renderizar 4. si tiene el arreglo solo lo hace cuando todo el componente se renderiza 5. parte de limpieza cuando tiene el return es que muestre algo cuando desaparece el componente 

  return (
    <>
      <h1> Formulario Simple </h1>
      <hr />
      <input 
        type="text"
        className="form-control"
        placeholder="Usename"
        name="username"
        value={username}
        onChange={ onInputChange }
    />


      <input 
        type="email"
        className="form-control mt-2"
        placeholder="fernando@gmail.com"
        name="email"
        value={email}
        onChange={ onInputChange }

        />

      { 
        (username === 'Stride2') && <Message></Message> 
      }
      


    </>
  )
}
