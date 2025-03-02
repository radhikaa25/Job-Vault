import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Briefcase, Play, Pause, ChevronRight } from 'lucide-react';

const RedesignedPlatform = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-gradient-to-br from-violet-100 to-orange-100 min-h-screen">
      {/* Navigation Bar */}
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8 relative">
        <div className="relative flex h-20 space-x-10 w-full items-center">
          <div className="flex justify-start">
            <Link to="/" className="flex flex-shrink-0 items-center">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600">
                JobPrepAI
              </h1>
            </Link>
          </div>
          <div className="flex justify-center space-x-8 flex-1">
            <Link to="/howItWorks" className="text-gray-700 hover:text-indigo-600 text-sm font-medium">
              How it works
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 text-sm font-medium">
              About
            </Link>
          </div>

         
        </div>
      </div>

      {/* Hero Section with Animated Graphics */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative py-12 flex flex-col md:flex-row justify-between items-center px-4 sm:px-6">
          {/* Text and CTA */}
          <div className="max-w-xl text-center md:text-left md:w-1/2 z-10">
            <div className="pb-4">
              <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
                Elevate your career journey
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 xl:text-6xl leading-tight">
              Your Career Journey{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600">
                Starts Here
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Choose your path: Practice interviews with AI or discover your next
              career opportunity. We're here to help you succeed every step of the way.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#cards"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#video"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
              >
                Watch Demo
                <Play className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Graphic */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative Elements */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

              {/* Main Image */}
              <img
                src="/api/placeholder/500/400"
                alt="Career growth illustration"
                className="relative rounded-lg shadow-2xl border-4 border-white"
              />

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-lg">
                <Brain className="w-8 h-8 text-orange-500" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-3 shadow-lg">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div id="video" className="bg-white bg-opacity-80 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch our short demo to understand how JobPrepAI can transform your job search and interview preparation.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
            {/* Video */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-900">
              <video
                ref={videoRef}
                src="https://cdnjs.cloudflare.com/ajax/libs/sample-videos/videos/dummy/720/cute_dog.mp4"
                className="w-full h-full object-cover"
                poster="/api/placeholder/1280/720"
                controls={false}
              ></video>
            </div>

            {/* Custom Video Control */}
            <button
              onClick={toggleVideo}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white bg-opacity-80 rounded-full p-5 shadow-lg hover:bg-opacity-100 transition-all">
                {isPlaying ? (
                  <Pause className="w-12 h-12 text-indigo-600" />
                ) : (
                  <Play className="w-12 h-12 text-indigo-600" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div id="cards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our two powerful platforms work together to give you the complete career advancement solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mock.ai Card */}
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-orange-100 hover:transform hover:-translate-y-1 relative">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full opacity-70"></div>

            <div className="p-8 relative">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Brain className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mock.ai</h3>
              </div>

              {/* Feature List with Icons */}
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  Master your interview skills with AI-powered mock interviews. Get
                  real-time feedback and improve your chances of landing your dream job.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-orange-500" />
                      </div>
                    </div>
                    <span className="ml-2 text-gray-600">Real-time AI feedback on responses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-orange-500" />
                      </div>
                    </div>
                    <span className="ml-2 text-gray-600">Industry-specific interview questions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-orange-500" />
                      </div>
                    </div>
                    <span className="ml-2 text-gray-600">Performance analytics and improvement tracking</span>
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/200"
                  alt="Mock Interview Demo"
                  className="w-full h-auto transition-transform hover:scale-105 duration-300"
                />
              </div>

              <div className="flex justify-center pt-4">
                <a
                  href="https://ai-interview-smoky.vercel.app/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all"
                >
                  Practice Interviews
                </a>
              </div>
            </div>
          </div>

          {/* Placed Card */}
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-purple-100 hover:transform hover:-translate-y-1 relative">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full opacity-70"></div>

            <div className="p-8 relative">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Placed</h3>
              </div>

              {/* Feature List with Icons */}
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  Connect with top companies and find your next career opportunity. Our
                  smart matching algorithm finds the perfect fit for your skills.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-purple-600" />
                      </div>
                    </div>
                    <span className="ml-2 text-gray-600">AI-powered job matching technology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-purple-600" />
                      </div>
                    </div>
                    <span className="ml-2 text-gray-600">Direct connections with hiring managers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-purple-600" />
                      </div>
                    </div>
                    <span className="ml-2 text-gray-600">Personalized job recommendations</span>
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/400/200"
                  alt="Job Platform Demo"
                  className="w-full h-auto transition-transform hover:scale-105 duration-300"
                />
              </div>

              <div className="flex justify-center pt-4">
                <Link
                  to="/platform"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all"
                >
                  Find Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stats Section */}
      <div className="bg-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-white mb-2">10,000+</p>
              <p className="text-indigo-200">Users</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-white mb-2">85%</p>
              <p className="text-indigo-200">Success Rate</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-indigo-200">Partner Companies</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-white mb-2">24/7</p>
              <p className="text-indigo-200">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white bg-opacity-80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2025 JobPrepAI. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          33% {
            transform: scale(1.1) translate(20px, -20px);
          }
          66% {
            transform: scale(0.9) translate(-20px, 20px);
          }
          100% {
            transform: scale(1) translate(0px, 0px);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default RedesignedPlatform;