import React,{useState, useEffect} from 'react'
import CardListing from './components/Card'
import Title from './components/Title'
import './css/styles.css'
import {GameRequest} from './interfaces'
import { getGames } from './services'






function App() {

  const [games,setGames] = useState<GameRequest[]>([])
  const [search, setSearch] = useState<{[key:string]:string}>({
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

  let slotGames:number=0,arcadeGames:number=0,tableGames:number = 0
 
  
  games.forEach(function (gameItem) {
    if (gameItem.type === 'slot') {
        slotGames++
    } else if ( gameItem.type === 'arcade' ){
        arcadeGames++
    } else if (gameItem.type === 'table') {
        tableGames++
    }
  });

  let gameDistribution = { 
    totalSlot: slotGames, 
    totalArcade: arcadeGames,
    totalTable: tableGames, 
 }; 

  function handleChange(event:React.MouseEvent<HTMLSelectElement>){

     const name:string = event.currentTarget.name
     const value:string = event.currentTarget.value
     const searchCopy = {...search}

  
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
