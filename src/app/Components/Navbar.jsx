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
import { useState } from "react";
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
import LoginCard from "./LoginCard";
import LoginModal from "./LoginModal";
import CheckoutModal from "./CheckoutModal";
import { useCart } from "@/context/CartContext";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const { cartItems, openCheckout } = useCart();
  const { data: session } = useSession();
  const cartCount = cartItems?.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;

  return (
    <>
      <header className=" w-[1440px] mx-auto">
        {/* ... Top Bar Same ... */}
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
                <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
              </div>

              {/* Menu */}
              <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-900">
                <li><Link href="/" className="text-[#f15a29]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#f15a29]">About Us</Link></li>
                <li className="flex items-center gap-1 cursor-pointer hover:text-[#f15a29]">Our Services <IoChevronDown size={14} /></li>
                <li className="flex items-center gap-1 cursor-pointer hover:text-[#f15a29]">Our Products <IoChevronDown size={14} /></li>
                <li><Link href="/blogs" className="hover:text-[#f15a29]">Blogs</Link></li>
              </ul>

              {/* Right actions */}
              <div className="flex items-center gap-6">

                {/* Cart */}
                <div onClick={openCheckout} className="relative cursor-pointer">
                  <FaShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>

                {/* Account / Session */}
                {session?.user ? (
                  <div className="flex items-center gap-3 group relative cursor-pointer">
                    {session.user.image ? (
                      <img
                        src={session.user.image}
                        alt={session.user.name}
                        className="w-9 h-9 rounded-full border border-gray-200"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold border border-teal-200">
                        {session.user.name?.charAt(0).toUpperCase() || "U"}
                      </div>
                    )}

                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="px-4 py-2 border-b">
                        <p className="text-sm font-semibold text-gray-800 truncate">{session.user.name}</p>
                        <button onClick={() => signOut()} className="text-xs text-red-600 hover:universe">Sign Out</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setOpenLogin(true)} className="flex items-center gap-2 hover:text-[#f15a29]">
                    <FaUser size={18} />
                    <span className="text-sm font-medium">Your Account</span>
                  </button>
                )}

                {/* Contact button */}
                <Link href="/contact" className="bg-[#f15a29] text-white px-6 py-2 text-sm font-medium hover:bg-orange-600 transition">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ===== LOGIN MODAL ===== */}
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)}>
        <LoginModal open={openLogin} onClose={() => setOpenLogin(false)}>
          <LoginCard onClose={() => setOpenLogin(false)} />
        </LoginModal>
      </LoginModal>

      {/* ===== CHECKOUT MODAL ===== */}
      <CheckoutModal />
    </>
  );
};

export default Navbar;
