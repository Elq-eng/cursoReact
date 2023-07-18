import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

  // crea kas varuiables
  const [state, setState] = useState({
    data: null,
    isLoading:true,
    hasError: null
  });
  
  // obtengo la data
  const getFetch = async() =>{

    setState({
      ...state,
      isLoading:true
    })


    const resp = await fetch(url)
    const data = await resp.json();

    console.log(data)
    setState({
      data,
      isLoading:false,
      hasError: null
    })
  }

  // utilizo el useEffect para estar pendiente de la  url 
  useEffect(() => {
    getFetch()
  }, [ url ]);
  
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
}
