import React,{useState} from 'react';
import Card from './components/Card/Card';
import Title from './components/Title/Title';
import './css/styles.css';
// import {GameRequest} from './interfaces'
// import {getGames} from './services'


function App() {

  const [sortValue,setSortValue] =useState('')
  const [gameType,setGameType] =useState('')

  const handleChangeSort = (evt:any) => {setSortValue(evt.currentTarget.value)}
  const handleGameTypeChange = (evt:any) => {setGameType(evt.currentTarget.value)}
  return (
    <div className="App">
      <Title sortValue={sortValue} gameType={gameType} onchangeSort={handleChangeSort} onchangeGameType={handleGameTypeChange}/>
      <Card gameType={gameType} sortValue={sortValue} />
    </div>
  );
}

export default App;
