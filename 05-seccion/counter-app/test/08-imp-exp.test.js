import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";
import heroes from "../src/data/heroes";


describe('pruebas en 08-imp', () => {
  

  test('getHeroeById retornar un heroe por ID ',()=>{


    const id = 1
    const hero = getHeroeById( id )
    expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })


  test('getHeroeById retornar undefine si no existe',()=>{


    const id = 100
    const hero = getHeroeById( id )
    expect( hero ).toBeFalsy()
  })

  test('should be three of lenght the array', () => { 

    const isFilter = 'DC'

    const heroesDC = getHeroesByOwner( isFilter )
    console.log( heroesDC.length )

    expect( heroesDC.length ).toEqual( 3 )
    expect( heroesDC ).toEqual( heroes.filter( (heroe) => heroe.owner === isFilter ) )


   })



});
