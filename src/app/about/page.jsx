'use client'
// Here must have this use client or it will not work 
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Aboutpage() {
// here i will use another navigate system using handleevent function 
const router = useRouter();
// here islogged in use for check that is user logged in or loggout , here i use a condition that if user is not exist it will navige to home or exist it will navigate to address page for seccure here i use handle function to navigate ..

// [Note: If i use here normal link when i can't check the conditon and it willn't seccure . ]
const isLoggedin =true;
// const isLoggedin =false;
const handleNavigate = () =>{
    if(isLoggedin){
        router.push('/about/address')
    }
    else{
        router.push('/')
    }
}

  return (
    <div>
        <h1 className='text-4xl font-bold'>Aboutpage</h1>
        {/* <Link href='/about/address'>
                <li>Address</li>        
        </Link> */}
        <button className='bg-amber-400 p-2  border-2' type='button' onClick={handleNavigate}>Address</button>
    </div>
  )
}
