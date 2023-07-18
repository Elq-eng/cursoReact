import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";




describe('Inicia logs de Counter ', () => {
  
  const value = 100

  test('debe hacer match con el snapshot', () => { 

    const { container } = render(<CounterApp 
      value={value}
    ></CounterApp>)

    expect( container ).toMatchSnapshot()

   })


   test('debe de mostrar el valor inicial de 100 ', () => { 


    render(<CounterApp
      value={value}
    />)

    expect( screen.getAllByText(value) ).toBeTruthy( )


    })

    test('Debe de incremetar con el boton +1', () => { 


      render(<CounterApp
        value={value}
      />)

      fireEvent.click( screen.getByText('+1'))


      expect( screen.getByText('101')).toBeTruthy()

     })


     test('Debe de decremetar con el boton -1', () => { 


      render(<CounterApp
        value={value}
      />)

      fireEvent.click( screen.getByText('-1'))
      

      expect( screen.getByText('99')).toBeTruthy()

     })



     test('Button debe ser Reset', () => { 

      render(<CounterApp
        value={value}
      />)

      fireEvent.click( screen.getByText('+1'))
      fireEvent.click( screen.getByText('+1'))
      fireEvent.click( screen.getByText('+1'))
      fireEvent.click( screen.getByText('Reset'))

      screen.debug()

      expect( screen.getByText('100')).toBeTruthy()

      

      })








});
