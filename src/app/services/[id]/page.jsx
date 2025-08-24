import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';

export default async function ServicesDetailspage({ params }) {
  const { id } = params; // id from URL

  // DB connect
  const servicesCollection = dbConnect("tools");

  // Find single data by ObjectId
  const singleData = await servicesCollection.findOne({ _id: new ObjectId(id) });

  if (!singleData) {
    return (
      <div className='m-10 text-center text-red-500'>
        <h1>Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className='m-10  '>
      <h1 className='text-center font-bold text-2xl mb-6 text-white'>Service Details</h1>
      <div className='flex flex-row-reverse justify-center items-center p-10 gap-10 rounded-lg shadow-lg shadow-[#201235] border border-zinc-300'>
        <div>
          <h2 className='text-xl font-semibold text-white'>Name: {singleData.name}</h2>
          <p className='text-white'>Description: {singleData.description}</p>
          <p className='text-white'>Price: ${singleData.price}</p>
          <p className='text-white'>Location: {singleData.location}</p>
          <p className='text-white'>Model: {singleData.model}</p>
        </div>
      </div>
    </div>
  );
}
