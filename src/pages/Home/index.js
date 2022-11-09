import React from "react";
import { SearchBar } from "../../components";

const Home = ({searchTerm, setSearchTerm, searchRepos}) => {

    return (
        <div id="home" style={{ textAlign: "justify", padding: "5%" }}>
            <h2>Find a user</h2>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchRepos={searchRepos} />
        </div>
    );
}

export default Home;
