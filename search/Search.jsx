import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';

import { MemberSearchInput } from './search/SearchInput';
import { SelectStateDropdown } from './search/StateDropdown';
import { getMembersState } from '../services/scripts';

import StateMembers from './search/StateMembers';

import toast, { Toaster } from 'react-hot-toast';

export default function Search() {

    const navigate = useNavigate();

    // const [selectedState, setSelectedState] = useState('');
    const [query, setQuery] = useState({ q: '' });
    const [locationSearch, setLocationSearch] = useState(null)

    const [memberArr, setMemberArr] = useState([])
    const [visible, setVisible] = useState(false)


    {/* fetch member */ }
    useEffect(() => {
        const fetchData = async () => {
            if (query.q !== '') {
                console.log(query, 'true')
                navigate(`/search/${query.c}/${query.q}`)
            } else {
                console.log(query, 'false')
            }
        }
        fetchData()
    }, [query])


    {/* fetch member */ }
    useEffect(() => {
        async function fetchData() {
            let currentArr = []
            let formerArr = []
            const { s } = locationSearch;
            const stateCode = `${s}`;
            try {
                console.log(stateCode)
                const response = await toast.promise(
                    getMembersState(stateCode), {
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
                const memberData = response.results.members;
                for (let i = 0; i < memberData.length; i++) {
                    const member = memberData[i]
                    member.terms.item[0].endYear ? formerArr.push(member)
                        : currentArr.push(member)
                    //console.log({ former: formerArr }, { current: currentArr })
                    setMemberArr(currentArr)
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [locationSearch])


    return (

        <div className='member-search-container'>
            <div className='member-search-title'>
                <h2>Find your state's congressmembers</h2>
            </div>
            <div className='member-search'>

                <Toaster containerStyle={{
                    position: 'absolute',
                    zIndex: '999999999999999999',
                    top: '5%'
                }} />

                <div className='dropdown-container'>

                    <SelectStateDropdown setLocationSearch={setLocationSearch} />
                    {/*   <StateDropdown setLocationQuery={setLocationQuery} /> */}
                </div>
                <div className='search-container'>
                    {/* <h2>Or search by name</h2> */}
                    <MemberSearchInput setQuery={setQuery} />
                </div>
            </div>
            {/* state members */}
            {memberArr.length > 0 ?
                <div className='selected-state-results'>
                    <div className='state-results-title'>
                        <h2>
                            Congressmembers: {memberArr[0].state}
                        </h2>
                    </div>
                    <StateMembers data={memberArr} />
                </div>
                : null}


        </div>

    );
}