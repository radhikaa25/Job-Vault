import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, FilePlus, Monitor, Briefcase, UserPlus, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-300">
      {/* Header */}
      <header className="pt-16 pb-14 text-center">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          How JobPrep Works
        </h1>
        <p className="text-lg text-indigo-900 font-bold max-w-2xl mx-auto">
          Your all-in-one platform for finding jobs and acing interviews
        </p>
      </header>

      {/* Process Navigation */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="flex justify-between items-center relative px-4">
          {/* Process steps with connecting line */}
          <div className="absolute h-1 bg-gray-200 top-1/2 left-0 right-0 -translate-y-1/2 z-0"></div>
          
          {[0, 1, 2].map((step) => (
            <button
              key={step}
              onClick={() => setActiveSection(step)}
              className={`relative z-10 flex flex-col items-center transition-all duration-300 ${
                activeSection === step ? 'scale-110' : 'opacity-70'
              }`}
            >
              <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-2 transition-colors duration-500 ${
                activeSection === step 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-purple-200' 
                  : activeSection > step 
                    ? 'bg-green-700' 
                    : 'bg-gray-100'
              }`}>
                {activeSection > step ? (
                  <CheckCircle className="h-6 w-6 text-white" />
                ) : (
                  <span className={`text-lg font-bold ${activeSection === step ? 'text-white' : 'text-gray-500'}`}>
                    {step + 1}
                  </span>
                )}
              </div>
              <span className={`font-medium ${activeSection === step ? 'text-blue-600' : 'text-gray-500'}`}>
                {step === 0 ? 'Sign Up' : step === 1 ? 'Choose Path' : 'Take Action'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-8xl mx-auto px-4 pb-20">
        <div className="relative overflow-hidden bg-transparent rounded-2xl shadow-xl min-h-[650px]">
          
          {/* Section 1: Sign Up */}
          <div 
            className={`absolute inset-0 p-8 transition-all duration-700 flex ${
              activeSection === 0 
                ? 'translate-x-0 opacity-100' 
                : activeSection < 0 
                  ? 'translate-x-full opacity-0' 
                  : '-translate-x-full opacity-0'
            }`}
          >
            <div className="w-full pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Getting Started with JobPrepAI
              </h2>
              <div className="mb-8">
                <div className="flex items-start mb-6">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit our platform</h3>
                    <p className="text-gray-600">
                      Go to JobPrepAI and you'll be presented with two primary options: Mock.AI and Placed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Create your account</h3>
                    <p className="text-gray-600">
                      Sign up with your email or use your LinkedIn to create a secure profile.
                    </p>
                  </div>
                </div>
                
               
              </div>
              
              <button 
                className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium flex items-center hover:shadow-lg transition-all duration-300"
                onClick={() => setActiveSection(1)}
              >
                Next Step <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="w-1/2 flex items-center justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl transform translate-y-4 rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105">
                <div className="bg-gray-800 h-6 flex items-center px-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex flex-col items-center justify-center text-white">
                  <UserPlus className="h-16 w-16 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Create Your Account</h3>
                  <p className="text-sm opacity-90 text-center">Sign up in seconds to access all JobPrep features</p>
                  <div className="mt-6 bg-white bg-opacity-20 p-4 rounded-lg w-full">
                    <div className="h-8 w-full bg-white bg-opacity-20 rounded mb-3"></div>
                    <div className="h-8 w-full bg-white bg-opacity-20 rounded mb-3"></div>
                    <div className="h-10 w-full bg-white bg-opacity-30 rounded flex items-center justify-center font-bold">
                      Get Started
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section 2: Choose Path */}
          <div 
            className={`absolute inset-0 p-8 transition-all duration-700 flex ${
              activeSection === 1 
                ? 'translate-x-0 opacity-100' 
                : activeSection < 1 
                  ? 'translate-x-full opacity-0' 
                  : '-translate-x-full opacity-0'
            }`}
          >
            <div className="w-1/2 pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Choose Your Path
              </h2>
              
              <div className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-700 flex items-center mb-3">
                  <Monitor className="mr-2 h-5 w-5" /> Mock Interview (MOCK.AI)
                </h3>
                <p className="text-gray-700 mb-4">
                  Practice for upcoming interviews with our AI-driven platform.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-600">Select job roles and skills to practice</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-600">Record your answers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <span className="text-blue-600 text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-600">Receive AI-driven feedback</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <h3 className="text-xl font-bold text-purple-700 flex items-center mb-3">
                  <Briefcase className="mr-2 h-5 w-5" /> Jobs Platform
                </h3>
                <p className="text-gray-700 mb-4">
                  Find or post job opportunities based on your role:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Candidate</h4>
                    <p className="text-gray-600 text-sm">Search and apply for jobs that match your skills</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Recruiter</h4>
                    <p className="text-gray-600 text-sm">Post jobs and review candidate applications</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium flex items-center hover:shadow-lg transition-all duration-300"
                onClick={() => setActiveSection(2)}
              >
                Next Step <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="w-1/2 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
                  <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                    <div className="h-3 w-full bg-blue-500"></div>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <Monitor className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">Mock Interview</h3>
                      <p className="text-sm text-gray-600 mb-4">Practice interviews with AI feedback</p>
                      <div className="flex space-x-2">
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Technical</span>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Behavioral</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                  <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                    <div className="h-3 w-full bg-purple-500"></div>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                        <Briefcase className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">Jobs Platform</h3>
                      <p className="text-sm text-gray-600 mb-4">Find or post job opportunities</p>
                      <div className="flex space-x-2">
                        <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Candidates</span>
                        <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Recruiters</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section 3: Take Action */}
          <div 
            className={`absolute inset-0 p-8 transition-all duration-700 flex ${
              activeSection === 2 
                ? 'translate-x-0 opacity-100' 
                : activeSection < 2 
                  ? 'translate-x-full opacity-0' 
                  : '-translate-x-full opacity-0'
            }`}
          >
            <div className="w-1/2 pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Take Action
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Search className="mr-2 h-5 w-5 text-blue-500" /> 
                    Find Jobs
                  </h3>
                  <p className="text-gray-600 mb-3">
                    For candidates: Browse available positions filtered by company, skills, or requirements.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                      Browse all available job listings
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                      Apply to positions that match your skills
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                      Track your application status
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <FilePlus className="mr-2 h-5 w-5 text-purple-500" /> 
                    Post Jobs
                  </h3>
                  <p className="text-gray-600 mb-3">
                    For recruiters: Create detailed job listings and manage candidate applications.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-purple-500" />
                      Create detailed job listings
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-purple-500" />
                      Specify required skills and qualifications
                    </li>
                   
                  </ul>
                </div>
              </div>
              
              <button 
                className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium flex items-center hover:shadow-lg transition-all duration-300"
                onClick={() => setActiveSection(0)}
              >
                Start Again
              </button>
            </div>
            
            <div className="w-1/2 flex items-center justify-center">
              <div className="relative">
                {/* Main screen */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden w-96">
                  <div className="h-14 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center px-4">
                    <div className="text-white font-medium">JobPrep Dashboard</div>
                  </div>
                  
                  <div className="p-5">
                    <div className="mb-4">
                      <h3 className="font-bold text-gray-800 mb-2">Available Actions</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-blue-50 border border-blue-100 p-3 rounded-lg flex flex-col items-center transform transition-transform hover:scale-105">
                          <Search className="h-8 w-8 text-blue-500 mb-2" />
                          <span className="text-sm font-medium text-gray-800">Find Jobs</span>
                        </button>
                        <button className="bg-purple-50 border border-purple-100 p-3 rounded-lg flex flex-col items-center transform transition-transform hover:scale-105">
                          <FilePlus className="h-8 w-8 text-purple-500 mb-2" />
                          <span className="text-sm font-medium text-gray-800">Post Jobs</span>
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Recent Jobs</h3>
                      <div className="space-y-3">
                        {[1].map((item) => (
                          <div key={item} className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium text-gray-800">Software Development Engineer</span>
                              <span className="text-sm text-blue-600">$120K-$150K</span>
                            </div>
                            <div className="text-sm text-gray-500 mb-2">Amazon</div>
                            <div className="flex space-x-2">
                              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">React</span>
                              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">Node.js</span>
                              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">Computer Network</span>
                              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">Python</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating notification */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg transform rotate-6 w-64 border-l-4 border-green-500 animate-pulse">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">Interview Scheduled!</h4>
                      <p className="text-xs text-gray-500">Your mock interview for Software Developer role is ready.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-full shadow-lg p-1 flex space-x-1">
          {[0, 1, 2].map((step) => (
            <button
              key={step}
              onClick={() => setActiveSection(step)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeSection === step ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;