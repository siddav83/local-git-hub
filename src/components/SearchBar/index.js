import React from 'react'

export default function SearchBar({userName,setUsername, searchTerm, setSearchTerm}) {

console.log(userName,"here")
function handleInputText(e) {
  setUsername(e.target.value);
}

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(userName)
    setUsername("")
  }

  return (
    <form onClick={handleSubmit}>
      <input 
      type="text"
      name="name"
      placeholder="Username"
      value={userName}
      onChange={handleInputText}
      />
      <button >SEARCH</button>
    </form>
  )
}
