import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getHouseMember } from '../services/rep';
import { getSenateMember } from '../services/sen';
import { getLegislation } from '../services/scripts';
import MemberInfo from './member-search/MemberInfo';
import toast, { Toaster } from 'react-hot-toast';


export default function Member() {

    const [results, setResults] = useState('');
    const [memberType, setMemberType] = useState({ c: '' })
    const [sponsoredLeg, setSponsoredLeg] = useState('');
    const [senatorInfo, setSenatorInfo] = useState('');
    const [repInfo, setRepInfo] = useState('');

    const {
        chamber,
        id
    } = useParams();

    useEffect(() => {
        console.log(chamber, id)
    }, [])


    {/* fetch member */ }
    useEffect(() => {
        const fetchData = async () => {
            // setMemberType(query.c)
            if (chamber === 'rep') {
                try {
                    const response = await toast.promise(
                        getHouseMember(id), {
                        loading: 'Fetching state congressmembers...',
                        success: 'Retrieved data',
                        error: 'Error fetching data'
                    },
                        {
                            success: {
                                duration: 2000,
                                icon: null
                            },
                        }
                    )
                    if (response.success) {
                        const recentLegislation = await getLegislation(id)
                        //console.log(response, recentLegislation)
                        //console.log(response)
                        setResults(response)
                        setRepInfo(response)
                        console.log(results)
                        setSponsoredLeg(recentLegislation)
                    }
                } catch (error) {
                    console.log(error)
                }
            } else {
                try {
                    const response = await toast.promise(
                        getSenateMember(id), {
                        loading: 'Fetching state congressmembers...',
                        success: 'Retrieved data',
                        error: 'Error fetching data'
                    },
                        {
                            success: {
                                duration: 2000,
                                icon: null
                            },
                        }
                    )

                    //console.log(response)
                    const recentLegislation = await getLegislation(id)
                    //console.log(recentLegislation)
                    setResults(response)
                    setSenatorInfo(response)
                    console.log(results)
                    //console.log(response)
                    setSponsoredLeg(recentLegislation)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        fetchData()
    }, [])


    return (

        <div className='member-page-container'>
            <div className='member-info'>
                <Toaster containerStyle={{
                    position: 'absolute',
                    zIndex: '999999999999999999',
                    top: '5%'
                }} />
                <button
                    className='back-button'
                    onClick={(e) => history.back()}>
                    Back
                </button>
            </div>
            {results &&
                <MemberInfo data={results} sponsoredLeg={sponsoredLeg} />

                /*
                      <div className='member-details'>
                        <h2>{results.invertedOrderName}</h2>
                        <p>{results.state}  | {chamber === 'rep' ? `${results.district}` : null} </p>
                        <p>{results.currentTerm.chamber}</p>
                    </div> 
                    
                    */

            }
        </div>

    );
}