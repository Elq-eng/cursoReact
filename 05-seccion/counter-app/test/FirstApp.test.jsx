import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en el FirstApp', () => {
  
  test('debe de hacer match con el snapshot', () => { 

    const title = 'Hola soy Goku'
    const { container } = render( <FirstApp title={title}/>)

    // expect( container ).toMatchSnapshot()
   })

   test('debe mostrar el titulo en un h1',() =>{
    
    const title = 'hola soy Goku'

    const { container, getByText, getByTestId } = render( <FirstApp title={title}/> )

    expect( getByText(title) ).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // console.log( h1.innerHTML )
    // expect(h1.innerHTML ).toContain( title )
    // expect(h1.innerHTML).toBe(title)
    expect( getByTestId('test-title').innerHTML ).toBe(title)

   })


   test('debe mostrar el subtitulo enviado por props', () => { 



    const title = 'Hola soy goku'
    const subtitle = 'este es el subtitle'
    const { getAllByText } = render( <FirstApp
      title={ title}
      subtitle={subtitle}
      
    ></FirstApp>)

    expect( getAllByText(subtitle)).toBeTruthy()

    })





});
