import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";


describe('05-funciones test', () => {
  test('05- getUSer las dos funciones exportadas', () => {


    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser()
    console.log(user)
    expect(user).toStrictEqual(testUser)
  })


  test('05-getUsuario-activo',()=>{
    
    // variable enviada
    const name = 'Elquin'
    //variable que llega por resp
    const userTest = getUsuarioActivo( name )


    //variable de comprobacion
    console.log(userTest)

    const isValide = {
      uid:'ABC567',
      username: name
    }

    expect(userTest.username).toBe(name)
    expect(userTest).toStrictEqual( isValide )

  })


});
