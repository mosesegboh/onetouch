import React, {useState, useEffect} from 'react';
import './card.css';
import { getGames } from '../../services';


function sortBySortValue(array,sortValue) {
    let sortedArray = []
    switch(sortValue){
        case 'Title A-Z':
            sortedArray = array.sort((a,b)=> a.name.localeCompare(b.name) )
            console.log(sortedArray )
            break;
        case 'Title Z-A':
            sortedArray = array.sort((a,b)=>b.name.localeCompare(a.name))
            break;
        default:
            sortedArray = array

    }
    // console.log(sortedArray)

    return sortedArray;
        
    }

    function filteredgames(array,gameType){

    let filteredgames = []

    switch(gameType) {
        case 'ARCADE':
            console.log(gameType)
            filteredgames =  array.filter(item => item.type === 'Arcade')
            break;
        default:
            filteredgames = array
    }

    return filteredgames

    }

export default function Card({sortValue,gameType}) {    
    const [games,setGames] = useState([])

    useEffect( async ()=>{
    const {games} = await getGames()
    setGames(games)
    },[])



    const sortedgames = sortBySortValue(games,sortValue)
    const filtergames = filteredgames(sortedgames,gameType)

    return (
        <div className="container">
                <h1 className="category">FEATURED</h1>
                {filtergames.map(item =>(
            
                        <div key={item.name} className="card">
                            <div className="image-section">
                                <button id="try-it" className="tags">TRY IT</button>
                                <img src = {item.thumbnailUrl}/>
                            </div>
                            <div className="detail-section">
                                <div className="info">
                                    <div className="game-name">
                                        <div className="name">{item.name}</div><br></br>
                                        <span className="game-details">GAME TYPE: {item.type}<br></br>
                                        RELEASE: {item.date.slice(0, 10) }</span>
                                    </div>

                                    <div className="icons-tray">
                                        <img className="icons" src="https://www.onetouch.io/wp-content/uploads/2020/06/platform-android.svg"/>
                                        <img className="icons" src="https://www.onetouch.io/wp-content/uploads/2020/06/platform-html5.svg"/>
                                        <img className="icons" src="https://www.onetouch.io/wp-content/uploads/2020/06/platform-ios.svg"/>
                                        <img className="icons" src="https://www.onetouch.io/wp-content/uploads/2020/06/platform-mac.svg"/>
                                        <img className="icons" src="https://www.onetouch.io/wp-content/uploads/2020/06/platform-windows.svg"/>
                                    </div>

                                </div>
                                <div className="action">
                                    <button id="" className="action-button">VIEW MORE</button><br></br>
                                    <button id="try-it" className="action-button">TRY IT</button>
                                </div>
                            </div>
                        </div>
                    )
                )  
            }
            <h1 className="category">SLOT GAMES</h1>
            <h1 className="category">TABLE GAMES</h1>
            <h1 className="category">ARCADE GAMES</h1>
        </div>
    )
}
