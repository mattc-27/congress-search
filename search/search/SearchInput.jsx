import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { congressMembers } from '../../data/congress-members.js';
import { CiSearch } from "react-icons/ci";

import '../../style.css';

export function MemberSearchInput({ setQuery }) {

    const [data, setData] = useState('');
    const [searchInput, setSearchInput] = useState({ p: '' });
    const [inputValue, setInputValue] = useState('');
    const [matches, setMatches] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        setData(congressMembers)
    }, []);

    const filterData = (query) => {
        const queryLowerCase = query.toLowerCase();
        return Object.values(data).filter(item =>
            item.last_name.toLowerCase().includes(queryLowerCase) ||
            item.first_name.toLowerCase().includes(queryLowerCase) ||
            item.full_name.toLowerCase().includes(queryLowerCase) ||
            item.state.toLowerCase().includes(queryLowerCase)
        );
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.length > 0) {
            const matches = filterData(value);
            setMatches(matches);
            setDropdownVisible(true);
        } else {
            setMatches([]);
            setDropdownVisible(false);
        }
    }

    const handleSelect = (item) => {
        const memberQuery = item.bioguide_id;
        const memberType = item.type;
        //console.log(memberQuery)
        setQuery({ q: memberQuery, c: memberType });
        setMatches([])
    }


    return (

        <div className='search-component'>
        <div className='search-component-input'>
        <CiSearch size={30} color={'#485462'}/>
            <input
                type='text'
                value={inputValue}
                onChange={handleChange}
                placeholder='Enter congressmember name'
            />
        </div>
        {dropdownVisible && matches.length > 0 && (
            <div className='search-results'>
                {matches.map(item => (
                    <div
                        key={item.Id}
                        className="results"
                        onClick={() => handleSelect(item)}
                    >
                        <p>  {item.full_name} ({item.state}) ({item.party})</p>
                    </div>
                ))}
            </div>
        )}
    </div>

    );
}