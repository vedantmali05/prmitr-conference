import React from 'react';

// JSON data for all committees
const committeesData = [
    {
        title: 'International Advisory Board',
        members: [
            'Lance Fung, Director, IEEE Region 10, Australia',
            'Takako Hashimoto, Director Elect IEEE Region 10 Japan',
            'Kalyanmoy Deb, Distinguished Professor, MSU, USA',
            'Filbert Jauwono, Xi\'an Jiaotong-Liverpool University, China',
            'Paulo Mazzoncini de Azevedo Marques, University of São Paulo Brazil',
            'Paola Casti, University of Rome Tor Vergata, Rome Italy',
            'Baglio Salvatore, University of Catania, Italy',
        ],
    },
    {
        title: 'National Advisory Board',
        members: [
            'Deepak Mathur, Past Director IEEE Region 10',
            'Shashikant Patil, Interim Secretary and Treasurer IEEE Bombay Section',
            'Vikram Gadre, Professor, IIT Bombay',
            'Sudeb Dasgupta, IIT Roorkee',
            'Rambilas Pachori, IIT Indore',
            'Prabir Kumar Biswas, IIT Kharagpur',
            'Vinay Kulkarni, IIT Bombay',
            'Arvind Kumar, Center Head TCS Nagpur, India',
            'Shailesha Awale Center Head, HCL, Nagpur, India',
        ],
    },
    {
        title: 'General Chair',
        members: [
            'Mahendra Gaikwad, HoD, IT, GHRCE',
            'Laxman Thakare, HoD ETRX, GHRCE',
            'Atul Deshmukh, HoD ETC, GHRCE',
        ],
    },
    {
        title: 'Program Chair',
        members: [
            'Nirmal Mungale IT Department, GHRCE'
        ],
    },
    {
        title: 'Organising Chair',
        members: [
            'Santosh Jaju, Deputy Director & Dean R&D, GHRCE'
        ],
    },
    {
        title: 'Publication Chair',
        members: [
            'Narmada N. Utane IT Department, GHRCE',
            'Swapnil Choudhary, ETC Department, GHRCE',
            'Pankaj Ashtankar, ETRX Department, GHRCE'
        ]
    },
    {
        title: 'Registration & Finance Chair',
        members: [
            'Pramod Larokar, IT Department, GHRCE',
            'Amol Barhate, ETC Department, GHRCE',
            'Sneha Raut, ETRX Department, GHRCE'
        ]
    }
];

// Component for a single committee card
const CommitteeCard = ({ committee }) => (
    <div className="mb-8 break-inside-avoid">
        <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{committee.title}</h3>
        <div className="space-y-2">
            {committee.members.map((member, index) => (
                <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg shadow-sm bg-white">
                    <span className="flex items-center justify-center w-6 h-6 mr-4 text-sm font-bold text-white bg-purple-600 rounded-full">{index + 1}</span>
                    <p className="text-gray-700">{member}</p>
                </div>
            ))}
        </div>
    </div>
);

// Main Committees Component
const Committees = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Committees</h2>
                </div>

                {/* Masonry Layout Container */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
                    {committeesData.map((committee, index) => (
                        <CommitteeCard key={index} committee={committee} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Committees;