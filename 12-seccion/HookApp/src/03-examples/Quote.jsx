import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ quote, author}) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({ with:0, height: 0});


  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect()
    setBoxSize({ height, width })
  
  
  }, [quote])


  return (
    <>
      <blockquote className="blocquote text-end"
        style={{ display: 'flex'}}
      >
          <p ref={ pRef } className="mb-1"> { quote } </p>
          <footer className="blockquote-footer mt-4"> { author  } </footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>

    </>
  )
}
