/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/10-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";


describe('pruebas en MainApp', () => {
  

  test('should de mostrar el HomPage', () => { 

    render( 
      <MemoryRouter>
        <MainApp/>
      </MemoryRouter>
    )

    expect( screen.getByText('HomePAge')).toBeTruthy()
  })

  test('should de mostrar el HomPage', () => { 

    render( 
      <MemoryRouter initialEntries={['/login']}>
        <MainApp/>
      </MemoryRouter>
    )

    expect( screen.getByText('LoginPage')).toBeTruthy()

  })
});
