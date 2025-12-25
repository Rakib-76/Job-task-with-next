"use client";

import { FaShoppingCart, FaHeart, FaEye, FaShareAlt } from "react-icons/fa";

const products = [
  { id: 1, name: "Woman Apparel", price: "৳ 1,000.00 - ৳ 1,00,00.00", img: "/model.jpg" },
  { id: 2, name: "Man Apparel", price: "৳ 1,000.00 - ৳ 1,00,00.00", img: "/zym.jpg" },
  { id: 3, name: "Sports Wear", price: "৳ 1,000.00 - ৳ 1,00,00.00", img: "/jents.jpg" },
  { id: 4, name: "Nightwear", price: "৳ 1,000.00 - ৳ 1,00,00.00", img: "/lady.jpg" },
];

const ProductSection = () => {
  return (
    <section className="py-10 px-5 md:px-20 mx-auto max-w-[1440px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-['Roboto'] font-bold text-[32px] text-[#000000]">
          Our Apparels
        </h2>

        <a href="#" className="font-['Poppins'] font-normal text-[16px] text-[#000000] underline">
          See All Products
        </a>

      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow relative overflow-hidden group"
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[270px] object-cover"
            />

            {/* Hover Icons */}
            <div className="absolute top-2 right-2 flex flex-col gap-3 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <button className="bg-white p-3 rounded-full shadow text-orange-500 transition">
                <FaHeart />
              </button>
              <button className="bg-white p-3 rounded-full shadow text-orange-500  transition">
                <FaEye />
              </button>
              <button className="bg-white p-3 rounded-full shadow text-orange-500  transition">
                <FaShareAlt />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-urbanist  font-semibold text-[18px] text-black mb-1">
                {product.name}
              </h3>

              <p className="font-urbanist font-semibold text-[22px] text-black mb-3">
                {product.price}
              </p>

              {/* Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1 bg-[#cdf0ef] text-gray-800 rounded hover:bg-[#9fdcdc] transition">
                  <FaShoppingCart /> Add To Cart
                </button>
                <button className="flex-1 px-3 py-1 bg-[#07b4b0] text-white rounded hover:bg-[#049494] transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
