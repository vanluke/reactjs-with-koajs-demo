import '!style!css!sass!./_home.scss';
import React from 'react';

const HomePage = () => {
  return <div className="site__homepage">
        <video autoPlay loop>
            <source src="./../../assets/undo.mp4" type="video/mp4" />
        </video>
  </div>
}
export default HomePage;
