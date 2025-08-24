'use client';
import React from 'react'
import {  signIn } from "next-auth/react"
import Link from 'next/link';
export default function page() {
    return (
        <div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                 <h1 className="text-5xl font-bold">Login now!</h1>
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="">Don't have accoutn,<Link className='link link-hover text-blue-700' href="/register">Register</Link></a></div>
                                <button onClick={() => signIn()} className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
