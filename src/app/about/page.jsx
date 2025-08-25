"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-white text-4xl font-bold mb-6 text-gray-800">About GadgetHub</h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          At GadgetHub, we are passionate about bringing the latest and most
          innovative gadgets to tech enthusiasts everywhere. From cutting-edge
          smartphones and smartwatches to unique accessories, our goal is to
          make technology accessible, exciting, and reliable for everyone.
        </p>
        <p className="text-white mb-12 max-w-2xl mx-auto">
          We believe in providing not just products, but <span className="font-semibold">experiences</span>—
          carefully curated, tested, and delivered with exceptional service.
          Whether you’re a casual user or a tech expert, GadgetHub is your trusted
          destination for all things gadgets.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className=" border-b-8 border-b-[#201235] border-r-8 border-r-[#201235] text-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
            <p className="text-white">Latest tech gadgets and accessories for everyone.</p>
          </div>
          <div className="border-b-8 border-b-[#201235] border-r-8 border-r-[#201235] text-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-white">Quick and reliable shipping to your doorstep.</p>
          </div>
          <div className="text-white p-6 rounded-lg shadow hover:shadow-lg transition border-b-8 border-b-[#201235] border-r-8 border-r-[#201235]">
            <h3 className="text-xl font-bold mb-2">Customer Support</h3>
            <p className="text-white">Friendly guidance and help whenever you need it.</p>
          </div>
          <div className="text-white p-6 rounded-lg shadow hover:shadow-lg transition border-b-8 border-b-[#201235] border-r-8 border-r-[#201235]">
            <h3 className="text-xl font-bold mb-2">Best Deals</h3>
            <p className="text-white">Competitive prices and exclusive offers.</p>
          </div>
        </div>

        <p className="text-white mt-12 font-semibold">
          "Innovate, Explore, and Upgrade Your Tech Life with GadgetHub!"
        </p>
      </div>
    </section>
  );
}
