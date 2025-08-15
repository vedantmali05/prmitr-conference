import React, { useState } from 'react';

// JSON data for the places
const placesData = [
    {
        name: 'Chikhaldara',
        description: 'A beautiful hill station and the only coffee-growing region in Maharashtra, offering stunning viewpoints, waterfalls, and a rich variety of flora and fauna.',
        distance: '85 km',
        imageUrl: 'https://images.unsplash.com/photo-1613680382131-239b0d98563c?q=80&w=2070&auto=format&fit=crop',
    },
    {
        name: 'Melghat Tiger Reserve',
        description: 'A significant tiger reserve in India, it is a vast expanse of forest and a haven for wildlife enthusiasts and nature lovers. It is home to tigers, leopards, and many other species.',
        distance: '100 km',
        imageUrl: 'https://images.unsplash.com/photo-1599322384435-46c1a74278b0?q=80&w=1932&auto=format&fit=crop',
    },
    {
        name: 'Muktagiri',
        description: 'A scenic Jain pilgrimage center located in a picturesque valley, known for its 52 beautiful marble temples and a serene waterfall that flows through the complex.',
        distance: '150 km',
        imageUrl: 'https://images.unsplash.com/photo-1588248386490-205139353531?q=80&w=1935&auto=format&fit=crop',
    },
    {
        name: 'Shegaon',
        description: 'A renowned pilgrimage town famous for the samadhi of Shri Gajanan Maharaj. The Anand Sagar complex is a major attraction, featuring a temple, gardens, and recreational facilities.',
        distance: '150 km',
        imageUrl: 'https://images.unsplash.com/photo-1594102212224-911f0447a7b8?q=80&w=2070&auto=format&fit=crop',
    },
    {
        name: 'Narnala Fort',
        description: 'A historic hill fortress in the Satpura mountain range, comprising three distinct forts. It offers a glimpse into the region\'s rich history and provides panoramic views of the surrounding landscape.',
        distance: '125 km',
        imageUrl: 'https://images.unsplash.com/photo-1623459529538-2433a05be5d3?q=80&w=2070&auto=format&fit=crop',
    },
];

// Component for a single place card
const PlaceCard = ({ place }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
        <img src={place.imageUrl} alt={place.name} className="w-full h-40 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-900">{place.name}</h3>
            <p className="mt-2 text-gray-600 text-sm flex-grow">{place.description}</p>
            <p className="mt-4 text-sm font-semibold text-gray-800">Distance from Amravati: {place.distance}</p>
        </div>
    </div>
);

// Main Places Component with Carousel
const PlacesNearAmravati = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesPerView = 3;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        const maxIndex = placesData.length - slidesPerView;
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
    };

    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < placesData.length - slidesPerView;

    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Places Near Amravati</h2>

                <div className="relative">
                    <div className="overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)` }}
                        >
                            {placesData.map((place, index) => (
                                <div key={index} className="w-1/3 flex-shrink-0 px-2">
                                    <PlaceCard place={place} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        disabled={!canGoPrev}
                        className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        disabled={!canGoNext}
                        className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PlacesNearAmravati;
