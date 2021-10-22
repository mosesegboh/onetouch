import React from 'react';
import './title.css';

export default function Title({sortValue,gameType,onchangeSort,onchangeGameType}) {
    return (
        <>
            <div className="title">
                <div className="main-title">
                    <h2>GAMES</h2>
                </div>
                <div className="sort-boxes">

                    <label>SORT:</label>
                    <select value={sortValue} onChange={onchangeSort} name="cars" className="sort">
                        <option value=''>SORT BY</option>
                        {['Title A-Z','Title Z-A', 'Date (Newest)', 'Date (Oldest)',].map((item,index) => <option className="option" key={index} value={item}>{item}</option>)}
                    </select>

                    <label>GAME TYPE:</label>
                    <select value={gameType} onChange={onchangeGameType} name="cars" className="sort">
                        <option value=''>FILTER BY</option>
                        {['ARCADE','Title Z-A', 'Date (Newest)', 'Date (Oldest)',].map((item,index) => <option className="option" key={index} value={item}>{item}</option>)}
                    </select>

                </div>
            </div>
        </>
    )
}

