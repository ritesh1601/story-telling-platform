import React from 'react'
const StoryCard = ({ image, title, category, onClick }) => {
    return (
        <div className="flex items-center w-full bg-gray-900 rounded-lg overflow-hidden mb-4 hover:bg-gray-800 transition-colors">
            <div className="w-1/3 h-56 relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1 px-8">
                <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-400 text-lg">{category}</p>
            </div>
            <button
                onClick={onClick}
                className="bg-blue-600 text-white px-8 py-3 rounded-md mr-8 hover:bg-blue-700 transition-colors text-lg"
            >
                Read
            </button>
        </div>
    )
}

export default StoryCard
