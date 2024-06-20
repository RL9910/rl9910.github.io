import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { TubeInsight } from './Project/TubeInsight';
import { Main } from './Main';
import { EasyJob } from './Project/EasyJob';
import { Resume } from './Resume/Resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/project/tubeinsight" element={<TubeInsight/>} />
        <Route path="/project/easyjob" element={<EasyJob/>} />
        <Route path="/resume" element={<Resume/>}/> 
      </Routes>
    </div>
  );
}

export default App;
