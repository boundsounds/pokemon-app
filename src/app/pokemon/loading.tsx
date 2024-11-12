"use client"
import Image from 'next/image';
import pokeball from '../../../public/pokeball.png';

export default function Loading({ }) {


    return (
        <div className="min-h-screen bg-[#1E1E1E]">
            <nav className="bg-[#8B0000] text-white p-4">
                <div className="flex gap-4">
                    <Image
                        width={24}
                        height={24}
                        src={pokeball} alt={'pokeball img'} />
                    <button className="hover:opacity-80">Home</button>
                    <button className="hover:opacity-80">Search</button>
                </div>
            </nav>

            <div className="max-w-2xl mx-auto p-8">


                <div className="space-y-4">
                    <h2 className="text-white text-xl">
                        Search for your favorite pokemon from the original 151!
                    </h2>

                    <div className="relative" >
                        <div className="flex gap-2">
                            <input
                                type="text"

                                placeholder="Enter Pokemon name..."
                                className="w-full p-2 rounded bg-gray-300"
                            />
                            <button
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Search
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}