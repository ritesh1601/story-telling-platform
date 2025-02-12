import React from 'react'
import StoryCard from '../StoryCard/StoryCard';
const StorySection = ({ title, stories }) => {
    return (
        <section className="mb-20 w-full">
            <h2 className="text-white text-3xl font-semibold mb-10">{title}</h2>
            <div className="space-y-8 w-full">
                {stories.map((story, index) => (
                    <StoryCard
                        key={index}
                        image={story.image}
                        title={story.title}
                        category={story.category}
                        onClick={() => console.log(`Reading ${story.title}`)}
                    />
                ))}
            </div>
        </section>
    )
}

export default StorySection
