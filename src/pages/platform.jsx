import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Briefcase, 
  ChevronRight, 
  TrendingUp, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Users, 
  Award, 
  Building, 
  Clock,
  Check,
  Menu,
  X,
  Play
} from 'lucide-react';

const RedesignedPlatform = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar appearance change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-violet-100 to-orange-100 min-h-screen">
      {/* Enhanced Navigation Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8 relative">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex justify-start">
              <Link to="/" className="flex flex-shrink-0 items-center">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600">
                  JobPrepAI
                </h1>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center space-x-8 flex-1">
              <Link to="/howItWorks" className="text-gray-700 hover:text-indigo-600 text-sm font-medium">
                How it works
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 text-sm font-medium">
                About
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-indigo-600 text-sm font-medium">
                Pricing
              </Link>
              
              
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Log in
              </Link>
              <Link to="/signup" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-all">
                Sign up free
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/howItWorks" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50">
                How it works
              </Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50">
                About
              </Link>
              <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50">
                Pricing
              </Link>
              
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3">
                  <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
                    Log in
                  </Link>
                  <Link to="/signup" className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    Sign up free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Hero Section */}
      <div className="pt-20 max-w-7xl mx-auto relative">
        <div className="relative py-16 flex flex-col md:flex-row justify-between items-center px-4 sm:px-6">
          {/* Text and CTA */}
          <div className="max-w-xl text-center md:text-left md:w-1/2 z-10">
            <div className="pb-4">
              <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
                <Sparkles className="w-4 h-4 mr-2" /> AI-Powered Career Suite
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 xl:text-6xl leading-tight">
              Your Career Journey{' '}
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600">
                  Starts Here
                </span>
                <svg className="absolute -bottom-1 left-0 w-full h-3 text-yellow-300 z-0" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M0,5 Q40,15 100,5 L100,15 L0,15 Z" fill="currentColor" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              From resume creation to interview practice and job discovery - our AI-powered suite provides 
              everything you need to stand out and succeed in today's competitive job market.
            </p>

{/* Call to Action Buttons with Smooth Scroll */}
<div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
  <a
    href="#cards"
    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector('#cards').scrollIntoView({ 
        behavior: 'smooth' 
      });
    }}
  >
    Get Started Free
    <ArrowRight className="ml-2 w-5 h-5" />
  </a>
  <a
    href="#demo"
    className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-base font-medium rounded-full shadow-sm text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector('#demo').scrollIntoView({ 
        behavior: 'smooth' 
      });
    }}
  >
    Watch Demo
    <Play className="ml-2 w-5 h-5" />
  </a>
</div>

{/* CSS for smooth scrolling on all anchor links (alternative approach) */}
<style jsx global>{`
  html {
    scroll-behavior: smooth;
  }
`}</style>
            
            {/* Trust Badges */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by job seekers from</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 opacity-70">
                <img src="/companies/atlassian.svg" alt="Company logo" className="h-6" />
                <img src="/companies/google.webp" alt="Company logo" className="h-6" />
                <img src="/companies/meta.svg" alt="Company logo" className="h-6" />
                <img src="/companies/netflix.png" alt="Company logo" className="h-6" />
              </div>
            </div>
          </div>

          {/* Enhanced Hero Graphic */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative Elements */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

              {/* Main Image with Frame */}
              <div className="relative rounded-xl overflow-hidden border-4 border-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/api/placeholder/500/400"
                  alt="Career growth dashboard"
                  className="w-full"
                />
              </div>

              {/* Floating Elements with Enhanced Design */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center">
                  <TrendingUp className="w-7 h-7 text-green-500" />
                  <div className="ml-2">
                    <p className="text-xs text-gray-500">Success Rate</p>
                    <p className="text-sm font-bold text-gray-800">+85%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center">
                  <Brain className="w-7 h-7 text-purple-600" />
                  <div className="ml-2">
                    <p className="text-xs text-gray-500">AI Matches</p>
                    <p className="text-sm font-bold text-gray-800">Perfect Fit</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center">
                  <FileText className="w-7 h-7 text-blue-500" />
                  <div className="ml-2">
                    <p className="text-xs text-gray-500">Resume Score</p>
                    <p className="text-sm font-bold text-gray-800">98/100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Core Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">AI-Powered Career Tools</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to advance your career in one platform</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-xl border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Resume Builder</h3>
            <p className="text-gray-600 mb-4">AI-powered resume optimization that matches your experience to job descriptions and beats ATS systems.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">ATS keyword optimization</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Industry-specific templates</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Real-time feedback</span>
              </li>
            </ul>
            <a href="#" className="text-indigo-600 font-medium text-sm hover:text-indigo-800 flex items-center">
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-xl border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview Coach</h3>
            <p className="text-gray-600 mb-4">Practice with our AI interview simulator that provides real-time feedback on your responses.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Role-specific questions</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Response analysis</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Personalized coaching</span>
              </li>
            </ul>
            <a href="#" className="text-indigo-600 font-medium text-sm hover:text-indigo-800 flex items-center">
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-xl border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Discovery</h3>
            <p className="text-gray-600 mb-4">Find the perfect job with our AI matching system that connects your skills with ideal opportunities.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Personalized recommendations</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Skill gap analysis</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Salary insights</span>
              </li>
            </ul>
            <a href="#" className="text-indigo-600 font-medium text-sm hover:text-indigo-800 flex items-center">
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>

        
      {/* Cards Section with Improved Alignment */}
<div id="cards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Your Complete Career Toolkit
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Our four powerful platforms work together to give you the complete career advancement solution.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* All cards have consistent structure, padding, and height */}
    
    {/* Resume Builder Card */}
    <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-blue-100 hover:transform hover:-translate-y-1 relative flex flex-col h-full">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full opacity-70"></div>

      <div className="p-6 flex-grow relative">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <FileText className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Resume Builder</h3>
        </div>

        {/* Feature content with consistent height */}
        <div className="mb-6">
          <p className="text-gray-600 mb-4 line-clamp-3">
            Create standout resumes and cover letters tailored to specific job descriptions with our AI-powered tools.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-blue-500" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">ATS-optimized templates</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-blue-500" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">AI content suggestions</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-blue-500" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">Keyword optimization</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Button container with consistent position */}
      <div className="p-6 pt-0">
        <a
          href="https://resume-analyzer-25.vercel.app/dashboard"
          className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
        >
          Build Resume
        </a>
      </div>
    </div>

    {/* Mock.ai Card */}
    <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-orange-100 hover:transform hover:-translate-y-1 relative flex flex-col h-full">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full opacity-70"></div>

      <div className="p-6 flex-grow relative">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-orange-100 rounded-full">
            <Brain className="w-6 h-6 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Mock.ai</h3>
        </div>

        {/* Feature content with consistent height */}
        <div className="mb-6">
          <p className="text-gray-600 mb-4 line-clamp-3">
            Master your interview skills with AI-powered mock interviews. Get
            real-time feedback and improve your confidence.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">Real-time AI feedback</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">Industry-specific questions</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-orange-500" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">Performance analytics</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Button container with consistent position */}
      <div className="p-6 pt-0">
        <a
          href="https://ai-interview-smoky.vercel.app/"
          className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all"
        >
          Practice Interviews
        </a>
      </div>
    </div>

    {/* Placed Card */}
    <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-purple-100 hover:transform hover:-translate-y-1 relative flex flex-col h-full">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full opacity-70"></div>

      <div className="p-6 flex-grow relative">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-purple-100 rounded-full">
            <Briefcase className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Placed</h3>
        </div>

        {/* Feature content with consistent height */}
        <div className="mb-6">
          <p className="text-gray-600 mb-4 line-clamp-3">
            Connect with top companies and find your next career opportunity with our AI-powered job matching.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-purple-600" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">Skill-based matching</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-purple-600" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">Direct hiring manager contact</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-purple-600" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">Smart recommendations</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Button container with consistent position */}
      <div className="p-6 pt-0">
        <Link
          to="/platform"
          className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all"
        >
          Find Jobs
        </Link>
      </div>
    </div>

    {/* Industry Trends Card */}
    <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-teal-100 hover:transform hover:-translate-y-1 relative flex flex-col h-full">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-teal-100 rounded-bl-full opacity-70"></div>

      <div className="p-6 flex-grow relative">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-teal-100 rounded-full">
            <TrendingUp className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Industry Trends</h3>
        </div>

        {/* Feature content with consistent height */}
        <div className="mb-6">
          <p className="text-gray-600 mb-4 line-clamp-3">
            Stay ahead of the curve with real-time industry insights and skill demand analysis.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-teal-600" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">Industry forecasts</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-teal-600" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">Skill demand analysis</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-teal-600" />
                </div>
              </div>
              <span className="ml-2 text-gray-600">Career path mapping</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Button container with consistent position */}
      <div className="p-6 pt-0">
        <Link
          to="https://career-coach-red.vercel.app/dashboard"
          className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all"
        >
          Explore Trends
        </Link>
      </div>
    </div>
  </div>
</div>

      {/* Enhanced Stats Section */}
      <div className="bg-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Empowering Job Seekers Worldwide</h2>
            <p className="mt-2 text-indigo-200 max-w-2xl mx-auto">Our platform is helping thousands of professionals advance their careers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-indigo-800 bg-opacity-50 rounded-xl p-6 text-center transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <Users className="w-10 h-10 text-indigo-300" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">10,000+</p>
              <p className="text-indigo-200">Active Users</p>
            </div>
            <div className="bg-indigo-800 bg-opacity-50 rounded-xl p-6 text-center transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <Award className="w-10 h-10 text-indigo-300" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">85%</p>
              <p className="text-indigo-200">Success Rate</p>
            </div>
            <div className="bg-indigo-800 bg-opacity-50 rounded-xl p-6 text-center transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <Building className="w-10 h-10 text-indigo-300" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-indigo-200">Partner Companies</p>
            </div>
            <div className="bg-indigo-800 bg-opacity-50 rounded-xl p-6 text-center transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <Clock className="w-10 h-10 text-indigo-300" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">24/7</p>
              <p className="text-indigo-200">AI Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to transform your job search?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-blue-100">
                  Start using our AI-powered tools today and get ahead of the competition.
                </p>
              </div>
              <div className="mt-8 flex flex-shrink-0 lg:mt-0 lg:ml-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Get started free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white bg-opacity-80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <Link to="/" className="flex flex-shrink-0 items-center mb-4 md:mb-0">
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600">
                  JobPrepAI
                </h1>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">How it works</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Pricing</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Blog</a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Contact</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Terms
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-500 text-sm">© 2025 JobPrepAI. All rights reserved.</p>
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