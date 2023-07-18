


describe('Prueba en el componenete <Demo >', () => {
  
  
  test('esta prueba no debe fallar', ()=>{
  
    //1.inicializacion
    const message1 = 'Hola mundo'

    //2/ estimulo
    const message2 = message1.trim()
  
  
    // 3. observar el compaortamiento
    expect( message2 ).toBe( message1)
  
  })
});
