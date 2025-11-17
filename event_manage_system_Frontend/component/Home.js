
import React from 'react'
import HomeSection1 from './Home-Main-Sections/HomeSection1';
import HomeSection2 from './Home-Main-Sections/HomeSection2';
import HomeSection3 from './Home-Main-Sections/HomeSection3';
import HomeSection4 from './Home-Main-Sections/HomeSection4';

export default function Home() {
    return (
        <main className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* Title and hero button section */}
                <HomeSection1 />
                {/* Categories Section...... */}
                <HomeSection2 />
                {/* featured Section....... */}
                <HomeSection3 />
                {/* Upcoming section */}
                <HomeSection4/>
            </div >
        </main >
    )
}
