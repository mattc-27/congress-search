// Utility function to get the suffix
const getCongressSuffix = (number) => {
    const j = number % 10,
        k = number % 100;
    if (j === 1 && k !== 11) {
        return 'st';
    }
    if (j === 2 && k !== 12) {
        return 'nd';
    }
    if (j === 3 && k !== 13) {
        return 'rd';
    }
    return 'th';
};


// getMembersState 
const getMembersState = async (stateCode) => {
    try {
        const response = await fetch(`/api/members-state/${stateCode}`)
        const data = response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

// get sponsored legislation
const getLegislation = async (id) => {
    try {
  
        const response = await fetch(`/api/fetch-legislation/${id}`)
        const data = await response.json()
        //console.log(data.results)
        return data.results.sponsoredLegislation;
        /* console.log(data.results.sponsoredLegislation)
        setSponsoredLeg(data.results.sponsoredLegislation)*/
  
    } catch (error) {
        console.log(error)
    }
  }

export { getCongressSuffix, getMembersState, getLegislation };