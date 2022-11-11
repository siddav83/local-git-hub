import React from 'react';
import NavBar from '../../components/Navbar';
import test from './test.jpg'
import './style.css'
import follower from './follower.svg'

const User = ({userData, repoData}) => {
    console.log(repoData)

    const {avatar_url,bio,followers,following,location,name,login} = userData;
 
  
    return (
        <div>
            <div className="fake-search-bar">
            
            </div>
            <NavBar />
             <div className="container">
                 <div className="card">
                <div className="image"><img src={avatar_url ? avatar_url : test } alt="" /></div>
                <div className="name-container">
                        <p className="card-name">{name ? name : ""}</p>
                        <p className="card-handle">{login ? login : "siddav83"}</p>
                        <button className="btn-follow">follow</button>
                    </div> 
                    <div className="follower">
                        <div><img className="follower-img" src={follower} alt="" /><span>{followers ? followers : "12"}</span> followers</div>
                        <div><img src="" alt="" /><span>{following ? following : "20"}</span> following</div>
                    </div>
                    <p className="bio">{bio ? bio : "Aim to land a junior dev role by Oct 2022. Working on my fullstack skills focusing on Javascript, React, Nodejs and PSQL"}</p>
                    
                    <div className="location"><img src="" alt="" />{location}</div>
                    <div className="twitterHandle"><img src="" alt="" />@daviedawie</div>
                    <div className="achieve-cont">
                        <h5>Achievements</h5>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    </div>
           
                
            <div className="container-card">
                    <h5 className="header">Popular Repos</h5>
                    {repoData.length ? repoData.slice(0,6).map((ele) => {
                         return <div className="repo-card">
                                <div className="title">{ele.fullname}</div>
                                <div className="public?">{ele.fork}</div>
                                <div className="desc">{ele.fork_counts}</div>
                                <div className="lang">{ele.language}</div><img src="" alt="" />
                    </div>
                    }): undefined}
                     <div className="repo-card">
                                <div className="title"title>Lap_1_Project</div>
                                <div className="public">public</div>
                                <div className="desc">learning JS</div>
                                <div className="lang">Javascript</div><img src="" alt="" />
                    </div>
                    <div className="repo-card">
                                <div className="title"title>Lap_1_Project</div>
                                <div className="public">public</div>
                                <div className="desc">learning JS</div>
                                <div className="lang">Javascript</div><img src="" alt="" />
                    </div>
                    <div className="repo-card">
                                <div className="title"title>Lap_1_Project</div>
                                <div className="public">public</div>
                                <div className="desc">learning JS</div>
                                <div className="lang">Javascript</div><img src="" alt="" />
                    </div>
                    <div className="repo-card">
                                <div className="title"title>Lap_1_Project</div>
                                <div className="public">public</div>
                                <div className="desc">learning JS</div>
                                <div className="lang">Javascript</div><img src="" alt="" />
                    </div>
                    <div className="repo-card">
                                <div className="title"title>Lap_1_Project</div>
                                <div className="public">public</div>
                                <div className="desc">learning JS</div>
                                <div className="lang">Javascript</div><img src="" alt="" />
                    </div>
                    <div className="repo-card">
                                <div className="title"title>Lap_1_Project</div>
                                <div className="public">public</div>
                                <div className="desc">learning JS</div>
                                <div className="lang">Javascript</div><img src="" alt="" />
                    </div>
             
                 
                  
                      
                    </div>
        </div>
        </div>
    );
}

export default User;
