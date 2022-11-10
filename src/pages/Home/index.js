import React from "react";
import { SearchBar } from "../../components";

const Home = ({userName,setUsername, searchTerm, setSearchTerm}) => {

    return (
        <div id="home" style={{ textAlign: "justify", padding: "5%" }}>
            <h2>Find a user</h2>
            <SearchBar userName={userName} setUsername={setUsername} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
    );
}

export default Home;
