import React from 'react';
import './title.css';


type Props = {
    search: {
        sortBy:string,
        filterBy:string,
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
                            {/* {['ARCADE','SLOT', 'TABLE'].map((item,index) => <option className="option" key={index} value={item}>{item}</option>)} */}
                            <option value='ARCADE'>ARCADE({totalArcade})</option>
                            <option value='SLOT'>SLOT({totalSlot})</option>
                            <option value='TABLE'>TABLE({totalTable})</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
