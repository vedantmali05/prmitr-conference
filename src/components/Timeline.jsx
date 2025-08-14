import React from 'react';

// JSON data for the timeline events
const timelineData = [
  {
    date: 'TODAY',
    time: '17:00',
    title: 'Bergen International Film Festival',
    description: 'Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.',
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-800',
  },
  {
    date: '22 - 31 OCT',
    time: '10:00',
    title: 'Wool week',
    description: 'ULLVEKA 2021 will be held for the eighth time in the period 22 - 31 October 2021, and will take place in the entire Bergen region.',
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-800',
  },
  {
    date: '22 - 31 OCT',
    time: '19:00',
    title: 'Light park at Bergenhus Fortress',
    description: 'LUMAGICA - a magical experience for young and old at Bergenhus Fortress, 12 November to 19 December 2021.',
    bgColor: 'bg-red-100',
    textColor: 'text-red-800',
  },
  {
    date: '13 - 31 DEC',
    time: '10:00',
    title: 'Gingerbread City 2021',
    description: 'The world\'s largest Gingerbread Town can be found in the Xhibition shopping center, right in the center of Bergen.',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
  },
];

// Component for a single event card
const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex">
    {/* Date and Time Section */}
    <div className={`w-1/3 md:w-1/4 text-center p-4 ${event.bgColor} ${event.textColor}`}>
      <p className="text-sm font-semibold uppercase">{event.date}</p>
      <p className="text-3xl font-bold mt-1">{event.time}</p>
    </div>
    {/* Event Details Section */}
    <div className="p-4 w-2/3 md:w-3/4">
      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{event.description}</p>
    </div>
  </div>
);

// Main Timeline Component
const Timeline = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Events Timeline</h2>
        <div className="space-y-6">
          {timelineData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;