"use client"
import { useEffect, useRef, useState } from 'react';
import { getByName, Pokemon } from '../../../utils/getPokemon';
import { PokemonCard } from '../../../components/PokemonCard';
import { useRouter } from 'next/navigation';
import { ORIGINAL_POKEMON } from '../../../utils/nameList';
import Image from 'next/image';
import pokeball from '../../../../public/pokeball.png';
import Link from 'next/link';

export default function PokemonPage({
  params
}: {
  params: { name: string }
}) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getByName(params.name);
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    };
    fetchPokemon();
  }, [params.name]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = ORIGINAL_POKEMON.filter(pokemon =>
        pokemon.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleSearch = (pokemonName: string) => {
    setSearchTerm('');
    setShowSuggestions(false);
    router.push(`/pokemon/${pokemonName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      <nav className="bg-[#8B0000] text-white p-4">
        <div className="flex gap-4">
          <Image
            width={24}
            height={24}
            src={pokeball} alt={'pokeball img'} />
          <Link href={'./'}>
            <button className="hover:opacity-80">Home</button>
          </Link>
          <Link href={'./pokemon'}>
            <button className="hover:opacity-80">Search</button>
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto p-8">
        {pokemon && (
          <div className="mb-8 flex justify-center">
            <PokemonCard pokemon={pokemon} />
          </div>
        )}

        <div className="space-y-4">
          <h2 className="text-white text-xl">
            Search for your favorite pokemon from the original 151!
          </h2>

          <div className="relative" ref={searchRef}>
            <div className="flex gap-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchTerm)}
                placeholder="Enter Pokemon name..."
                className="w-full p-2 rounded bg-gray-300"
              />
              <button
                onClick={() => handleSearch(searchTerm)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Search
              </button>
            </div>

            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto z-10">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 capitalize"
                    onClick={() => handleSearch(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}