import React from 'react';

const TeamPage = () => {
  // Team hierarchy data
  const teamHierarchy = {
    principalInvestigators: [
      {
        id: 1,
        name: "Manasi Kumar",
        role: "Principal Investigator",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1735819438.png",
        bio: "Leading mental health research initiatives with extensive experience in clinical psychology."
      },
      {
        id: 2,
        name: "Anne Obondo",
        role: "Principal Investigator",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1731574918.png",
        bio: "Specializing in community mental health interventions and public health research."
      },
      {
        id: 3,
        name: "Caleb Othieno",
        role: "Principal Investigator",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1735818229.png",
        bio: "Expert in psychiatric epidemiology and mental health policy development."
      }
    ],
    coInvestigators: [
      {
        id: 4,
        name: "Fredrik Falkenström",
        role: "Co-Investigator",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1732609979.jpg",
        bio: "Focusing on psychotherapy research and treatment outcome studies."
      },
      {
        id: 5,
        name: "Keng-Yen Huang",
        role: "Co-Investigator",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1758960505_keng.jpg",
        bio: "Specialized in child and adolescent mental health research."
      },
      {
        id: 6,
        name: "Clara Paz",
        role: "Co-Investigator",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1735819061.jpg",
        bio: "Expert in global mental health and cross-cultural interventions."
      }
    ],
    collaborators: [
      {
        id: 7,
        name: "Ian Kanyanya",
        role: "Collaborator",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1732610011.jpg"
      },
      {
        id: 8,
        name: "Tom Mboya",
        role: "Collaborator",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1735816754.jpg"
      },
      {
        id: 9,
        name: "Hamid Dabholkar",
        role: "Collaborator",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1735818023.jpg"
      }
    ],
    researchers: [
      {
        id: 10,
        name: "Darius Nyamai",
        role: "Researcher",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1730585801.png"
      },
      {
        id: 11,
        name: "Vincent Nyongesa",
        role: "Researcher",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1730585982.png"
      },
      {
        id: 12,
        name: "Anne Mwendwa",
        role: "Researcher",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1732609899.jpg"
      },
      {
        id: 13,
        name: "Choudhury Nandini",
        role: "Researcher",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1732610080.jpg"
      },
      {
        id: 14,
        name: "Catherine Musyoka",
        role: "Researcher",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1733237619.jpg"
      },
      {
        id: 15,
        name: "Obadia Yator",
        role: "Researcher",
        image: "https://marbarafrica.co.ke/teams/thumbnail/1732610051.jpg"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Our Research Team
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Meet the dedicated professionals driving mental health research excellence across Africa. 
              Our multidisciplinary team brings together expertise from various fields to advance mental healthcare.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="bg-blue-600 bg-opacity-50 px-4 py-2 rounded-full text-sm font-semibold">
                🧠 15+ Researchers
              </span>
              <span className="bg-purple-600 bg-opacity-50 px-4 py-2 rounded-full text-sm font-semibold">
                🌍 4 Research Sites
              </span>
              <span className="bg-green-600 bg-opacity-50 px-4 py-2 rounded-full text-sm font-semibold">
                📊 20+ Active Studies
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Hierarchy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Team Structure
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Research Team Hierarchy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our organized research team structure with clear roles and responsibilities
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            {/* Level 1: Principal Investigators */}
            <div className="mb-16 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-8">Principal Investigators</h3>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {teamHierarchy.principalInvestigators.map((member) => (
                  <div key={member.id} className="bg-white rounded-xl shadow-md p-6 text-center min-w-[200px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-100">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://marbarafrica.co.ke/assets/images/avatar.png';
                        }}
                      />
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">{member.name}</h4>
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-center mb-8">
                <i className="fas fa-arrow-down text-blue-500 text-2xl animate-bounce"></i>
              </div>
            </div>

            {/* Level 2: Co-Investigators */}
            <div className="mb-16 text-center">
              <h3 className="text-2xl font-bold text-purple-600 mb-8">Co-Investigators</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {teamHierarchy.coInvestigators.map((member) => (
                  <div key={member.id} className="bg-white rounded-lg shadow-sm p-4 text-center min-w-[180px] transition-all duration-300 hover:shadow-md">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-4 border-purple-100">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://marbarafrica.co.ke/assets/images/avatar.png';
                        }}
                      />
                    </div>
                    <h4 className="font-bold text-gray-800 text-base mb-1">{member.name}</h4>
                    <span className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-semibold">
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-center mb-8">
                <i className="fas fa-arrow-down text-purple-500 text-2xl animate-bounce"></i>
              </div>
            </div>

            {/* Level 3: Collaborators and Researchers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Collaborators */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-600 mb-6">Collaborators</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {teamHierarchy.collaborators.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg shadow-sm p-3 text-center min-w-[140px] transition-all duration-300 hover:shadow-md">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full overflow-hidden border-4 border-green-100">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://marbarafrica.co.ke/assets/images/avatar.png';
                          }}
                        />
                      </div>
                      <h4 className="font-bold text-gray-800 text-sm mb-1">{member.name}</h4>
                      <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Researchers */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-orange-600 mb-6">Researchers</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {teamHierarchy.researchers.map((member) => (
                    <div key={member.id} className="bg-white rounded-lg shadow-sm p-3 text-center min-w-[140px] transition-all duration-300 hover:shadow-md">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full overflow-hidden border-4 border-orange-100">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://marbarafrica.co.ke/assets/images/avatar.png';
                          }}
                        />
                      </div>
                      <h4 className="font-bold text-gray-800 text-sm mb-1">{member.name}</h4>
                      <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Team Profiles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Leadership
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Principal Investigators & Co-Investigators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in mental health research, 
              clinical practice, and academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...teamHierarchy.principalInvestigators, ...teamHierarchy.coInvestigators].map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://marbarafrica.co.ke/assets/images/avatar.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      member.role.includes('Principal') 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-purple-600 text-white'
                    }`}>
                      {member.role}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white"
                      >
                        <i className="fab fa-twitter text-sm"></i>
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white"
                      >
                        <i className="fab fa-linkedin-in text-sm"></i>
                      </a>
                      <a 
                        href="#"
                        className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white"
                      >
                        <i className="fas fa-envelope text-sm"></i>
                      </a>
                    </div>
                    
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100 font-semibold">Researchers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">8</div>
                <div className="text-blue-100 font-semibold">Principal Investigators</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">12+</div>
                <div className="text-blue-100 font-semibold">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100 font-semibold">Publications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Join Our Research Network
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We're always looking for passionate researchers and mental health professionals 
              to collaborate with. Together, we can advance mental healthcare across Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-50 hover:shadow-lg">
                Become a Collaborator
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-blue-600">
                Research Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;