/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Search } from "../../../src/heroes/pages/Search";

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));


describe('Prueba del search', () => {

  beforeEach(()=> jest.clearAllMocks())
  
  test('debe de mostrar a batman y el input con el valir del queryString', () => { 

    render(
      <MemoryRouter initialEntries={['/search?q=batman']}> <Search />

      </MemoryRouter>
    )


    const input = screen.getByRole('textbox')
    expect( input.value ).toBe('batman')
    const img = screen.getByRole('img')
    expect( img.src ).toContain("/assets/heroes/heroes/dc-batman.jpg")


    const alert = screen.getByLabelText('alert-danger')
    expect( alert.style.display ).toBe('none')
  })

  test('debe de mostrar un error si no se encuentra el heroe (batman123) ', () => { 

    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}> 
        <Search />
      </MemoryRouter>
    )

    const alert = screen.getByLabelText('alert-danger')
    expect( alert.style.display ).toBe('')
  })

  test('debe de llamar el navigate a la pantalla nueva', () => { 

    render(
      <MemoryRouter initialEntries={['/search']}> 
        <Search />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox');
    fireEvent.change( input, { target: {name:'searchText', value:'superman'}} )
    
    const form = screen.getByLabelText('form')
    fireEvent.submit( form )

    expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman')
    
  })


});
