import React,{useState, useEffect} from 'react'
import CardListing from './components/Card'
import Title from './components/Title'
import './css/styles.css'
import {GameRequest} from './interfaces'
import { getGames } from './services'


function App() {

  const [games,setGames] = useState<GameRequest[]>([])
  const [search, setSearch] = useState<{sortBy:string,filterBy:string}>({
    sortBy:'',
    filterBy: ''
  })

  useEffect(  ()=>{
      async function fetchGames(){
        const {games} = await getGames()
        setGames(games)
      }
    fetchGames() 
  },[])

  let slotGames:  number = 0
  let arcadeGames:  number = 0
  let tableGames: number = 0
  
  games.forEach(function (gameItem) {
    if (gameItem.type === 'slot') {
        slotGames++
    } else if ( gameItem.type === 'arcade' ){
        arcadeGames++
    } else if (gameItem.type === 'table') {
        tableGames++
    }else{}
  });

  let gameDistribution = { 
    totalSlot: slotGames, 
    totalArcade: arcadeGames,
    totalTable: tableGames, 
 }; 


  function handleChange(event:any){

     const name:string = event.currentTarget.name
     const value:string = event.currentTarget.value
     const searchCopy:{sortBy:string, filterBy:string} = {...search}

    // @ts-ignore
    searchCopy[name] = value
    setSearch(searchCopy)
  }

  return (
    <div className="App">
      <Title search={search} onChange={handleChange} totalGames={gameDistribution} />
      <CardListing search={search} />
    </div>
  );
}

export default App
