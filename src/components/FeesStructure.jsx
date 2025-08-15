import React from 'react';

const FeesStructure = () => {
  const feesData = [
    {
      id: 1,
      category: "Registration Fee",
      description: "Early bird registration for conference",
      amount: 2500.00
    },
    {
      id: 2,
      category: "Publication Fee",
      description: "Paper publication in proceedings",
      amount: 1500.00
    },
    {
      id: 3,
      category: "Workshop Fee",
      description: "Technical workshop participation",
      amount: 800.00
    },
    {
      id: 4,
      category: "Certificate Fee",
      description: "Participation certificate processing",
      amount: 200.00
    },
    {
      id: 5,
      category: "Kit Fee",
      description: "Conference kit and materials",
      amount: 300.00
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-md">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Fees Structure
          </h2>

          {/* Fees Items */}
          <div className="space-y-4 mb-6">
            {feesData.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {item.category}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-bold text-gray-800 text-lg ml-4">
                    ₹{item.amount.toFixed(2)}
                  </span>
                </div>
                {/* Separator line */}
                {item.id !== feesData.length && (
                  <div className="border-b border-gray-100"></div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeesStructure;
