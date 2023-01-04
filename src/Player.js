import React from 'react';
import "./Player.css";
import Body from './Body';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Player = (spotify) => {
  return (
    <div className='player'>
        <div className="palyer_body">
            <Sidebar/>
            <Body spotify={spotify} />
        </div>
        <Footer/>
    </div>
  )
}

export default Player