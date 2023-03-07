import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import abubakarDevLogo from './assets/abubakardev-logo.jpg';

const App = () => {
  const [input, setInput] = useState('');
  const [anagrams, setAnagrams] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: 'GET',
      url: `https://danielthepope-countdown-v1.p.rapidapi.com/solve/${input}`,
      params: { variance: '-1' },
      headers: {
        'X-RapidAPI-Key': 'a2900a56b4msh050f7bad87089c9p12cf3ajsnbb42f5181361',
        'X-RapidAPI-Host': 'danielthepope-countdown-v1.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setAnagrams(response.data);
    }).catch(function (error) {
      setAnagrams(error);
    });
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Word Generator - Word Anagram Solver</h1>
          </div>
          <div className="header-subtitle">
            <h2>Enter your letters, sip a coffee or tea and wait for your results</h2>
          </div>
        </div>
        <div className='prompt-container'>
          <form onSubmit={handleSubmit}>
            <input type="text" className='prompt-box' value={input} onChange={handleInputChange} />
            <div className="prompt-buttons">
              <a className="generate-button" type="submit" onClick={handleSubmit}>
                <div className="generate">
                  <p>Solve</p>
                </div>
              </a>
            </div>
          </form>
          {anagrams.length !== 0 ?
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              {anagrams.map((anagram) => (
                <div className="output-content">
                  <p>{anagram.word} - {anagram.length} letters</p>
                </div>
              ))}
            </div>
            :
            <div className="output">
              <div className="output-header-container">
                <div className="output-content">
                  <p>No results to display</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://abubakardev.xyz"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <img src={abubakarDevLogo} alt="abubakardev logo" />
            <p>Built by Imam Abubakar</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;
