import { useForm } from "../hooks/useForm";
export const FormWithCustomHook = () => {
  
  const { username, email, password, formState,onInputChange, onResetForm } = useForm({
    username:'',
    email:'',
    password:''
  })

  

  return (
    <>
      <h1> form with custom hook </h1>
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

        <input 
        type="password"
        className="form-control mt-2"
        placeholder="fernando@gmail.com"
        name="password"
        value={password}
        onChange={ onInputChange }

        />  

      <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
      


    </>
  )
}
