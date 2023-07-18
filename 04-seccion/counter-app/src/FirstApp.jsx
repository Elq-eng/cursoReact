// para aveces imprimir un valor tipo objecto se puede 
// encerrar en Json.stringify y una etiqueta code 
// la mejor manera de ver la variable
import PropTypes from 'prop-types'



const getResult = () =>{
  return 'Elquin Mauricio Cascavita Rios'
}

export const FirstApp = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{ getResult() }</p>
      {/* <code>{ JSON.stringify(getResult()) }</code> */}
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}


FirstApp.defaultProps = {
  title:'No hay titulo'
}





 

