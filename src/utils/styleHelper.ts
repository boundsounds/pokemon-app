export const TYPE_MOVES = {
    normal: { name: 'Tackle', power: 40 },
    fire: { name: 'Fire Spin', power: 100 },
    water: { name: 'Hydro Pump', power: 120 },
    electric: { name: 'Thunderbolt', power: 90 },
    grass: { name: 'Solar Beam', power: 120 },
    ice: { name: 'Ice Beam', power: 90 },
    fighting: { name: 'Close Combat', power: 120 },
    poison: { name: 'Sludge Bomb', power: 90 },
    ground: { name: 'Earthquake', power: 100 },
    flying: { name: 'Air Slash', power: 75 },
    psychic: { name: 'Psychic', power: 90 },
    bug: { name: 'Bug Buzz', power: 90 },
    rock: { name: 'Stone Edge', power: 100 },
    ghost: { name: 'Shadow Ball', power: 80 },
    dragon: { name: 'Dragon Claw', power: 80 },
    dark: { name: 'Dark Pulse', power: 80 },
    steel: { name: 'Iron Head', power: 80 },
    fairy: { name: 'Moonblast', power: 95 },
} as const;

export const TYPE_WEAKNESSES = {
    normal: ['fighting'],
    fire: ['water', 'ground', 'rock'],
    water: ['electric', 'grass'],
    electric: ['ground'],
    grass: ['fire', 'ice', 'poison', 'flying', 'bug'],
    ice: ['fire', 'fighting', 'rock', 'steel'],
    fighting: ['flying', 'psychic', 'fairy'],
    poison: ['ground', 'psychic'],
    ground: ['water', 'grass', 'ice'],
    flying: ['electric', 'ice', 'rock'],
    psychic: ['bug', 'ghost', 'dark'],
    bug: ['fire', 'flying', 'rock'],
    rock: ['water', 'grass', 'fighting', 'ground', 'steel'],
    ghost: ['ghost', 'dark'],
    dragon: ['ice', 'dragon', 'fairy'],
    dark: ['fighting', 'bug', 'fairy'],
    steel: ['fire', 'fighting', 'ground'],
    fairy: ['poison', 'steel'],
} as const;

export const TYPE_STYLES = {
    normal: { from: 'from-gray-200', to: 'to-gray-400', emoji: '⭐', backgroundColor: 'bg-gray-200', glow: 'drop-shadow-[0_0_30px_rgba(156,163,175,0.7)]' },
    fire: { from: 'from-orange-200', to: 'to-orange-600', emoji: '🔥', backgroundColor: 'bg-orange-200', glow: 'drop-shadow-[0_0_30px_rgba(249,115,22,0.7)]' },
    water: { from: 'from-blue-200', to: 'to-blue-600', emoji: '💧', backgroundColor: 'bg-blue-200', glow: 'drop-shadow-[0_0_30px_rgba(37,99,235,0.7)]' },
    electric: { from: 'from-yellow-200', to: 'to-yellow-400', emoji: '⚡', backgroundColor: 'bg-yellow-200', glow: 'drop-shadow-[0_0_30px_rgba(234,179,8,0.7)]' },
    grass: { from: 'from-green-200', to: 'to-green-600', emoji: '🌱', backgroundColor: 'bg-green-200', glow: 'drop-shadow-[0_0_30px_rgba(22,163,74,0.7)]' },
    ice: { from: 'from-cyan-200', to: 'to-cyan-400', emoji: '❄️', backgroundColor: 'bg-cyan-200', glow: 'drop-shadow-[0_0_30px_rgba(6,182,212,0.7)]' },
    fighting: { from: 'from-red-200', to: 'to-red-700', emoji: '🥊', backgroundColor: 'bg-red-200', glow: 'drop-shadow-[0_0_30px_rgba(185,28,28,0.7)]' },
    poison: { from: 'from-purple-200', to: 'to-purple-700', emoji: '☠️', backgroundColor: 'bg-purple-200', glow: 'drop-shadow-[0_0_30px_rgba(126,34,206,0.7)]' },
    ground: { from: 'from-amber-200', to: 'to-amber-700', emoji: '🌍', backgroundColor: 'bg-amber-200', glow: 'drop-shadow-[0_0_30px_rgba(180,83,9,0.7)]' },
    flying: { from: 'from-sky-200', to: 'to-sky-400', emoji: '🦅', backgroundColor: 'bg-sky-200', glow: 'drop-shadow-[0_0_30px_rgba(14,165,233,0.7)]' },
    psychic: { from: 'from-pink-200', to: 'to-pink-600', emoji: '🔮', backgroundColor: 'bg-pink-200', glow: 'drop-shadow-[0_0_30px_rgba(219,39,119,0.7)]' },
    bug: { from: 'from-lime-200', to: 'to-lime-600', emoji: '🐛', backgroundColor: 'bg-lime-200', glow: 'drop-shadow-[0_0_30px_rgba(101,163,13,0.7)]' },
    rock: { from: 'from-stone-200', to: 'to-stone-600', emoji: '🪨', backgroundColor: 'bg-stone-200', glow: 'drop-shadow-[0_0_30px_rgba(87,83,78,0.7)]' },
    ghost: { from: 'from-indigo-200', to: 'to-indigo-700', emoji: '👻', backgroundColor: 'bg-indigo-200', glow: 'drop-shadow-[0_0_30px_rgba(67,56,202,0.7)]' },
    dragon: { from: 'from-violet-200', to: 'to-violet-700', emoji: '🐉', backgroundColor: 'bg-violet-200', glow: 'drop-shadow-[0_0_30px_rgba(109,40,217,0.7)]' },
    dark: { from: 'from-zinc-400', to: 'to-zinc-700', emoji: '🌑', backgroundColor: 'bg-zinc-400', glow: 'drop-shadow-[0_0_30px_rgba(63,63,70,0.7)]' },
    steel: { from: 'from-slate-200', to: 'to-slate-500', emoji: '⚔️', backgroundColor: 'bg-slate-200', glow: 'drop-shadow-[0_0_30px_rgba(71,85,105,0.7)]' },
    fairy: { from: 'from-rose-200', to: 'to-rose-400', emoji: '🧚', backgroundColor: 'bg-rose-200', glow: 'drop-shadow-[0_0_30px_rgba(244,63,94,0.7)]' },
} as const;