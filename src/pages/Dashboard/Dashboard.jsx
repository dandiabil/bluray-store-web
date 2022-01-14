import React, { useEffect, useState } from 'react';
import {WelcomeImage, BoxOfficePoster, AnimationPoster} from '../../assets/index';
import { useNavigate } from 'react-router-dom'
import './Dashboard.scss';
import Button from '../../components/Button/Button';

const Dashboard = () => {

  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="welcome-section">
        <div className="welcome-wrapper">
          <p className="title">BluStore</p>
          <p className="sub">Enjoy your entertainment without worrying any connection.</p>
          <div className="browse">
            <Button label="Browse Movies" onClick={() => navigate('/catalog')}/>
          </div>
        </div>
        <div className="welcome-image">
          <img src={WelcomeImage} alt="art by https://www.vecteezy.com/free-vector/family-watching-tv" className="image" />
        </div>
      </div>
      <div className="movie-section">
        <div className="left">
          <div className="movie-wrapper">
            <div className="poster-wrapper">
              <img src={BoxOfficePoster} alt="" className="poster"/>
            </div>
            <div className="detail-wrapper">
              <p className="title">Box Office</p>
              <p className="sub">The Latest Box Office Movies</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="movie-wrapper">
            <div className="detail-wrapper">
              <p className="title">Box Office</p>
              <p className="sub">The Latest Box Office Movies</p>
            </div>
            <div className="poster-wrapper">
              <img src={BoxOfficePoster} alt="" className="poster"/>
            </div>
          </div>
        </div>
        <div className="left">
          <div className="movie-wrapper">
            <div className="poster-wrapper">
              <img src={AnimationPoster} alt="" className="poster"/>
            </div>
            <div className="detail-wrapper">
              <p className="title">Animation</p>
              <p className="sub">The Latest Animation Movies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
