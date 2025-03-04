import React from 'react';
import { motion } from "framer-motion";
const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="relative overflow-hidden bg-transparent">
      {/* Floating Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 blur-3xl w-full h-full animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-bold text-center text-black sm:text-5xl md:text-6xl">
                <span className="block">Idea Behind</span>

                {/* Animated Text Gradient */}
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 inline-block"
                  initial={{ backgroundPosition: "200%" }}
                  animate={{ backgroundPosition: "0%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  JobPrepAI
                </motion.span>
              </h1>

              {/* Animated Paragraphs */}
              <motion.p
                className="mt-6 text-lg text-black"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                JobPrepAI was born out of a vision to empower job seekers with cutting-edge AI technology.
                We understand the challenges of job hunting—navigating interviews, preparing effectively,
                and finding the right opportunity. That's why we built a platform that seamlessly integrates
                AI-driven mock interviews with a powerful job search engine to help candidates succeed.
              </motion.p>

              <motion.p
                className="mt-4 text-lg text-black"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.7 }}
              >
                Our journey began with a simple idea: to bridge the gap between skills and opportunities.
                Today, we continue to evolve, helping thousands of candidates boost their confidence,
                refine their interview techniques, and land their dream jobs.
              </motion.p>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  


      {/* Main Content */}
      <div className="max-w-7xl mx- px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="mt-0 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Platform
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            JobPrepAI combines two powerful tools to help you succeed in your career journey
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Mock.ai Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="bg-blue-600 px-6 py-10">
                <h3 className="text-3xl font-bold text-white">Mock.ai</h3>
                <p className="mt-1 text-xl text-blue-100">Master Your Interviews</p>
              </div>
              <div className="px-6 py-8">
                <p className="text-gray-600 mb-6">
                  Mock.ai is designed for job seekers who want to build their interview confidence and skills.
                  Using advanced AI technology, we provide personalized interview practice.
                </p>
                <ul className="space-y-4">
                  {[
                    'Personalized interview practice sessions',
                    'Real-time feedback on your responses',
                    'Video and audio recording capabilities',
                    'Detailed analysis of your performance',
                    'Tips and strategies to improve'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Placed Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="bg-green-600 px-6 py-10">
                <h3 className="text-3xl font-bold text-white">Placed</h3>
                <p className="mt-1 text-xl text-green-100">Find Your Perfect Role</p>
              </div>
              <div className="px-6 py-8">
                <p className="text-gray-600 mb-6">
                  Placed is our comprehensive job portal that connects talented candidates with employers
                  seeking their skills. Browse listings filtered by your preferences.
                </p>
                <ul className="space-y-4">
                  {[
                    'Browse job listings by company or skills',
                    'Track your application status in real-time',
                    'Create a professional profile',
                    'Connect with qualified candidates',
                    'Post job opportunities (for employers)'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose JobPrepAI?
            </p>
          </div>
          <div className="mt-10 bg-indigo-100 rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <p className="text-gray-600">
                JobPrepAI offers a unique end-to-end solution for your career journey. Find exciting opportunities through Placed,
                then prepare to ace your interviews with Mock.ai. Our integrated platform gives you everything you need to land your dream job.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900">All-in-One Platform</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Search for jobs and prepare for interviews in one place, creating a seamless experience from job search to landing the position.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900">AI-Powered Tools</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Get personalized feedback and insights from our advanced AI to improve your interview skills and boost your confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Our Mission
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              At JobPrepAI, we're committed to transforming the job search process. By combining cutting-edge AI technology with practical job search tools,
              we aim to help every user build confidence, develop their skills, and connect with opportunities that match their talents and aspirations.
            </p>
            <div className="mt-8">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10">
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;