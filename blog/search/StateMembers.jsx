import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import '../../style.css';

export default function StateMembers({ data }) {


    function MemberCard({ member }) {

        //const current = member.terms.pop();
        const current = member.terms.item[0];
        const chamber =
            current.chamber === 'Senate' ? 'sen'
                : 'rep'

        return (

            <div className='member-card-state'>
                {/*   <p>{member.bioguideId}</p> 
            <p>{member.state}</p>*/}
                <div className='title-card'>
                    <Link
                        className={member.partyName === 'Republican' ? 'hover-red card-link' : 'hover-blue card-link'}
                        to={`/search/${chamber}/${member.bioguideId}`}>
                        <h2>{member.name}</h2></Link>
                    <p>{member.partyName}</p>
                </div>
                <div className='current-term-card'>
                    <p>{current.chamber}, <br /><em>{current.startYear} to Present</em></p>
                </div>
            </div>

        );
    }

    return (

        <div className='selected-state-members'>
            {data.map((item) => (
                <MemberCard member={item} />
            ))}
        </div>

    );
}