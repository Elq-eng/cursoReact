import { getImagen } from "../src/base-pruebas/11-async-await";


describe('Prueba en 11 asyn await', () => {
  

  test('esta funcion devuelcve una URL ', async () => { 


    const url = await getImagen()
    console.log( url )
    expect(typeof url).toBe('string')

  })
});
