import React from 'react';

const Acknowledgment = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Acknowledgment
          </h2>

          {/* Content */}
          <div className="rounded-lg p-8 ">
            <p className="text-lg text-gray-700 leading-relaxed text-left">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
              This service was provided for free by Microsoft and they bore all expenses, including costs for 
              Azure cloud services as well as for software development and support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Acknowledgment;
