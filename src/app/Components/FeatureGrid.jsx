"use client";

// import { FaPalette, FaLeaf, FaTint, FaFire, FaBolt, FaSeedling, FaCogs } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const FeatureGrid = () => {
  const cardsData = [
    { image: "/dyeing.png", title: "Dyeing", description: "Adding color to biodegradable of  materials" },
    { image: "/cutting.png", title: "Cutting", description: "Eco-friendly clothing items for all shapes and sizes" },
    { image: "/machine.png", title: "Sewing", description: "Vouching for the ultimate sturdiness and durability of the fabric" },
    { image: "/niddle.png", title: "Snipping of thread", description: "A neat edge, a soft and smooth finish" },
    { image: "/iron.png", title: "Ironing", description: "Ironing it before shipping" },
    { image: "/checking.png", title: "Checking", description: "Going through each clothing piece to ensure supreme quality standards are met" },
    { image: "/pachageing.png", title: "Package", description: "Folding and packing with the utmost care" },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 mt-10">
      <div className="-mt-20">
        {/* First row: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {cardsData.slice(0, 4).map((card, index) => (
            <FeatureCard
              key={index}
              number={index + 1}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* Second row: 3 cards centered */}
        <div className="flex justify-center gap-6">
          {cardsData.slice(4, 7).map((card, index) => (
            <FeatureCard
              key={index + 4}
              number={index + 5}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
