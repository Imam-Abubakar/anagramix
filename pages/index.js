import Head from 'next/head';
import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Image from 'next/image';
import abubakarDevLogo from '../assets/abubakardev-logo.jpg';

const Home = () => {
  const [input, setInput] = useState('');
  const [anagrams, setAnagrams] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`http://www.anagramica.com/all/:${input}`);
    setAnagrams(response.data.all);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>Anagramix | Abubakardev</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Word Generator - Word Anagram Solver</h1>
          </div>
          <div className="header-subtitle">
            <h2>Enter your letters, sip a coffee or tea and wait for your results</h2>
          </div>
        </div>
        <div className='body'>
        <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Find Anagrams</button>
      </form>
      <ul>
        {anagrams.map((anagram) => (
          <li key={anagram}>{anagram}</li>
        ))}
      </ul>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://abubakardev.xyz"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={abubakarDevLogo} alt="abubakardev logo" />
            <p>Built by Imam Abubakar</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
