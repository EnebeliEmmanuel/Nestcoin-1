import React from 'react';
import './home.css';
import ai from './ai.jpg'

const Home = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Send rewards to customers with NestCoin</h1>
      <p>Batch transactions to reward loyal customers and harness the power of Web3.Transfer coins to other addresses swiftly and securely.</p>

  
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Home;