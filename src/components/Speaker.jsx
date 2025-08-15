import React from 'react';

const Speaker = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Our Keynote Speaker
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 items-center">

                    {/* Left Column: Speaker Image */}
                    <div>
                        <img
                            className="rounded-lg object-cover w-full h-auto"
                            src="/src/assets/placeholder-image.jpg"
                            alt="Headshot of the keynote speaker"
                        />
                    </div>

                    {/* Right Column: Speaker Details */}
                    <div className="prose prose-lg max-w-none mt-8 lg:mt-0">
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">CEO & Visionary</p>
                        <h3 className="text-4xl font-bold text-gray-900 mt-1">
                            Dr. Aris Thorne
                        </h3>
                        <div className="border-t-2 border-gray-200 w-16 my-4"></div>
                        <p>
                            Dr. Aris Thorne is a pioneering force in the field of sustainable technology and artificial intelligence. With over two decades of experience, he has consistently driven innovation, leading several high-impact projects that bridge the gap between academic research and real-world application. His work is centered on developing AI-driven solutions to global environmental challenges, and he is a vocal advocate for ethical technology.
                        </p>
                        <p className="text-base text-gray-600">
                            Dr. Thorne holds a Ph.D. in Computer Science from Stanford University and a Master's in Environmental Engineering from MIT.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Speaker;
