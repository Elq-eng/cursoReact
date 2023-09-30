
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/thunks";

const formData = {
  email:'',
  password:'',
  displayName:''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'el correo debe tener un @'],
  password: [ (value) => value.length >= 6, 'El password debe tener mas de 6 letras'],
  displayName: [ (value) => value.length >= 1, 'El displayName debe tener mas de 1 letras'],
}

export const RegisterPages = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( ()=> status === 'checking', [ status ])



  const { displayName, email, password, onInputChange,formState, displayNameValid, emailValid, passwordValid, isFormValid } = useForm(formData,formValidations);


  const onSubmit = ( e ) =>{
    e.preventDefault()
    setFormSubmitted(true)

    if( !isFormValid) return
    dispatch( startCreatingUserWithEmailPassword(formState) )
  }


  return (
    <AuthLayout title="Crear cuenta">
      
      <form onSubmit={ onSubmit }
       className="animate__animated animate__fadeIn animate__faster" 
      >

      
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Elquin Cascavita"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={onInputChange}
              error = { !!displayNameValid && formSubmitted}
              helperText= { displayNameValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={onInputChange}
              error = { !!emailValid && formSubmitted }
              helperText= { emailValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              placeholder="Contrasena"
              fullWidth
              name="password"
              value={ password }
              onChange={onInputChange}
              error = { !!passwordValid && formSubmitted }
              helperText= { passwordValid}
            ></TextField>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 3, mt: 1 }}>
          <Grid item xs={12} display={ !!errorMessage ? '': 'none'}>
            <Alert severity="error">{ errorMessage }</Alert>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button 
            disabled={isCheckingAuthentication }
            type="submit" variant="contained" fullWidth>
              Crear cuenta
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{mr:1}}> Ya tienes cuenta?</Typography>
            
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
              
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
