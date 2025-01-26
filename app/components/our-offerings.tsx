
import React, { useEffect, useState } from "react";
import Carousel from "@/app/components/carousel";
import { getOurOfferings } from "@/lib/api";

interface Farmland {
    title: string;
    description: string;
    images: string[];
    location: string;
    price: string;
    managedCrops: string;
    ctaUrl: string;
  }


export default async function OurOfferings(){
    const data = await getOurOfferings();
    console.log("farmland data========>", JSON.stringify(data));
    const farmlands:Farmland[] = data.map((item: any) => ({
        title: item.title,
        description: item.description,
        images: item.imagesCollection.items.map((img: any) => img.url),
        location: item.location,
        price: item.price,
        managedCrops: item.managedCrops,
      }));
    
    
    
  return (
    <section id="our-offerings" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Explore Our Farmlands
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Invest in the best-managed farmlands. Browse through our available properties.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {farmlands.map((farmland) => (
            <div
              key={farmland.title}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
            >
              {/* Carousel */}
              <Carousel images={farmland.images} />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {farmland.title}
                </h3>
                <p className="text-gray-600 mt-1">
                  <strong>Location:</strong> {farmland.location}
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>Managed Crops:</strong> {farmland.managedCrops}   
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>Price:</strong> {farmland.price}
                </p>
                <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

