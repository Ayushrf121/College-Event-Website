"use client"

import React from 'react'
import upcomingEvents from '../EMS-JSON/upcomingEvents.json';
import { Calendar,Users,ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HomeSection4() {
    const router = useRouter();
    const handler = (id)=>{
        console.log("Clicked",id)
        router.push(`/weekevents/${id}`)
    }
    return (
        <section>
            <div className='flex justify-between items-center'>
                <h2 className="text-3xl font-bold mb-6">Upcoming This Week</h2>
                <Link href='/events' className='flex justify-center items-center text-gray-200 hover:text-purple-400'>Explore More <ArrowRight/></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    upcomingEvents.map((data) =>
                    (
                        <div  key={data.id} onClick={()=>handler(data.id)} className="bg-gray-800/50 backdrop-blur p-5 rounded-xl border border-purple-500/20 hover:border-purple-500/50 hover:scale-105 transition cursor-pointer">

                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-semibold text-lg">{data.title}</h3>
                                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                                    {data.category}
                                </span>
                            </div>
                            <div className="flex items-center text-sm text-gray-400 mb-2">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{data.date}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                                <Users className="w-4 h-4 mr-2" />
                                <span>{data.attendees} attending</span>
                            </div>
                        </div>
                    )
                    )
                }

            </div>
        </section>
    )
}
