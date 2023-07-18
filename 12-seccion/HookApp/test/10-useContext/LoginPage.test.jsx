/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/10-useContext/LoginPage";
import { UserContext } from "../../src/10-useContext/context/userContext";


describe('prueba en loginPage', () => {
  
  test('debe mostrar el componente sin el usuario', () => { 

    render(
    <UserContext.Provider value= {{user:null}}>
      <LoginPage/>
    </UserContext.Provider>
    )
    
    const preTag = screen.getByLabelText('user')
    expect( preTag.innerHTML ).toBe('null')



  })

  test('debe llamar el setUser cuando se hace click en el boton', () => { 

    const setUserMock = jest.fn();

    render(<UserContext.Provider 
      value= {{user:null, setUser:setUserMock}}>
          <LoginPage/>
        </UserContext.Provider>
      )

      const button = screen.getByRole('button')

      fireEvent.click( button );

      expect( setUserMock ).toHaveBeenCalledWith({"email": "juan@google.com ", "id": 123, "name": "Juan"})



  })
});
