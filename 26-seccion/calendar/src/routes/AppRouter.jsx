/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPages } from "../auth"
import { CalendarPage } from "../calendar";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";

export const AppRouter = () => {
  
  // const authStatus = 'not-authenticated';
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, []);


  if ( status==='checking'){
    return (
      <h3>Cargando...</h3>
    )
  }
  
  return (   
    <Routes>
      {
        ( status === 'not-authenticated')
          ?(
            <>
              <Route path="/auth/*" element={ <LoginPages />}/>
              <Route path="/*" element={ <Navigate to="/auth/login"/>}></Route>
            </>
            )
          :(
            <>
              <Route path="/" element={ <CalendarPage />}/>
              <Route path="/*" element={ <Navigate to="/"/>}></Route>
            </>
          )
      }
    </Routes>

  )
}
