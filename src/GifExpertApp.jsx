import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GifGrid } from "./GifGrid"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto', 'Dragon Ball'])

  const onSearchCategory = (category) => {
    if (categories.includes(category)) return
    setCategories([...categories, category])
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onSearchCategory={onSearchCategory}/>
      {
        categories.map(category => (
          <GifGrid key={category} category={category}/>
        ))
      }
    </>
  )
}
