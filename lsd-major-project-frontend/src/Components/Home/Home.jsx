import React from 'react'
import axios from 'axios';
import { useState ,useEffect } from 'react';
import StorySection from '../StorySection/StorySection';
const Home = () => {
    const featuredStories = [
        {
            title: "The last time I saw her",
            category: "Drama, Romance",
            image: "/api/placeholder/400/320"
        },
        {
            title: "The man who wasn't there",
            category: "Thriller, Mystery",
            image: "/api/placeholder/400/320"
        },
        {
            title: "The house that time forgot",
            category: "Fantasy, Adventure",
            image: "/api/placeholder/400/320"
        }
    ];

    const collaborations = [
        {
            title: "The missing hour",
            category: "Mystery, Thriller",
            image: "/api/placeholder/400/320"
        },
        {
            title: "The secret of the old mansion",
            category: "Adventure, Mystery",
            image: "/api/placeholder/400/320"
        },
        {
            title: "The forgotten prophecy",
            category: "Fantasy, Adventure",
            image: "/api/placeholder/400/320"
        }
    ];

    const shortStories = [
        {
            title: "The lost sock",
            category: "Comedy",
            image: "/api/placeholder/400/320"
        },
        {
            title: "The talking cat",
            category: "Fantasy, Comedy",
            image: "/api/placeholder/400/320"
        },
        {
            title: "The magic potion",
            category: "Fantasy, Adventure",
            image: "/api/placeholder/400/320"
        }
    ];

    return (
        <div className="min-w-[175.8vh] min-h-screen bg-gray-950 p-8">
            <div className="max-w-7xl mx-auto">
                <StorySection title="Featured stories" stories={featuredStories} />
                <StorySection title="Recent collaborations" stories={collaborations} />
                <StorySection title="Jokes and short stories" stories={shortStories} />
            </div>
        </div>
    );
}


export default Home
