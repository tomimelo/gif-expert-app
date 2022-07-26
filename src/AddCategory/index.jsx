import { useState } from "react"

export const AddCategory = ({onSearchCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim() === '') return
    onSearchCategory(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Search gifs..." value={inputValue} onChange={onChange}/>
    </form>
  )
}
