/* eslint-disable no-undef */
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext} from '../../../src/auth';
import { Navbar } from '../../../src/ui/components/Navbar'
import { fireEvent, render, screen } from '@testing-library/react';

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Prueba en el Navbar', () => {
  
  const contextValue = {
    logged: true,
    user: {
        name: 'Juan Carlos'
    }}

      beforeEach(() => jest.clearAllMocks() );


      test('debe de mostrar el nombre del usuario', () => {
          
          render(
              <AuthContext.Provider value={ contextValue}>
                  <MemoryRouter>
                      <Navbar />
                  </MemoryRouter> 
              </AuthContext.Provider>
          );
          
          expect( screen.getByText('Juan Carlos') ).toBeTruthy();
          

      });

      test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {

        const onLogout = jest.fn()

          render(
              <AuthContext.Provider value={ {...contextValue, onLogout }}>
                  <MemoryRouter>
                      <Navbar />
                  </MemoryRouter> 
              </AuthContext.Provider>
          );

          const logoutBtn = screen.getByRole('button');
          fireEvent.click( logoutBtn );

          expect( onLogout ).toHaveBeenCalled()
          expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true})
      });

  
});
