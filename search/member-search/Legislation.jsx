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
                    {item.type !== null ?
                        <h2> {item.type === 'S' ? `S ${item.number}` : `HR ${item.number}`}</h2>
                        :
                        null
                    }
                    <p>Introduced {item.introducedDate}</p>
                </div>
                <div className='leg-text'>
                    <p /* className='text-hourly' */>{item.title ? item.title : `Amendment number: ${item.amendmentNumber}`}</p>
                </div>
                {/*    <button onClick={() => handleClick(item)}>More info</button>*/}
            </div>
        </div>

    );
}