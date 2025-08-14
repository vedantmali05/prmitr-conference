import React from 'react';

// JSON data for the patrons
const patronsData = [
    {
        name: 'Jerome Bell',
        title: 'Co-founder, Chairman, Executive Director',
        imageUrl: '/src/assets/placeholder-image.jpg',
    },
    {
        name: 'Eleanor Pena',
        title: 'Chief Executive Officer',
        imageUrl: '/src/assets/placeholder-image.jpg',
    },
    {
        name: 'Robert Fox',
        title: 'Chief Technology Officer',
        imageUrl: '/src/assets/placeholder-image.jpg',
    },
    {
        name: 'Cameron Williamson',
        title: 'Head of Product',
        imageUrl: '/src/assets/placeholder-image.jpg',
    },
];

// Component for a single patron card
const PatronCard = ({ patron }) => (
    <div className="text-center">
        <img
            className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
            src={patron.imageUrl}
            alt={`Photo of ${patron.name}`}
        />
        <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8">
            {patron.name}
        </p>
        <p className="mt-2 text-base font-normal text-gray-600">
            {patron.title}
        </p>
    </div>
);

// Main Patrons Component
const Patrons = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                        Our Patrons
                    </h2>
                </div>

                <div className="grid max-w-6xl grid-cols-1 px-4 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
                    {patronsData.map((patron, index) => (
                        <PatronCard key={index} patron={patron} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Patrons;
