import React, {useState, useEffect} from 'react'
import './card.css'
import { getGames } from '../../services'
import {GameRequest} from '../../interfaces'
import PopUp from '../PopUp'

function sortBySortValue(gameList: GameRequest[] ,sortValue: string) {
    let sortedGameList = []
    switch(sortValue){
        case 'Title A-Z':
            sortedGameList = gameList.sort((a,b)=> a.name.localeCompare(b.name))
            break;
        case 'Title Z-A':
            sortedGameList = gameList.sort((a,b)=>b.name.localeCompare(a.name))
            break;
        case 'Date (Oldest)':
            sortedGameList = gameList.sort((a,b)=>a.date.localeCompare(b.date))
            break;
        case 'Date (Newest)':
            sortedGameList = gameList.sort((a,b)=>b.date.localeCompare(a.date))
            break;
        default:
            sortedGameList = gameList
    }
    return sortedGameList;
}

function filteredgames(gameList:GameRequest[],filteredBy:string){

    let filteredgames = []
    switch(filteredBy) {
        case 'ARCADE':
            filteredgames =  gameList.filter(item => item.type === 'arcade')
            break;
        case 'SLOT':
            filteredgames =  gameList.filter(item => item.type === 'slot')
            break;
        case 'TABLE':
            filteredgames =  gameList.filter(item => item.type === 'table')
            break;
        default:
            filteredgames = gameList
    }
    return filteredgames
}

type Props = {
    search:{
        sortBy:string,
        filterBy:string,
    }
}

export default function CardListing(props:Props) {   
    
    const {sortBy, filterBy } = props.search
    const [games,setGames] = useState<GameRequest[]>([])

    useEffect(  ()=>{
        async function fetchGames(){
            const {games} = await getGames()
            setGames(games)
        }
        fetchGames() 
       
    },[])

    const sortedgames = sortBySortValue(games,sortBy)
    const filtergames = filteredgames(sortedgames,filterBy)

    return (
        <div className="container">
            {(filterBy === '') && 
                (
                    <>
                        <h1 className="category">FEATURED</h1>
                            {filtergames.map((item,index) =>(
                            <Card name={item.name} link={item.link} key={index} type={item.type} thumbnailUrl={item.thumbnailUrl} date={item.date} tags={item.tags}/> 
                        ))}
                    </>
                )
            }
            {(filterBy === '' || filterBy ==='SLOT') && <h1 className="category">SLOT GAMES</h1>}
            {
                filtergames.map((item,index)=>(
                    item.type.startsWith('slot') && <>  <Card link={item.link} tags={item.tags} key={index} name={item.name} type={item.type} thumbnailUrl={item.thumbnailUrl} date={item.date}/> </>
                ))
            }
            {
                (filterBy === '' || filterBy ==='TABLE') && <h1 className="category">TABLE GAMES</h1>
            }
            {
                filtergames.map((item,index)=>(
                    item.type.startsWith('table') &&  <> <Card  link={item.link} tags={item.tags} key={index} name={item.name} type={item.type} thumbnailUrl={item.thumbnailUrl} date={item.date}/> </>
                ))
            }.
            {
                filtergames.map((item,index)=>(
                    item.type.startsWith('arcade') && <> <h1 className="category">ARCADE GAMES</h1>  <Card link={item.link} tags={item.tags} key={index} name={item.name} type={item.type} thumbnailUrl={item.thumbnailUrl} date={item.date}/></>
                ))
            }
        </div>
    )
}


function renderStyle(tag:string){
    const color = tag === 'COMING SOON'? '#780f77': tag === 'NEW' ? '#00bef1': tag === 'POPULAR' ? '#f3a502' : 'green'

    return {
        style:{
            backgroundColor: color
        }
    }
}


function Card(props:GameRequest) {

    const {name,type,link, thumbnailUrl,date,tags} = props
    const [buttonPopUp,setButtonPopUp] = useState(false)

    return (
        <>
            <div key={name} className="card">
                <div className="image-section">
                    <div style={{display:'flex', justifyContent:"flex-start",zIndex:98,position:'relative', height: '20px', width: '100%'}}>
                        {tags.map((item,index) => <button key={index} {...renderStyle(item)} id="try-it" className="tags">{item}</button>)}
                    </div>
                    <img src = {thumbnailUrl} alt="IMAGE_THUMBNAIL"/>
                </div>
                <div className="detail-section">
                    <div className="info">
                        <div className="game-name">
                            <div className="name">{name}</div><br></br>
                            <span className="game-details">GAME TYPE: {type}<br></br>
                            RELEASE: {date.slice(0, 10) }</span>
                        </div>
                        <div className="icons-tray">
                            <img className="icons" alt="ADNROID_ICON" src="https://www.onetouch.io/wp-content/uploads/2020/06/platform-android.svg"/>
                            <img className="icons" alt="HTML5_ICON" src="https://www.onetouch.io/wp-content/uploads/2020/06/platform-html5.svg"/>
                            <img className="icons" alt="IOS_ICON" src="https://www.onetouch.io/wp-content/uploads/2020/06/platform-ios.svg"/>
                            <img className="icons" alt="MAC_ICON" src="https://www.onetouch.io/wp-content/uploads/2020/06/platform-mac.svg"/>
                            <img className="icons" alt="WINDOWS_ICON" src="https://www.onetouch.io/wp-content/uploads/2020/06/platform-windows.svg"/>
                        </div>
                    </div>
                    <div className="action">
                        <button id="" className="action-button">VIEW MORE</button><br></br>
                        <button onClick={()=>setButtonPopUp(true)} id="try-it" className="action-button">TRY IT</button>
                    </div>
                </div>
            </div>
            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                <div>
                <iframe src={link} title="game" className="iframe">
                </iframe>
                </div>
            </PopUp>
        </>
    )
}