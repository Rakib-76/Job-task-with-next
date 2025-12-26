// import React from 'react'

// export default function Footer() {
//     return (
//         <div>
//             <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
//                 <aside>
//                     <svg
//                         width="50"
//                         height="50"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         className="fill-current">
//                         <path
//                             d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//                     </svg>
//                     <p>
//                        GadgetStation
//                         <br />
//                         Providing reliable tech since 1992
//                     </p>
//                 </aside>
//                 <nav>
//                     <h6 className="footer-title">Social</h6>
//                     <div className="grid grid-flow-col gap-4">
//                         <a>
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 className="fill-current">
//                                 <path
//                                     d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//                             </svg>
//                         </a>
//                         <a>
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 className="fill-current">
//                                 <path
//                                     d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//                             </svg>
//                         </a>
//                         <a>
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 className="fill-current">
//                                 <path
//                                     d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//                             </svg>
//                         </a>
//                     </div>
//                 </nav>
//             </footer>
//         </div>
//     )
// }


"use client";

import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 px-5 pb-10 ">
      {/* Center and limit width to 1440px */}
      <div className="mx-auto w-full max-w-[1220px] min-h-[195px]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left - Logo & Contact */}
          <div className="flex-1">
            {/* Logos */}
            <div className="w-[120px] h-[67px] mb-7">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>


            {/* Contact Info */}
            <div className="flex items-center gap-2 text-gray-700 mb-2">
              <FaMapMarkerAlt />
              <span>29 SE 2nd Ave, Miami Florida 33131, United States</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 mb-2">
              <FaEnvelope />
              <span>info@zaheen.com</span>
              <button className="ml-2 text-gray-500 hover:text-gray-800">📋</button>
            </div>
            <div className="font-bold text-gray-900 mb-4">(+92) 3942 7879</div>

            <div className="font-roboto font-bold text-[16px]">
              Payment Channel
            </div>


            {/* Payment Channels */}
            <div className="flex gap-10 items-center mt-4">
              <img src="/151a1966a66289eaa05139dc4a944b66b2935b26.png" alt="Visa" className="h-8" />
              <img src="/475493d947d902d6b3f9a1fe62d4a283a4385a12.png" alt="Mastercard" className="h-8" />
              <img src="/4fc0a513aad0f1aa8e875d72e666b239161b5f72.png" alt="Nagad" className="h-8" />
              <img src="/5c9d82dae878dde3128a19388d23ffc584239220.png" alt="bKash" className="h-8" />
              <img src="/79032e9756507b8023aecf01d597d31d2608a62b.png" alt="Rocket" className="h-8" />
              <img src="/86ca0af12dddc5ea7e18299202bbd5b65e9d604f.jpg" alt="Upay" className="h-8" />
              <img src="/a0fb8616fb857309912886c3915fec83f1db7188.png" alt="Taptap Send" className="h-8" />
              <img src="/afb364b4b3ef2c607fa6cb4d9e73e325af53d26f.png" alt="Cellfin" className="h-8" />
              <img src="/c0f3422c00903de77ffc5b4c0349dd8cd74f93c1.png" alt="City Bank" className="h-8" />
              <img src="/c7c052af79df39de56c787154725e89c164864b9.png" alt="Islami Bank" className="h-8" />
              <img src="/deba1380977cdedf97cce47eff3c8fbd68b659aa.jpg" alt="BRAC Bank" className="h-8" />
              <img src="/ead701f9f283fabc59b5d4c6627b101aa3c96f1d.png" alt="UCB" className="h-8" />
              <img src="/f7b3e656a522fd0e4eb960ec09f9cd96928733c4.png" alt="UCB" className="h-8" />
              <img src="/ff47870dd89c3ae1a988f43c6c64c4dac000014f.png" alt="UCB" className="h-8" />
            </div>
          </div>

          {/* Right - Pages & Information */}
          <div className="flex-1 flex justify-between">
            {/* Pages */}
            <div>
              <h3 className="font-bold text-gray-900 mb-2">PAGES</h3>
              <ul className="flex flex-col gap-1 text-gray-700">
                <li>About Us</li>
                <li>Our Services</li>
                <li>Our Products</li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="font-bold text-gray-900 mb-2">INFORMATION</h3>
              <ul className="flex flex-col gap-1 text-gray-700">
                <li>My Account</li>
                <li>Corporate Enquires</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" mt-10 border-t border-gray-300 pt-5 flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-700">
            Copyright © <span className="text-orange-500 font-semibold">360D Soul Limited</span> 2025. All rights reserved.
          </p>

          {/* Social & Policies */}
          <div className="flex items-center gap-6">


            {/* Social Icons */}
            <div className="flex gap-4 text-gray-700">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            </div>

            {/* Policies */}
            <div className="flex gap-4 text-gray-700">
              <span className="hover:text-black cursor-pointer">Teams & Condition</span>
              <span className="hover:text-black cursor-pointer">Privacy & Policy</span>
              <span className="hover:text-black cursor-pointer">Refund Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



