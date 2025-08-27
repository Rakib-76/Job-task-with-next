"use client"
import Link from 'next/link'
import { CiLogin } from "react-icons/ci"
import { MdAppRegistration } from "react-icons/md"
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session, status } = useSession()

  return (
    <div className="navbar max-w-10/12 mx-auto">
      <div className="navbar-start">
        <Link href='/'>
          <p className="text-white">GadgetStation</p>
        </Link>
      </div>

      <div className='navbar-end flex gap-2'>
        {status === "loading" ? (
         <span className="loading loading-spinner loading-xl text-white"></span>
        ) : !session ? (
          <>
            <Link href='/register'>
              <div className="flex gap-1 items-center">
                <MdAppRegistration className='text-white text-xl' />
                <span className='text-white'>Register</span>
              </div>
            </Link>
            <Link href='/logIn'>
              <div className="flex gap-1 items-center">
                <CiLogin className='text-white text-xl' />
                <span className='text-white'>Login</span>
              </div>
            </Link>
          </>
        ) : (
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="btn btn-neutral"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )
}
