"use client";

import { FaFacebookF, FaApple, FaGoogle, FaEnvelope, FaLock, FaEye } from "react-icons/fa";

const LoginCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      
      {/* Main Card */}
      <div
        className="w-[960px] h-[530px] rounded-[12px] overflow-hidden relative"
        style={{
          background: "linear-gradient(180deg, #07B4B0 0%, #CFF3F2 55%, #FFFFFF 100%)",
        }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-8 pt-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            LOGO
          </div>

          {/* Auth Links */}
          <div className="flex items-center gap-6 text-white">
            <span className="text-sm cursor-pointer">Login</span>
            <button className="px-5 py-1.5 border border-white rounded-full text-sm">
              Sign Up
            </button>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center mt-16">
          <h1 className="text-[32px] font-semibold text-white mb-2">
            Welcome Back!
          </h1>
          <p className="text-sm text-white/80 mb-6">
            We missed you, Please provide your credential
          </p>

          {/* Inputs */}
          <div className="w-[400px] space-y-3">
            {/* Email */}
            <div className="flex items-center bg-white rounded-md px-3 h-[46px]">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-white rounded-md px-3 h-[46px]">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none text-sm"
              />
              <FaEye className="text-gray-400 cursor-pointer" />
            </div>

            {/* Forget Password */}
            <div className="text-right text-xs text-gray-700">
              Forget Password?
            </div>

            {/* Login Button */}
            <button className="w-full h-[46px] bg-[#07B4B0] text-white rounded-md font-medium mt-2">
              Log In
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-xs text-gray-500">or</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Buttons */}
            <div className="flex justify-between gap-4">
              <button className="flex-1 h-[44px] bg-white rounded-md shadow flex items-center justify-center">
                <FaFacebookF className="text-blue-600" />
              </button>
              <button className="flex-1 h-[44px] bg-white rounded-md shadow flex items-center justify-center">
                <FaApple className="text-black" />
              </button>
              <button className="flex-1 h-[44px] bg-white rounded-md shadow flex items-center justify-center">
                <FaGoogle className="text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
