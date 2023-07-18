
import { heroes } from './data/heroes'

export const App = () => {


    //variables 
    const name = 'Running'
    console.log(name)
    if (true) {
      const name = 'Pepe'
      console.log(name)
    }
    console.log( name )
    
    //Template String
    const nombreCompleto = `${name} accioon`
    
    console.log(nombreCompleto)

    function observable( name ){
      return `${name} desde la funcion `
    }

    // objetos iterables

    const persona = {
      nombre:'Bree',
      apellido: 'casas',
      edad:34
    }

    // console.table( { persona } )\
    // para crear un clon del objeto 
    const persona2 = { ...persona }
    persona2.nombre = 'pappapapa'
    console.log( persona )
    console.log( persona2)


    console.log(`esta es la funcion  ${observable( name )}` )

    // arreglos 
    const arreglo = [ 1,2,3,4 ]

    let arreglo2 = [ ...arreglo, 5 ]

    console.log( arreglo )
    console.log( arreglo2 )


    // funciones 

    const saludar = ( nombre ) => `Hola, ${ nombre} `;

    console.log( saludar( 'Vegeta' ))


    // para que una funcion retorne un objeto se pone entre parentesis
    const getUser = () => ({
      uid: '1234AD',
      username:'El papi'
    })

    console.log( getUser())

    //Tarea
    // tranformar una funcion flecha
    //tiene que retornar un objeto implicito
    // pruebas
    const getUsuarioActivo = ( nombre ) => ({
      uid:'ABC567',
      username: nombre
    })

    console.log( getUsuarioActivo('Elquin') );

    //desestructuracion 
    const personaC = {
      nombre:'elquin',
      edad: 27
     }

     const { edad , nombre } = personaC
     console.log( edad, nombre)

     // desestructuracion de funciones
     const retornaC = ( { edad , nombre } ) =>{
      console.log(edad)
     }

     retornaC( personaC )

     // desestructuracion de arreglos
     const personajes = [ 'Goku', 'Vegeta' ]
     const [ ,ppp ] = personajes
     console.log( ppp )



     const useState = ( valor ) => {
      return [ valor, ()=>{ console.log( 'Hola mundo ')}]
     }

     const [ p, setName] = useState('Goku')

     console.log(p)
     setName()


     //import export 
     console.log(heroes)

     const getHeroeId = ( id ) =>  heroes.find( heroe => heroe.id === id)

     console.log(getHeroeId(2))



     // promesas 
    const promesa = new Promise( (resolve, reject ) => {

      setTimeout(() => {
        
        const heroees = getHeroeId(2)
        resolve( heroees )
      }, 2000);
    })

    promesa.then( ( heroe ) => {
      console.log( 'heores', heroe )
    } )


    const getHeroesByAsync = ( id ) => {

      return  new Promise( (resolve, reject ) => {

        setTimeout(() => {
          
          const heroees = getHeroeId( id )
          resolve( heroees )
        }, 2000);
      })
    }

    getHeroesByAsync( 2 )
    .then( console.log )



    // fecth -------
    

  return (
    <div>Running..</div>
 )
}
