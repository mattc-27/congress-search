import React, { useEffect, useState } from 'react';
import { usStates } from '../../data/us-state.js';
//import '../../main.css';

export function SelectStateDropdown({ setLocationSearch }) {

    const [selectedState, setSelectedState] = useState('');
    const [stateOptions, setStateOptions] = useState('');

    useEffect(() => {
        setSelectedState(usStates)
    }, [])

    const handleSelectChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        //setSelectedState(state);
        setLocationSearch({ s: state })
    }
    return (

        <div className='dropdown-component'>
            <select
                onChange={handleSelectChange}
                value={selectedState}
                className='dropdown-selection'
            >
                {usStates.map((state) => (
                    <option
                        className='select-option'
                        key={state.abbreviation}
                        value={state.abbreviation}
                    >
                        {state.name}
                    </option>
                ))}
            </select>
        </div>

    );
}

{/* 
    
      <div className=''>

            </div>*/}
