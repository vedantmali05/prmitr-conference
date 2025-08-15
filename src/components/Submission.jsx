import React from 'react';

const Submission = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      subtitle: "Initial Submission",
      description: "(Received) Full length papers received will be given paper ID** relevant to the conference topic and track.",
      icon: "📝",
      position: "left"
    },
    {
      id: 2,
      title: "Step 2",
      subtitle: "Under Screening",
      description: "(Under Screening) Initial screening review will be done by the Technical Program Committee of ICETET SIP '25. Initial screening includes relevance to the conference topic, plagiarism***, organization of the paper, quality of figures/diagrams/illustrations/equations and technical novelty etc.",
      icon: "🔍",
      position: "right"
    },
    {
      id: 3,
      title: "Step 3",
      subtitle: "Technical Review",
      description: "(Under Review) Papers that pass Step 2 will be forwarded to the technical review process.",
      icon: "📊",
      position: "left"
    },
    {
      id: 4,
      title: "Step 4",
      subtitle: "Decision Notification",
      description: "(Decision) The corresponding author will be notified of the outcome of the review process and the revised version of the manuscript shall be submitted within fifteen days from the date of intimation.",
      icon: "📧",
      position: "right"
    },
    {
      id: 5,
      title: "Step 5",
      subtitle: "Revision Process",
      description: "(Under Review) A revised version of the papers will be sent to reviewers to ensure that all the suggested corrections have been carried out. If the reviewer recommends minor revision, TPC may let the organizing Chair take the final call.",
      icon: "✏️",
      position: "left"
    },
    {
      id: 6,
      title: "Step 6",
      subtitle: "Final Decision",
      description: "(Accept / Reject) A final decision will be taken by the organizing chair based on the reviewers’/TPC’s recommendations and will be communicated to the corresponding authors.",
      icon: "⚖️",
      position: "right"
    },
    {
      id: 7,
      title: "Step 7",
      subtitle: "Camera Ready",
      description: "(CRP Received / Not Received) Status of the Camera Ready Paper after the acceptance.",
      icon: "📷",
      position: "left"
    },
    {
      id: 8,
      title: "Step 8",
      subtitle: "Registration Complete",
      description: "(REG Complete / Pending) Status of the registration.",
      icon: "✅",
      position: "right"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-12 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-200 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            PAPER <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">SUBMISSION</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow our streamlined 8-step process for paper submission and review
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-indigo-400 to-purple-400 rounded-full transform -translate-x-1/2"></div>

          {/* Steps */}
          <ol className="space-y-4 lg:space-y-6">
            {steps.map((step) => (
              <li
                key={step.id}
                className={`flex flex-col lg:flex-row items-center ${step.position === 'right' ? 'lg:flex-row-reverse' : ''} relative group`}
              >
                {/* Content Card */}
                <div className={`lg:w-5/12 ${step.position === 'right' ? 'lg:mr-8' : 'lg:ml-8'} relative`}>
                  {/* Step Number Circle */}
                  <div className={`absolute ${step.position === 'left' ? '-left-6 -top-6' : '-right-6 -top-6'} w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300 z-10 hidden lg:flex`}>
                    {step.id}
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-lg border border-purple-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:border-purple-300">
                    {/* Mobile Step Number */}
                    <div className="lg:hidden w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3 mx-auto">
                      {step.id}
                    </div>

                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{step.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                        <p className="text-purple-600 font-semibold text-sm">{step.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-left text-sm">
                      {step.description}
                    </p>

                    <div className="mt-3 flex justify-end">
                      <div className="w-6 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </li>
            ))}
          </ol>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 inline-block">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to Submit?</h3>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Submission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Submission;
