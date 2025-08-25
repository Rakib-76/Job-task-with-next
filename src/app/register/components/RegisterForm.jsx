"use client";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { registerUser } from "@/app/actions/auth/registerUser";
import Link from 'next/link'

export default function RegisterForm() {
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const payload = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
        };

        const result = await registerUser(payload);
        

        if (result.success) {
            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "Redirecting to Home...",
                timer: 2000,
                showConfirmButton: false,
            });

        } else {
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: result.message || "Something went wrong!",
            });
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <h1 className="text-5xl font-bold">Register now!</h1>
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Type your name" name="name" />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email"  name="email"/>
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                                <p>Already have an accout,<span className='text-blue-700 border-b'><Link href='/logIn'>Click here</Link></span></p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
