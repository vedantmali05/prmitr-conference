import React from 'react';

// JSON data for the component's content
const instituteData = {
    date: 'Nov 19, 2021',
    mainHeader: "How to Create a Successful Environment Using Our College's Resources",
    imageUrl: "/src/assets/placeholder-image.jpg",
    imageAlt: "Students collaborating in a college setting",
    content: [
        {
            type: 'paragraph',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer metus, est, tristique fermentum tristique.',
        },
        {
            type: 'section',
            header: 'Get Everything from Scratch',
            paragraphs: [
                'Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer metus, est, tristique fermentum tristique.',
            ],
            listItems: [
                'Id elementum velit posuere vestibulum lectus id eu sollicitudin.',
                'Tellus amet bibendum sit mus phasellus quis duis lacus.',
                'Enim eget sagittis, auctor iaculis nulla semper.',
            ],
        },
        {
            type: 'section',
            header: 'Choose from 120+ UI Blocks',
            paragraphs: [
                'Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer metus, est, tristique fermentum tristique.',
                'Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer metus, est, tristique fermentum tristique.',
            ],
        },
        {
            type: 'section',
            header: 'More Dummy Content to Ensure Scrolling',
            paragraphs: [
                'Suspendisse potenti. Nullam ac tortor vitae purus faucibus tristique. In hac habitasse platea dictumst. Curabitur at lacus ac velit auctor sodales. Sed quis lorem et magna dignissim accumsan. Praesent in tortor hendrerit, interdum elit sed, consectetur nunc. Vivamus non arcu nec quam interdum ultricies.',
                'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum. Ut ut diam quis neque convallis lacinia. Quisque ut nisi, vitae nulla. Nam eu nulla quis ex tempor dapibus.',
            ]
        }
    ],
};

const AboutInstitute = () => {
    return (
        <div className="bg-white text-gray-800 font-sans mt-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main grid for the two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">

                    {/* Left Column: Sticky Image */}
                    <div className="relative lg:h-full">
                        <div className="lg:sticky lg:top-14 py-4">
                            <img
                                className="rounded-lg object-cover w-full h-full shadow-lg"
                                src={instituteData.imageUrl}
                                alt={instituteData.imageAlt}
                            />
                        </div>
                    </div>

                    {/* Right Column: Scrollable Content Rendered from JSON */}
                    <div className="prose prose-lg max-w-none mt-8 lg:mt-0">
                        <p className="text-sm text-gray-500">{instituteData.date}</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            {instituteData.mainHeader}
                        </h1>

                        {instituteData.content.map((block, index) => {
                            if (block.type === 'paragraph') {
                                return <p key={index}>{block.text}</p>;
                            }
                            if (block.type === 'section') {
                                return (
                                    <React.Fragment key={index}>
                                        {/* Added top margin to section headers for better separation */}
                                        <h2 className="mt-12">{block.header}</h2>
                                        {block.paragraphs && block.paragraphs.map((p, pIndex) => (
                                            <p key={pIndex}>{p}</p>
                                        ))}
                                        {block.listItems && (
                                            <ul>
                                                {block.listItems.map((item, lIndex) => (
                                                    <li key={lIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </React.Fragment>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInstitute;
