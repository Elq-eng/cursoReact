import { fileUpload } from "../../src/helpers/fileUpload";



describe('Pruebas en fileupload', () => {
  

  test('debe subir el archivo correctamente a cloundinary',async() => {

      const imageUrl = 'https://images.unsplash.com/photo-1560813487-803cbe32d18b?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

      const resp = await fetch( imageUrl )
      const blob = resp.blob()
      const file = new File([blob],'foto.jpg')
      console.log(file)
      const url = await fileUpload( file )
      expect( typeof url ).toBe('string')

    })
});
