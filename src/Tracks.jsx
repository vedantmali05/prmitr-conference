import React from 'react';

const Tracks = () => {
  const tracks = [
    { id: 1, title: "Signal, Image and Video Processing" },
    { id: 2, title: "Artificial Intelligence, Machine Learning Deep Learning" },
    { id: 3, title: "Generative Adversarial Network (GAN)" },
    { id: 4, title: "Communication Systems, IoT and Cloud Computing" },
    { id: 5, title: "Embedded System Design and Robotics" },
    { id: 6, title: "VLSI & Micro Electronics Devices, nanotechnology" },
    { id: 7, title: "Data Science, Security & Privacy" },
    { id: 8, title: "Next-Generation Computing and Applications" },
    { id: 9, title: "RF/Microwave/Terahertz / Technologies and Smart Antenna" },
    { id: 10, title: "Wireless Adhoc Network" },
    { id: 11, title: "Big Data Analytics" },
    { id: 12, title: "Biomedical Engineering and Healthcare Technologies" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          CONFERENCE <span className="text-purple-600">TRACKS</span>
        </h2>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
          Download CFP
        </button>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className="group bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-purple-400 hover:shadow-md transition-all duration-300"
          >
            {/* Animated Number */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-md flex items-center justify-center font-bold text-sm transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-purple-700">
                  <span className="transform transition-transform duration-500 group-hover:scale-125">
                    {track.id}
                  </span>
                </div>
                {/* Pulse animation on hover */}
                <div className="absolute inset-0 w-8 h-8 bg-purple-600 rounded-md opacity-0 group-hover:opacity-30 group-hover:animate-ping"></div>
              </div>
              
              {/* Track Title */}
              <div className="flex-1">
                <h3 className="text-gray-800 font-medium text-sm leading-relaxed group-hover:text-purple-700 transition-colors duration-300">
                  {track.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
