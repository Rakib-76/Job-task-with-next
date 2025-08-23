import React from 'react'

export default function ServicesDetailspage({ params }) {
  const services = [
    {
      _id: "64cabc01f1e1a5b001a1a001",
      name: "Web Development",
      image: "https://i.postimg.cc/rFZkJNqh/standard-quality-control-concept-m-23-2150041853-1.jpg",
      details: "Professional web development services including frontend, backend, and full-stack solutions.",
      location: "Dhaka, Bangladesh"
    },
    {
      _id: "64cabc01f1e1a5b001a1a002",
      name: "Graphic Design",
      image: "https://i.postimg.cc/BZ1Yy55Y/standard-quality-control-concept-m-23-2150041847.jpg",
      details: "Creative logo, banner, and UI/UX design services with modern aesthetics.",
      location: "Chittagong, Bangladesh"
    },
    {
      _id: "64cabc01f1e1a5b001a1a003",
      name: "Digital Marketing",
      image: "https://i.postimg.cc/hvr7w32Q/business-concept-with-team-close-up-23-2149151159.avif",
      details: "Complete digital marketing campaigns including SEO, SEM, and social media marketing.",
      location: "Sylhet, Bangladesh"
    },
    {
      _id: "64cabc01f1e1a5b001a1a004",
      name: "Content Writing",
      image: "https://i.postimg.cc/FHtQ8sJc/flat-our-services-infographic-template-23-2149984852.avif",
      details: "Professional and SEO-optimized content writing services for blogs, websites, and more.",
      location: "Rajshahi, Bangladesh"
    },
    {
      _id: "64cabc01f1e1a5b001a1a005",
      name: "Mobile App Development",
      image: "https://i.postimg.cc/LsQDQDys/hand-drawn-our-services-infographic-template-23-2149889309.avif",
      details: "iOS and Android app development using React Native, Flutter, or native languages.",
      location: "Barisal, Bangladesh"
    },
    {
      _id: "64cabc01f1e1a5b001a1a006",
      name: "Video Editing",
      image: "https://i.postimg.cc/MKw7DgWD/paper-style-core-values-background-23-2149079276.avif",
      details: "Cinematic video editing services for YouTube, weddings, and commercials.",
      location: "Khulna, Bangladesh"
    },
    {
      _id: "64cabc01f1e1a5b001a1a007",
      name: "Photography",
      image: "https://i.postimg.cc/PJyPK343/standard-quality-control-collage-concept-23-2149595847.avif",
      details: "Event, product, and portrait photography with professional-grade equipment.",
      location: "Comilla, Bangladesh"
    },
    {
      _id: "64cabc01f1e1a5b001a1a008",
      name: "Home Cleaning Service",
      image: "https://i.postimg.cc/02HNQJHw/standard-quality-control-collage-concept-23-2149595850.avif",
      details: "Deep cleaning services for homes, offices, and commercial spaces.",
      location: "Dhaka, Bangladesh"
    },
    {
      _id: "64cabc01f1e1a5b001a1a009",
      name: "Online Tutoring",
      image: "https://i.postimg.cc/d14Yxzby/standard-quality-control-concept-m-23-2150041844.avif",
      details: "One-on-one and group tutoring for school, college, and competitive exams.",
      location: "Rangpur, Bangladesh"
    },
    {
      _id: "64cabc01f1e1a5b001a1a00a",
      name: "Car Repair & Maintenance",
      image: "https://i.postimg.cc/vBHRf04H/standard-quality-control-concept-m-23-2150041846.avif",
      details: "On-demand car repair, servicing, and diagnostics at your doorstep.",
      location: "Gazipur, Bangladesh"
    }
  ];
  const id = params.id;
  const singleData = services.find((data) => data._id == id);
  return (
    <div className='m-10'> 
      <h1 className='text-center font-bold'>ServicesDetailspage</h1>
      <div className='flex flex-row-reverse justify-center items-center p-10'> 
        <div>
          <img src={singleData.image} alt="" />
        </div>
        <div>
          <p>Name: {singleData._id}</p>
          <p>Details: {singleData.details}</p>
          <p>Locaation: {singleData.location}</p>
        </div>
      </div>

    </div>
  )
}
