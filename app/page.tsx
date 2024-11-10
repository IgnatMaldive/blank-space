"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Search, MapPin, Star, Plus, Compass } from "lucide-react";
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

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Hidden Rooftop Garden",
    category: "Nature",
    location: "Downtown District",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop",
    description: "A peaceful urban oasis with stunning city views",
  },
  {
    id: 2,
    title: "Historic Food Market Tour",
    category: "Food & Drink",
    location: "Old Town",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop",
    description: "Explore local delicacies and cultural heritage",
  },
  {
    id: 3,
    title: "Sunset Kayak Adventure",
    category: "Activities",
    location: "Bay Area",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
    description: "Paddle through scenic waterways at dusk",
  },
];

// Main App Component
const CityExperiencesApp = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["All", "Activities", "Food & Drink", "Nature", "Nightlife"];

  const filteredExperiences = experiences.filter((exp) => {
    const matchesFilter = activeFilter === "All" || exp.category === activeFilter;
    const matchesSearch =
      exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12 md:py-16 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center mb-6 z-10"> {/* Added z-index */}
            <MapPin className="mr-2" />
            <h2 className="text-2xl font-semibold">San Francisco</h2>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto z-10"> {/* Added z-index */}

          <input
            type="text"
            placeholder="Search experiences..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 px-12 rounded-lg text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          />
            <Search className="absolute left-4 top-3.5 text-gray-400 z-10" /> {/* Added z-index */}
          </div>
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1545159639-3f3534aa074e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="San Francisco Cityscape"
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full object-cover mt-6"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 -mx-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Add Experience Button */}
        <div className="mb-8">
          <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors">
            <Plus className="mr-2" size={20} />
            Add Your Experience
          </button>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.length > 0 ? (
            filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No experiences found matching your criteria
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// Experience Card Component
const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <Link href={`/experiences/${experience.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-800">
            {experience.title}
          </h3>
          <div className="flex items-center">
            <Star className="text-yellow-400 w-4 h-4 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {experience.rating}
            </span>
          </div>
        </div>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          {experience.location}
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {experience.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full">
            {experience.category}
          </span>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CityExperiencesApp;
