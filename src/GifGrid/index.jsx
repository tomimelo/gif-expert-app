import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({category}) => {

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs(category).then(setGifs)
  }, [])
  

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {gifs.map(gif => (
          <li key={gif.id}>{gif.title}</li>
        ))}
      </ol>
    </>
  )
}
