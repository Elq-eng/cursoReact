import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { HeroesRoutes } from "../heroes"

export const AppRouter = () => {
  return (
    <>
      <Routes>        
        <Route path="login" element={ <LoginPage/>}></Route>
        <Route path="/*" element={ <HeroesRoutes/> }></Route> 
      </Routes>
    </>
  )
}
