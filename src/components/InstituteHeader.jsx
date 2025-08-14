import React from 'react';

const InstituteHeader = () => {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          
          {/* Left Logo */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-6 lg:mb-0 flex justify-center">
            <a href="#">
              <img 
                src="https://mitra.ac.in/images/logo1%20-%20Copy%201.png" 
                alt="Institute Logo" 
                className="h-24 w-auto"
              />
            </a>
          </div>

          {/* Center Text */}
          <div className="w-full lg:w-8/12 px-4 mb-6 lg:mb-0 text-center">
            <p className="text-base font-bold text-gray-800 mb-0">
              Vidarbha Youth Welfare Society's
            </p>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              Prof. Ram Meghe Institute of Technology and Research
              <br />
              Badnera - Amravati 444701(MS)
            </h1>
            <p className="text-sm font-bold text-gray-700 mb-1">
              (Formerly College of Engineering, Badnera) - Estd. 1983
            </p>
            <p className="text-xl font-bold text-red-600 mb-1">
              An Autonomous Institute
            </p>
            <p className="text-sm font-bold text-gray-700">
              (Affiliated to Sant Gadge Baba Amravati University)
            </p>
          </div>

          {/* Right Logo */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 flex flex-col items-center justify-center">
            <img 
              src="https://mitra.ac.in/images/logo2%20-%20Copy%202.png" 
              alt="NAAC Logo" 
              className="h-24 w-auto"
            />
            <p className="text-red-600 text-center font-bold text-base mt-1">
              CGPA 3.43
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstituteHeader;
