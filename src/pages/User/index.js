import React from 'react';
import NavBar from '../../components/Navbar';
import test from './test.jpg'

const User = ({data}) => {
    console.log(data, "I am in users")
    return (
        <div>
        {/* <div id="user" style={{ textAlign: "justify", padding: "5%" }}> */}
            <NavBar />
            <NavBar />
             <div className="container">
            <div className="card">
                <div className="image"><img src={test} alt="" /></div>
                <div className="name-container">
                    <p className="card-name">david siddle</p>
                    <p className="card-handle">siddav</p>
                    <button>follow</button>
                    <p>Aim to land a junior dev role by Oct 2022. Working on my fullstack skills focusing on Javascript, React, Nodejs and PSQL</p>
                    <div className="follower">
                        <div><img src="" alt="" /><span>100</span> followers</div>
                        <div><img src="" alt="" /><span>13</span> following</div>
                    </div>
                    <div className="location"><img src="" alt="" />Bali</div>
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
                        <div className="repo-card">
                            <div className="title">fp_study_notes</div>
                            <div className="public?">public</div>
                            <div className="desc">description</div>
                            <div className="lang"></div><img src="" alt="" />
                        </div>
                        <div className="repo-card">
                            <div className="title">fp_study_notes</div>
                            <div className="public?">public</div>
                            <div className="desc">description</div>
                            <div className="lang"></div><img src="" alt="" />
                        </div>
                        <div className="repo-card">
                            <div className="title">fp_study_notes</div>
                            <div className="public?">public</div>
                            <div className="desc">description</div>
                            <div className="lang"></div><img src="" alt="" />
                        </div>
                        <div className="repo-card">
                            <div className="title">fp_study_notes</div>
                            <div className="public?">public</div>
                            <div className="desc">description</div>
                            <div className="lang"></div><img src="" alt="" />
                        </div>
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
