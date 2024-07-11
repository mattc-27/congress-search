import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

export default function LegislationCard({ item }) {

    const {
        chamber,
        id
    } = useParams();

    useEffect(() => {
        console.log(chamber, id)
    }, [])


    return (
        <div className='leg-card' key={item.number} >
        <div className='leg-item'>
            <div className='leg-title'>
                {item.type === 'S' ?
                    <h3>S {item.number}</h3>
                    : <h3>HR {item.number}</h3>
                }
                <h3>Introduced {item.introducedDate}</h3>
            </div>
            <div className='leg-text'>
                <p /* className='text-hourly' */>{item.title ? item.title : `Amendment number: ${item.amendmentNumber}`}</p>
            </div>

            {/*    <button onClick={() => handleClick(item)}>More info</button>*/}
        </div>
    </div>
    );
}