// "use client"
// import Link from 'next/link'
// import { CiLogin } from "react-icons/ci"
// import { MdAppRegistration } from "react-icons/md"
// import { useSession, signOut } from "next-auth/react"

// export default function Navbar() {
//   const { data: session, status } = useSession()

//   return (
//     <div className="navbar max-w-10/12 mx-auto">
//       <div className="navbar-start">
//         <Link href='/'>
//           <p className="text-white">GadgetStation</p>
//         </Link>
//       </div>

//       <div className='navbar-end flex gap-2'>
//         {status === "loading" ? (
//          <span className="loading loading-spinner loading-xl text-white"></span>
//         ) : !session ? (
//           <>
//             <Link href='/register'>
//               <div className="flex gap-1 items-center">
//                 <MdAppRegistration className='text-white text-xl' />
//                 <span className='text-white'>Register</span>
//               </div>
//             </Link>
//             <Link href='/logIn'>
//               <div className="flex gap-1 items-center">
//                 <CiLogin className='text-white text-xl' />
//                 <span className='text-white'>Login</span>
//               </div>
//             </Link>
//           </>
//         ) : (
//           <button
//             onClick={() => signOut({ callbackUrl: "/" })}
//             className="btn btn-neutral"
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </div>
//   )
// }



"use client";

import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className=" w-[1440px] mx-auto">
      {/* ===== TOP BAR ===== */}
      <div className="bg-teal-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-10">
            
            {/* Left info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt size={14} />
                <span>Kashimpur, Gazipur Sadar / Gazipur</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt size={14} />
                <span>+880 01713-027875</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="bg-white h-10 flex items-center px-4 gap-4">
              <FaFacebookF className="text-[#EE4B21] cursor-pointer hover:opacity-80" />
              <FaTwitter className="text-[#EE4B21] cursor-pointer hover:opacity-80" />
              <FaInstagram className="text-[#EE4B21] cursor-pointer hover:opacity-80" />
              <FaYoutube className="text-[#EE4B21] cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav className="bg-white w-[1440px] mx-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Menu */}
            <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-900">
              <li>
                <Link href="/" className="text-[#f15a29]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#f15a29]">
                  About Us
                </Link>
              </li>

              <li className="flex items-center gap-1 cursor-pointer hover:text-[#f15a29]">
                Our Services <IoChevronDown size={14} />
              </li>

              <li className="flex items-center gap-1 cursor-pointer hover:text-[#f15a29]">
                Our Products <IoChevronDown size={14} />
              </li>

              <li>
                <Link href="/blogs" className="hover:text-[#f15a29]">
                  Blogs
                </Link>
              </li>
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-6">
              
              {/* Cart */}
              <div className="relative cursor-pointer">
                <FaShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>

              {/* Account */}
              <div className="flex items-center gap-2 cursor-pointer hover:text-[#f15a29]">
                <FaUser size={18} />
                <span className="text-sm font-medium">Your Account</span>
              </div>

              {/* Contact button */}
              <Link
                href="/contact"
                className="bg-[#f15a29] text-white px-6 py-2 text-sm font-medium hover:bg-orange-600 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
