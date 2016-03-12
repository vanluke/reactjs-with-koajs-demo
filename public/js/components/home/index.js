import React from 'react';
import '!style!css!sass!./_home.scss';
const HomePage = () => {
  return <div className="homepage-hero-module">
      <div className="video-container">
          <video autoPlay loop className="fillWidth">
              <source src="./../../assets/undo.mp4" type="video/mp4" />
          </video>
      </div>
  </div>
}


export default HomePage;
