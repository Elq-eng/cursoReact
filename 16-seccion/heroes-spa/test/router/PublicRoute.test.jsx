/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Pruebas  en el publicRoute', () => {
  
  test('debe mostrar el children si no esta autenticado', () => { 

    const contextValue = {
      logged: false
    }

    render(
    <AuthContext.Provider value={contextValue}>
      <PublicRoute>
        <h1>Ruta Publica</h1>
      </PublicRoute>
    </AuthContext.Provider>
     );

    expect( screen.getByText('Ruta Publica')).toBeTruthy()
   })

  test('debe mostrar el  navigate si no esta autenticado', () => { 

    const contextValue = {
      logged: true,
      user:{
        name: 'Strider',
        id: 'ABC'
      }
    }

    render(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="login" element={
            <PublicRoute>
              <h1>Ruta Publica</h1>
            </PublicRoute>
          }> </Route>
          <Route path="marvel" element={<h1>Bienvedio a marvel</h1>}></Route>
        </Routes>

      </MemoryRouter>
    </AuthContext.Provider>
     );
    
          expect( screen.getByText('Bienvedio a marvel')).toBeTruthy()


   })




});
