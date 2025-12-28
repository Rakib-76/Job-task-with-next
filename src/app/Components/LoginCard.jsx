// "use client";

// import { FaFacebookF, FaApple, FaGoogle, FaEnvelope, FaLock, FaEye } from "react-icons/fa";
// import { signIn } from "next-auth/react";
// import { useState } from "react";
// import { IoClose } from "react-icons/io5";

// const LoginCard = ({ onClose }) => {
//   const [isGoogleLoading, setIsGoogleLoading] = useState(false);

//   const handleGoogleLogin = async () => {
//     setIsGoogleLoading(true);
//     try {
//       await signIn("google", { callbackUrl: "/" });
//     } catch (error) {
//       console.error("Google login failed", error);
//       setIsGoogleLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center">
//       {/* Main Card */}
//       <div
//         className="w-full max-w-[960px] h-auto lg:h-[530px] rounded-[12px] overflow-hidden relative shadow-2xl mx-auto"
//         style={{
//           background: "linear-gradient(180deg, #07B4B0 0%, #CFF3F2 55%, #FFFFFF 100%)",
//         }}
//       >
//         {/* Close Button (Mobile/Desktop) */}
//         {onClose && (
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-50 p-2 bg-white/20 hover:bg-white/40 rounded-full transition text-white"
//           >
//             <IoClose size={24} />
//           </button>
//         )}

//         {/* Top Bar */}
//         <div className="flex items-center justify-between px-8 pt-6">
//           <div className="flex items-center gap-2 text-white font-bold text-lg">
//             LOGO
//           </div>
//           <div className="flex items-center gap-6 text-white">
//             <span className="text-sm cursor-pointer hover:underline">Login</span>
//             <button className="px-5 py-1.5 border border-white rounded-full text-sm hover:bg-white hover:text-[#07B4B0] transition">
//               Sign Up
//             </button>
//           </div>
//         </div>

//         {/* Center Content */}
//         <div className="flex flex-col items-center mt-8 lg:mt-16 px-4 pb-12 lg:pb-0">
//           <h1 className="text-2xl lg:text-[32px] font-semibold text-white mb-2 text-center">
//             Welcome Back!
//           </h1>
//           <p className="text-sm text-white/80 mb-6 text-center">
//             We missed you, Please provide your credential
//           </p>

//           {/* Inputs Container */}
//           <div className="w-full max-w-[400px] space-y-3">
//             {/* Email */}
//             <div className="flex items-center bg-white rounded-md px-3 h-[46px] transition-shadow focus-within:ring-2 focus-within:ring-[#07B4B0]">
//               <FaEnvelope className="text-gray-400 mr-2" />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full outline-none text-sm text-gray-700"
//               />
//             </div>

//             {/* Password */}
//             <div className="flex items-center bg-white rounded-md px-3 h-[46px] transition-shadow focus-within:ring-2 focus-within:ring-[#07B4B0]">
//               <FaLock className="text-gray-400 mr-2" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full outline-none text-sm text-gray-700"
//               />
//               <FaEye className="text-gray-400 cursor-pointer hover:text-gray-600" />
//             </div>

//             {/* Forget Password */}
//             <div className="text-right text-xs text-gray-700 hover:text-[#07B4B0] cursor-pointer">
//               Forget Password?
//             </div>

//             {/* Login Button */}
//             <button className="w-full h-[46px] bg-[#07B4B0] text-white rounded-md font-medium mt-2 hover:bg-[#069e9a] transition shadow-md hover:shadow-lg">
//               Log In
//             </button>

//             {/* Divider */}
//             <div className="flex items-center gap-3 my-4">
//               <div className="flex-1 h-px bg-gray-300"></div>
//               <span className="text-xs text-gray-500">or</span>
//               <div className="flex-1 h-px bg-gray-300"></div>
//             </div>

//             {/* Social Buttons */}
//             <div className="flex justify-between gap-4">
//               <button className="flex-1 h-[44px] bg-white rounded-md shadow flex items-center justify-center hover:bg-blue-50 transition group">
//                 <FaFacebookF className="text-blue-600 group-hover:scale-110 transition" />
//               </button>
//               <button className="flex-1 h-[44px] bg-white rounded-md shadow flex items-center justify-center hover:bg-gray-50 transition group">
//                 <FaApple className="text-black group-hover:scale-110 transition" />
//               </button>

//               {/* Google Button */}
//               <button
//                 onClick={handleGoogleLogin}
//                 // onClick={() => signIn("google")}
//                 disabled={isGoogleLoading}
//                 className="bg-white border px-4 py-2 rounded shadow hover:shadow-md flex items-center gap-2"
//                 // className="flex-1 h-[44px] bg-white rounded-md shadow flex items-center justify-center hover:bg-red-50 transition disabled:opacity-70 cursor-pointer group"
//                 title="Sign in with Google"
//               >
//                 {isGoogleLoading ? (
//                   <div className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
//                 ) : (
//                   <FaGoogle className="text-red-500 group-hover:scale-110 transition" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginCard;
