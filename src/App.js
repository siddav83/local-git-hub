import React, { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Navbar } from './components';
import { FourOhFour, Home, Repo, User, UserRepos} from './pages'
import './styles/App.css';

function App() {
const [userName, setUsername] = useState("shit");
const [searchTerm,setSearchTerm] = useState("poo");
const [data,setData] = useState([]);

useEffect(() => {
    const getData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${searchTerm}/repos`)
            const data = await response.json()
         setData(data)
        } catch (error) {
            console.error(error)
        }
    }
    getData()
    }, [searchTerm])

  return (
      <div id="app">
          <main>
              <Routes>
                  <Route path="/" element={<Home userName={userName} setUsername={setUsername} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setData={setData} />} />
                  <Route path="/user" element={<User navbar={Navbar} data={data} />} />
                  <Route path="/user/repos" element={<UserRepos/>} />
                  <Route path="/user/repos/repo" element={<Repo/>} />
                  <Route path="*" element={<FourOhFour/>} />
              </Routes>
          </main>
      </div>
  )

}

export default App;
