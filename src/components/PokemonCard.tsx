"use client"
import Image from 'next/image'
import { TYPE_STYLES, TYPE_MOVES, TYPE_WEAKNESSES } from '../utils/styleHelper';
import { Pokemon } from '@/utils/getPokemon';
interface PokemonCardProps {
    pokemon: Pokemon;
}


export function PokemonCard({ pokemon }: PokemonCardProps) {
    const hp = pokemon.stats.find(stat => stat.stat.name === 'hp')?.base_stat || 0;
    const mainType = pokemon.types[0].type.name;
    const typeStyle = TYPE_STYLES[mainType as keyof typeof TYPE_STYLES] || TYPE_STYLES.normal;
    const move = TYPE_MOVES[mainType as keyof typeof TYPE_MOVES] || TYPE_MOVES.normal;
    const weaknesses = TYPE_WEAKNESSES[mainType as keyof typeof TYPE_WEAKNESSES] || [];
    console.log(pokemon.stats)
    return (
        <div className={`font-mono flex justify-center border-8 border-yellow-400 rounded-xl max-w-fit ${typeStyle.glow} transition-all duration-300 hover:scale-105`}>
            <div className={`w-[300px] p-4 bg-gradient-to-b ${typeStyle.from} ${typeStyle.to} shadow-lg`}>
                <div className={`bg-gradient-to-b ${typeStyle.to} ${typeStyle.from} rounded-lg p-3 mb-2 flex justify-between items-center`}>
                    <h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
                    <div className="flex items-center gap-2">
                        <span className="font-bold">HP {hp}</span>
                        <span className="border-2 rounded-xl px-1">{typeStyle.emoji}</span>
                    </div>
                </div>

                <div className={`${typeStyle.backgroundColor} rounded-lg p-3 mb-2  `}>
                    <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        width={196}
                        height={196}
                        className="mx-auto scale-125"
                    />
                </div>

                <div className={`${typeStyle.backgroundColor} flex-row flex justify-between rounded-lg p-2 mb-2 border-2 border-white/20`}>
                    <div className="flex items-center gap-2">
                        {pokemon.types.map(({ type }) => {
                            const style = TYPE_STYLES[type.name as keyof typeof TYPE_STYLES];
                            return (<div key={type.name} className='flex flex-row '>
                                <span>{style.emoji}</span>
                                <span key={type.name} className="capitalize text-sm font-bold  flex items-center gap-1">
                                    {type.name} Type
                                </span>
                            </div>
                            );
                        })}
                    </div>
                    <div className={`font-bold text-sm bg-gradient-to-b ${typeStyle.from} ${typeStyle.to} p-2 rounded-lg`}>Stage {Math.floor(pokemon.id / 3)}</div>
                </div>

                <div className={`${typeStyle.backgroundColor} rounded-lg p-2 mb-2 border-2 border-white/20`}>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row justify-between items-center'>
                            <span>{typeStyle.emoji}</span>
                            <span className='text-sm font-bold' >{move.name}</span>
                        </div>
                        <span className={`font-bold text-sm bg-gradient-to-b ${typeStyle.from} ${typeStyle.to} p-2 rounded-lg`}> {move.power}</span>
                    </div>
                </div>

                <div className={`${typeStyle.backgroundColor} rounded-lg p-3 border-2 border-white/20`}>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <span className='text-sm font-bold'>Weakness:</span>
                            <div className="flex gap-1">
                                {weaknesses.map(weakness => {
                                    const style = TYPE_STYLES[weakness as keyof typeof TYPE_STYLES];
                                    return (
                                        <span key={weakness}>{style.emoji}</span>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className='text-sm font-bold'>Resistance:</span>
                            <div className="flex gap-1 ">
                                {pokemon.types.map(({ type }) => {
                                    const style = TYPE_STYLES[type.name as keyof typeof TYPE_STYLES];
                                    return (
                                        <span key={type.name}>{style.emoji}</span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}