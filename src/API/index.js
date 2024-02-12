export async function fetchPlayers() {
    try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players');
        const data = await response.json();
        return data.data.players;
    } catch (error) {
        console.error('Error fetching players:', error);
        throw error;
    }
}