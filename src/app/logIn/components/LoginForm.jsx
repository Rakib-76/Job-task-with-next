"use client"
import Link from 'next/link'
import React from 'react'
import { signIn } from "next-auth/react"
import Swal from 'sweetalert2'


export default function LoginForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            await signIn("credentials", { email, password, callbackUrl: "/" });
            // console.log({ email, password });
            if (result.success) {
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    text: "Redirecting to Home...",
                    timer: 2000,
                    showConfirmButton: false,
                });
        };

    } catch (error) {
        console.log(error);
        Swal.fire("Authentication Failed")
    }

};
return (
    <form onSubmit={handleSubmit} className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name="email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name="password" />
                        <div><a className="">Don't have accoutn,<Link className='link link-hover text-blue-700' href="/register">Register</Link></a></div>
                        <button type="submit" className="btn btn-neutral mt-4">
                            Login
                        </button>
                    </fieldset>
                </div>
            </div>
        </div>
    </form>
)
}
