import React from 'react';
import NavBar from '../../components/Navbar';
import test from './test.jpg'

const User = ({data}) => {

    const {avatar_url,bio,followers,following,location,name,login} = data;
//  data.length ? data.map((ele => console.log(ele.name))) : console.log("failed") 
  
    return (
        <div>
        {/* <div id="user" style={{ textAlign: "justify", padding: "5%" }}> */}
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
                        <div className="repo-card">
                            
                            <div className="title">fp_study_notes</div>
                            <div className="public?">public</div>
                            <div className="desc">description</div>
                            <div className="lang"></div><img src="" alt="" />
                        </div>
                    </div>
                    
                
            

        </div>
        </div>
    );
}

export default User;
