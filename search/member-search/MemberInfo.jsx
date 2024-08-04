import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getCongressSuffix } from '../../services/scripts';
import LegislationCard from './Legislation';
import '../../style.css';

export default function MemberInfo({ data, sponsoredLeg }) {

    const [showTerms, setShowTerms] = useState(false)

    const {
        chamber,
        id
    } = useParams();

    /* 
        useEffect(() => {
            console.log(chamber, id)
        }, [])*/


    const getCongressNo = (congress) => {
        return `${congress}${getCongressSuffix(congress)}`;
    };
    function handleTerms() {
        if (!showTerms) {
            setShowTerms(true)
        } else setShowTerms(false);
    }


    return (

        <div className='member-details'>

            <div className='member-title'>
                <div className='member-title-row-a'>
                    <h1>{data.invertedOrderName}</h1>
                </div>
                <div className='member-title-row-b'>
                    <p>{data.state}  {chamber === 'rep' ? `| ${data.district}` : null} </p>
                    <p>{data.currentTerm.chamber}</p>
                </div>
            </div>
            <div className='member-content-main'>
                <div className="member-content">
                    <p>
                        <a className='member-link' href={data.officialWebsiteUrl}>{data.directOrderName}</a> is a dedicated member of  {chamber === 'rep' ? `the U.S. House of Representatives serving District ${data.district} in the state of ${data.state}.`
                            : `the U.S. Senate in the state of ${data.state}.`}
                    </p>
                </div>
                <div className="member-terms">
                    <h3>    {getCongressNo(data.currentTerm.congress)} Congress | {data.currentTerm.startYear}</h3>
                    {/*    <li>Term: {index + 1}</li>*/}
                    {data.terms.length > 0 ?
                        <div className='show-terms'>
                            <button
                                className='showTermsBtn'
                                onClick={handleTerms}> {showTerms ? 'Hide terms' : 'Show terms'}</button>
                        </div>

                        : null}
                    {showTerms ?
                        <div className='member-terms'>
                            {data.terms.map((item, index) => (
                                <ul>
                                    {/*    <li>Term: {index + 1}</li>*/}
                                    <li>{getCongressNo(item.congress)} Congress | {item.startYear} - {item.endYear}</li>

                                </ul>
                            ))
                            }
                        </div>
                        : null}
                </div>

                {sponsoredLeg ?
                    <div className="member-content-leg" >
                        <div className='sponsored-leg'>
                            <h1>
                                <b>Sponsored Legisliation</b>
                            </h1>
                            <p><b>Sponsored Legisliation to Date:</b> {data.sponsoredLegislation ? `${data.sponsoredLegislation.count}` : '0'}</p>
                        </div>
                        <div className='sponsored-leg'>
                            {sponsoredLeg.map((item) => (
                                <LegislationCard item={item} />
                            ))}

                        </div>
                    </div>
                    : null}

            </div>
        </div>


    );
}