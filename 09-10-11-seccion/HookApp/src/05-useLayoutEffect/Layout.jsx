import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";
import { useLayoutEffect } from "react";


// todo: este useLayout se usa cuando todos los componentes se terminan de renderizar


export const Layout = () => {
  const { increment, counter } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking bad</h1>
      <hr />

      {isLoading 
        ? <LoadingQuote /> 
        : <Quote quote={quote} author={author} />}

      <button
        disabled={isLoading}
        className="btn btn-primary"
        onClick={() => increment(1)}
      >
        Next quote
      </button>
    </>
  );
};
