import { retornaArreglo } from "../src/base-pruebas/07-deses-arr";



describe('07-deses-arr', () => {
  
  test('debes de retornar un string ',()=>{
    const [letters, numbers] = retornaArreglo()


    expect( typeof letters).toBe('string')
    expect( typeof numbers).toBe('number')

    expect( letters ).toEqual( expect.any(String ))


  })
});
