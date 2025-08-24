import dbConnect from '@/lib/dbConnect';
import Link from 'next/link';
import React from 'react'

export default async function Servicespage() {

  const serviceCollection = dbConnect('tools');
  const data = await serviceCollection.find({}).toArray();
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10 text-white'>Services page</h1>
            <div className='grid grid-cols-3 gap-4 p-4' >
                {
                    data.map((data) => {
                        return (
                            <Link href={`/services/${data._id}`}>
                                <div className='card card-body border border-zinc-400 p-10'>
                                    <p className='text-white'><span className='text-sm font-bold'>Name</span>: {data.name}</p>
                                    <p className='text-white'><span className='text-sm font-bold'>Description</span>: {data.description}</p>
                                    <p className='text-white'><span className='text-sm font-bold'>Price</span>: {data.price}Tk</p>
                                    <button className='rounded-lg bg-[#201235] p-2 font-bold text-white'>Details</button>
                                </div>
                            </Link>
                        )

                    })
                }
            </div>
        </div>
    )
}
