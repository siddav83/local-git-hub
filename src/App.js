import React, { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Navbar } from './components';
import { FourOhFour, Home, Repo, User, UserRepos} from './pages'
import './styles/App.css';

function App() {
const [userName, setUsername] = useState("");
const [searchTerm,setSearchTerm] = useState("");
const [UserData,setUserData] = useState([]);
const [repoData,setRepoData] = useState([]);

useEffect(() => {
  
    const getData = async () => {
 
            const response = await fetch(`https://api.github.com/users/${searchTerm}`)

            const data = await response.json()

            setUserData(data);
    
            }
              getData().catch(console.error)


    }, [searchTerm])

    useEffect(() => {
  
        const getRepoData = async () => {
     
                const response = await fetch(`https://api.github.com/users/${searchTerm}/repos`)
    
                const data = await response.json()
    
           setRepoData(data);
        
                }
                getRepoData().catch(console.error)
    
    
        }, [searchTerm])

  return (
      <div id="app">
          <main>
              <Routes>
                  <Route path="/" element={<Home userName={userName} setUsername={setUsername} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setUserData={setUserData} userData={UserData} setRepoData={setRepoData} repoData={repoData}/>} />
                  <Route path="/user" element={<User navbar={Navbar} userData={UserData} repoData={repoData} />} />
                  <Route path="/user/repos" element={<UserRepos/>} />
                  <Route path="/user/repos/repo" element={<Repo/>} />
                  <Route path="*" element={<FourOhFour/>} />
              </Routes>
          </main>
      </div>
  )

}


export default App;
