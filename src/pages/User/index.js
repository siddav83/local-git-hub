import React from 'react';
import NavBar from '../../components/Navbar';

const User = ({userData, repoData}) => {
    console.log(repoData)

    const {avatar_url,bio,followers,following,location,name,login} = userData;
 
  
    return (
        <div>
            <NavBar />
             <div className="container">
            <div className="card">
                <div className="image"><img src={avatar_url} alt="" /></div>
                <div className="name-container">
                    <p className="card-name">{name}</p>
                    <p className="card-handle">{login}</p>
                    <button>follow</button>
                    <p>{bio}</p>
                    <div className="follower">
                        <div><img src="" alt="" /><span>{followers}</span> followers</div>
                        <div><img src="" alt="" /><span>{following}</span> following</div>
                    </div>
                    <div className="location"><img src="" alt="" />{location}</div>
                    <div className="twitterHandle"><img src="" alt="" />@daviedawie</div>
                    <div className="achieve-cont">
                        <h5>Achievements</h5>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    </div>
            </div> 
                
                   
                    <h5 className="header">Popular Repos</h5>
                    <div className="container-card">
                    {repoData.length ? repoData.map((ele) => {
                        //    const { fullname, fork,fork_counts,language } = repoData;
                         return <div className="repo-card">
                                <div className="title">{ele}</div>
                                {/* <div className="public?">{fork}</div>
                                <div className="desc">{fork_counts}</div>
                                <div className="lang">{language}</div><img src="" alt="" /> */}
                    </div>
                    }): undefined}
                  
                      
                    </div>
        </div>
        </div>
    );
}

export default User;
