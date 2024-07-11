
export async function getHouseMember(id) {
    try {
      //const {id} = query;
      const response = await fetch(`/api/lookup-member/${id}`)
      const data = await response.json()
      const memberData = data.results;
      const formattedData = formatData(memberData);
      return { success: true, ...formattedData }
    } catch (error) {
      throw new Error('Failed to fetch api data');
    }
  }
  
  const formatData = (memberData) => {
  
    const {
      member: { 
        invertedOrderName,
        directOrderName,
        officialWebsiteUrl, 
        birthYear,
        state, 
        district, 
        bioguideId,
        terms,
        partyHistory,
        leadership,
        sponsoredLegislation
      }
    } = memberData
  
    const currentTerm = terms.pop();
   // const recentLegislation = sponsoredLegislation.pop();
  
  
  
    return {
      invertedOrderName,
      directOrderName,
      officialWebsiteUrl, 
      birthYear,
      state, 
      district, 
      bioguideId,
      terms,
      partyHistory,
      leadership,
      currentTerm,
      sponsoredLegislation
    };
  };
  
  
  /*
    const currentTerm = terms.pop();
    const recentLegislation = sponsoredLegislation.pop();
  */
  
  
  export function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
  }
  