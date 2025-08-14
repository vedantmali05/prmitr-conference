import React from 'react';

const Footer = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 text-white py-12 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-6">
            {/* Contact Heading */}
            <h2 className="text-3xl font-bold text-white mb-6">
              CONTACT
            </h2>

            {/* Contact Name */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <span className="text-lg">John Doe - Project Manager</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="text-lg">contact@company.com</span>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span className="text-lg leading-relaxed">
                123 Business Street, Suite 100<br />
                New York, NY 10001<br />
                United States
              </span>
            </div>
          </div>

          {/* Right Side - Empty with Dummy Box */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-32 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <p className="text-white/60 text-sm">Placeholder Content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
