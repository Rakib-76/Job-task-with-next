import dbConnect from '@/lib/dbConnect';
import Link from 'next/link';
import React from 'react'

export default async function Servicespage() {

  const serviceCollection = dbConnect('tools');
  const data = await serviceCollection.find({}).toArray();

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-10">
      <h1 className='text-4xl font-bold text-center mb-10 text-white'>Product Page</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((item) => (
          <Link key={item._id} href={`/services/${item._id}`}>
            <div className='card card-body border border-zinc-400 p-6 hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <p className='text-white'><span className='text-sm font-bold'>Name:</span> {item.name}</p>
              <p className='text-white'><span className='text-sm font-bold'>Description:</span> {item.description}</p>
              <p className='text-white'><span className='text-sm font-bold'>Price:</span> {item.price}Tk</p>
              <button className='mt-4 rounded-lg bg-[#201235] p-2 font-bold text-white w-full'>Details</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
