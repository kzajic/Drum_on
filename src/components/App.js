import React, { Component } from 'react';
import style from '../style.css';
import reset from '../reset.css';
import TopRow from './TopRow';
import Board from './Board';
import NextLine from './NextLineButton';
import PlayButton from './PlayButton';
import wav_boom from '../sounds/boom.wav';
import wav_clap from '../sounds/clap.wav';
import wav_hihat from '../sounds/hihat.wav';
import wav_kick from '../sounds/kick.wav';
import wav_openhat from '../sounds/openhat.wav';
import wav_ride from '../sounds/ride.wav';
import wav_snare from '../sounds/snare.wav';
import wav_tink from '../sounds/tink.wav';
import wav_tom from '../sounds/tom.wav';


const App = () => (
  <div>
    <div className="game-topnav"></div>
    <div className="game-view">
      <TopRow />
      <Board />
      <NextLine />
    </div>
    <div className="game-navigation">
      <PlayButton />
    </div>
      <audio data-key="0" src={wav_boom}></audio>
      <audio data-key="1"src={wav_clap}></audio>
      <audio data-key="2" src={wav_hihat}></audio>
      <audio data-key="3" src={wav_kick}></audio>
      <audio data-key="4" src={wav_openhat}></audio>
      <audio data-key="5" src={wav_ride}></audio>
      <audio data-key="6" src={wav_snare}></audio>
      <audio data-key="7" src={wav_tink}></audio>
      <audio data-key="8" src={wav_tom}></audio>
  </div>
)


export default App;