/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/10-useContext/HomePage";
import { UserContext } from "../../src/10-useContext/context/userContext";


describe('Pruebas en HomePage', () => {

  const user ={
    id:1,
    name: 'elquin'
  }
  

  test('should de mostrar el componente sin el usuario', () => { 

    render(
      <UserContext.Provider value={{ user:null }}>
        <HomePage/>
      </UserContext.Provider>
    
    )

    const preTag = screen.getByLabelText('user')
    expect(preTag.innerHTML).toBe('null')


  })
  test('should de mostrar el componente sin el usuario', () => { 

    render(
      <UserContext.Provider value={{ user: user.name }}>
        <HomePage/>
      </UserContext.Provider>
    
    )

    const preTag = screen.getByLabelText('user')
    expect(preTag.innerHTML).toContain( `${user.name}`)
  })
});
