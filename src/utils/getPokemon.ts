import axios from 'axios';

export interface Pokemon {
    id: number;
    name: string;
    types: {
        type: {
            name: string;
        };
    }[];
    sprites: {
        front_default: string;
    };
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
}

export async function getLimitedPokemonList(limit: number = 151) {
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
        );
        return response.data.results;
    } catch (error) {
        console.error('Error fetching Pokemon list:', error);
        throw error;
    }
}

export async function getByName(name: string): Promise<Pokemon> {
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        return response.data;
    } catch (error) {
        console.error(`Error fetching Pokemon ${name}:`, error);
        throw error;
    }
}

