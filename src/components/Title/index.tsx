import React from 'react';
import './title.css';


type Props = {
    search: {
        [key:string]:string
    }
    onChange: (event:any) => void

    totalGames : { 
        totalSlot: number, 
        totalArcade: number,
        totalTable: number, 
    } 
}


export default function Title(props: Props) {

    const {sortBy, filterBy } = props.search
    const onChange = props.onChange
    const {totalSlot, totalArcade, totalTable} = props.totalGames
    return (
        <>
            <div className="title">
                <div className="main-title">
                    <h2>GAMES</h2>
                </div>
                <div className="sort-boxes">
                    <div className="sort-first">
                        <label>SORT:</label>
                        <select value={sortBy} onChange={onChange} name="sortBy" className="sort">
                            <option value=''>SORT BY</option>
                            {['Title A-Z','Title Z-A', 'Date (Newest)', 'Date (Oldest)',].map((item,index) => <option className="option" key={index} value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div className="sort-second">
                        <label>GAME TYPE:</label>
                        <select value={filterBy} onChange={onChange} name="filterBy" className="sort">
                            <option value=''>FILTER BY</option>
                        {[{name:'ARCADE',count:totalArcade},{name:'SLOT',count:totalSlot}, {name:'TABLE',count:totalTable}].map((item,index) => <option className="option" key={index} value={item.name}>{item.name}({item.count})</option>)}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
