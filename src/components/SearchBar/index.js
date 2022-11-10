import React from 'react'
import { Link } from 'react-router-dom';

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
     <Link to="/user"> <button>SEARCH</button></Link>
     
    </form>
    // <form>
    //     <label htmlFor='username'>Username</label>
    //       <input id="username" 
    //       value={searchTerm} 
    //       onChange={handleInputText} 
    //       type="text" 
    //       className="user-name-input" 
    //     />
    //     <button role="button" onClick={handleSubmit} className="search-button" type="submit">
    //         <i className="fas fa-plus-square"></i>Submit</button>
    // </form>
  )
}
