import React from 'react';

const Reviewer = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            CALL FOR <span className="text-purple-600">REVIEWER</span>
          </h2>

          {/* Content */}
          <div className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed text-left mb-6">
              We would also like to invite you to serve as a reviewer to help uphold the quality of submissions. 
              An electronic Certificate of Appreciation will be provided to all reviewers. If you are interested 
              and are not registered as a student at any institution, please register using the following button:
            </p>
            
            {/* Button */}
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => window.open('#', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              >
                Click to Register as Reviewer
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviewer;
