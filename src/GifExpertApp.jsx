import { useState } from "react"
import { AddCategory } from "./AddCategory"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto', 'Dragon Ball'])

  const onAddCategory = () => {
    setCategories([...categories, 'One Punch'])
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory/>
      <button onClick={onAddCategory}>Add category</button>
      <ol>
        {
          categories.map(category => (
            <li key={category}>{category}</li>
          ))
        }
      </ol>
    </>
  )
}
