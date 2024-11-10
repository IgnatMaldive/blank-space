"use client"
import React, { useState } from 'react';
import { Search, MapPin, Star, Plus, Compass } from 'lucide-react';

// Main App Component
const CityExperiencesApp = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample data - in a real app this would come from an API
  const experiences = [
    {
      id: 1,
      title: "Hidden Rooftop Garden",
      category: "Nature",
      location: "Downtown District",
      rating: 4.8,
      reviews: 124,
      image: "/api/placeholder/400/250",
      description: "A peaceful urban oasis with stunning city views"
    },
    {
      id: 2,
      title: "Historic Food Market Tour",
      category: "Food & Drink",
      location: "Old Town",
      rating: 4.9,
      reviews: 89,
      image: "/api/placeholder/400/250",
      description: "Explore local delicacies and cultural heritage"
    },
    {
      id: 3,
      title: "Sunset Kayak Adventure",
      category: "Activities",
      location: "Bay Area",
      rating: 4.7,
      reviews: 156,
      image: "/api/placeholder/400/250",
      description: "Paddle through scenic waterways at dusk"
    }
  ];

  const filters = ['All', 'Activities', 'Food & Drink', 'Nature', 'Nightlife'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <MapPin className="mr-2" />
            <h2 className="text-2xl font-semibold">San Francisco</h2>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search experiences..."
              className="w-full py-3 px-12 rounded-lg text-gray-800 shadow-lg"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200'
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
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </main>
    </div>
  );
};

// Experience Card Component
const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={experience.image}
        alt={experience.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{experience.title}</h3>
          <div className="flex items-center">
            <Star className="text-yellow-400 w-4 h-4 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{experience.rating}</span>
          </div>
        </div>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          {experience.location}
        </div>
        <p className="mt-2 text-sm text-gray-600">{experience.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full">
            {experience.category}
          </span>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityExperiencesApp;