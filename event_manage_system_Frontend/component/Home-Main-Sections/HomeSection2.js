import React from 'react'
import categories from '../EMS-JSON/categories.json'
import { Users,Trophy, Music, GraduationCap } from "lucide-react";

// so everytime it get checked from categories icon and based on that it provide the name 
const iconMap = {
    Trophy: Trophy,
    Music: Music,
    Users: Users,
    GraduationCap: GraduationCap,
};
export default function HomeSection2() {
    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Popular Categories</h2>
            </div>
            {/* means it will have 4colums if width is > 648px else 2 columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {
                    categories.map((data, i) => {
                        // match the data.icon with iconMap and use it....
                        const IconComponent = iconMap[data.icon]
                        return (
                            <div key={i} className='bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 hover:scale-105 transition cursor-pointer'>
                                {/* first icon at center */}
                                <div className={`bg-linear-to-br ${data.gradient} w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                                    {
                                        IconComponent && <IconComponent className="w-6 h-6 text-white" />
                                    }
                                </div>
                                {/* second Name of icon */}
                                <div>
                                    <h3 className='font-semibold text-center'>
                                        {
                                            data.name
                                        }
                                    </h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
