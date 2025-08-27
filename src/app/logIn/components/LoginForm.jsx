"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from "next-auth/react"
import Swal from 'sweetalert2'

export default function LoginForm() {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const result = await signIn("credentials", {
            redirect: false, // important: prevent default redirect
            email,
            password,
        });
        if (!result.error) {
            router.refresh(); // update session immediately
            Swal.fire({
                title: 'Login Successful!',
                text: 'Welcome back!',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            });
            setTimeout(() => router.push("/"), 2000);

        } else {
            Swal.fire({
                title: 'Login Failed',
                text: 'Invalid email or password!',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
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
                            <input type="email" className="input" placeholder="Email" name="email" required />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" required />
                            <div>
                                Don't have account? <Link className='link link-hover text-blue-700' href="/register">Register</Link>
                            </div>
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
