const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players`;

export async function fetchPlayers() {
    try {
        const response = await fetch(`${APIURL}`);
        const data = await response.json();
        return data.data.players;
    } catch (error) {
        console.error('Error fetching players:', error);
        throw error;
    }
}

export async function fetchSinglePlayer(id) {
    try {
        const response = await fetch(`${APIURL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching single player:', error);
        throw error;
    }
}

export async function createPlayer(playerData) {
    try {
      const response = await fetch(APIURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating player:', error);
      throw error;
    }
  }

  export async function deletePlayer(id) {
    try {
      const response = await fetch(`${APIURL}/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting player:', error);
      throw error;
    }
  }