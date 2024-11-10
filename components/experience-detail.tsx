"use client";

import { Star } from "lucide-react";
import Image from "next/image";

interface Experience {
  id: number;
  title: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
}

export default function ExperienceDetail({ experience }: { experience: Experience }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{experience.title}</h2>
          <div className="flex items-center mb-4">
            <Star className="text-yellow-400 mr-1" />
            <span className="text-gray-600">{experience.rating}</span>
            <span className="mx-2 text-gray-500">({experience.reviews} reviews)</span>
          </div>
          <p className="text-gray-700 mb-4">{experience.description}</p>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Category:</span>
            <span className="text-gray-800">{experience.category}</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-gray-600 mr-2">Location:</span>
            <span className="text-gray-800">{experience.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
