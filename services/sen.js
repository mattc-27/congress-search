export async function getSenateMember(id) {
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
            birthYear,
            officialWebsiteUrl,
            state,
            bioguideId,
            terms,
            partyHistory,
            sponsoredLegislation
        }
    } = memberData

    //const recentLegislation = sponsoredLegislation.pop();

    const currentTerm = terms.pop();

    return {
        invertedOrderName,
        directOrderName,
        birthYear,
        officialWebsiteUrl,
        state,
        bioguideId,
        terms,
       // recentLegislation,
        partyHistory,
        currentTerm,
        sponsoredLegislation
    };
};

export function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}