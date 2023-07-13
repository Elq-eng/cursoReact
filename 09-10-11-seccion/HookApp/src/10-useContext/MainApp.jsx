import {  Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"
import { UserProvider } from './context/UserProvider'


export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <NavBar/>
      <hr />
      <Routes> 
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="About" element={<AboutPage/>}></Route>
        <Route path="Login" element={<LoginPage/>}></Route>
        {/* <Route path="/*" element={<LoginPage/>}></Route> */}
        <Route path="/*" element={<Navigate to="/about"/>}></Route>
      </Routes>
    
    </UserProvider>
  )
}
