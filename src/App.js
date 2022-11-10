import React, { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Navbar } from './components';
import { FourOhFour, Home, Repo, User, UserRepos} from './pages'
import './styles/App.css';

function App() {
const [userName, setUsername] = useState("shit");
const [searchTerm,setSearchTerm] = useState("poo");
const [data,setData] = useState([]);

const getData = async () => {
    const response = await fetch(`https://api.github.com/users/${searchTerm}`)
    const data = await response.json()
    setData(data)
    console.log(data)
}

useEffect(() => {
    getData()
    console.log(data,"useeffect")
    }, [searchTerm])

  return (
      <div id="app">
          <main>
              <Routes>
                  <Route path="/" element={<Home userName={userName} setUsername={setUsername} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setData={setData} />} />
                  <Route path="/user" element={<User navbar={Navbar} />} />
                  <Route path="/user/repos" element={<UserRepos/>} />
                  <Route path="/user/repos/repo" element={<Repo/>} />
                  <Route path="*" element={<FourOhFour/>} />
              </Routes>
          </main>
      </div>
  )

}

export default App;
