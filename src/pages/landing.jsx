import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Star, CheckCircle, ArrowRight, Users, Briefcase, TrendingUp } from "lucide-react"; 

const LandingPage = () => {
  // State to track mouse position for interactive movement
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Set up mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Demo testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Software Engineer",
      company: "TechGrowth Inc.",
      avatar: "/api/placeholder/64/64",
      content: "I found my dream job through this platform in just two weeks! The process was smooth and the recommendations were spot-on for my skills and experience.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Brand Solutions",
      avatar: "/api/placeholder/64/64",
      content: "As someone who was looking to transition to a new industry, this platform provided invaluable resources and connections. Highly recommend!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "HR Manager",
      company: "Global Innovations",
      avatar: "/api/placeholder/64/64",
      content: "From an employer's perspective, the quality of candidates we've found here has been exceptional. The matching algorithm truly works!",
      rating: 4
    }
  ];
  
  // Demo job categories
  const jobCategories = [
    { id: 1, name: "Technology", count: 1243, icon: "💻" },
    { id: 2, name: "Healthcare", count: 879, icon: "🏥" },
    { id: 3, name: "Finance", count: 654, icon: "💰" },
    { id: 4, name: "Education", count: 521, icon: "🎓" },
    { id: 5, name: "Marketing", count: 432, icon: "📊" },
    { id: 6, name: "Design", count: 387, icon: "🎨" }
  ];
  
  // Stats for counter section
  const stats = [
    { id: 1, label: "Jobs Posted", value: "10,000+", icon: <Briefcase className="h-6 w-6 text-blue-600" /> },
    { id: 2, label: "Active Candidates", value: "50,000+", icon: <Users className="h-6 w-6 text-orange-500" /> },
    { id: 3, label: "Successful Hires", value: "8,500+", icon: <CheckCircle className="h-6 w-6 text-green-600" /> },
    { id: 4, label: "Company Growth", value: "27% Avg", icon: <TrendingUp className="h-6 w-6 text-purple-600" /> }
  ];
  
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      {/* Hero Section - Redesigned with left text and right graphics */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 gap-8 mb-16 w-full">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-left">
          <p className="text-blue-600 font-semibold mb-2">Easiest way to find a perfect job</p>
          
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-800 mb-6">
            Find Your Next{' '} <br />
              <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600">
                Dream Job
              </span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Explore thousands of job listings with personalized matches or find the perfect candidate for your company's needs.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to={"/jobs"}>
              <Button variant="blue" size="xl" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-lg transition-all shadow-lg hover:shadow-xl">
                Find Jobs
              </Button>
            </Link>
            <Link to={"/post-job"}>
              <Button variant="destructive" size="xl" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg rounded-lg transition-all shadow-lg hover:shadow-xl">
                Post a Job
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Right Side - Graphics with animation */}
        <div className="md:w-1/2 relative h-[400px] z-10">
          {/* Main illustration with interactive movement */}
          <div className="relative z-10 h-full">
            {/* Animated background circles */}
            <div 
              className="bg-orange-500 opacity-80 rounded-full absolute w-64 h-64 right-0 top-0 -z-10 transition-transform duration-500 ease-out"
              style={{ 
                transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` 
              }}
            ></div>
            <div 
              className="bg-teal-400 opacity-80 rounded-full absolute w-48 h-48 right-20 top-20 -z-10 transition-transform duration-700 ease-out"
              style={{ 
                transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)` 
              }}
            ></div>
            
            {/* Browser window with search - moves slightly with mouse */}
            <div 
              className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md mx-auto transition-all duration-500 ease-out border border-gray-100"
              style={{ 
                transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
                boxShadow: `${mousePosition.x * 10}px ${mousePosition.y * 10}px 20px rgba(0,0,0,0.1)`
              }}
            >
              {/* Browser header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 flex items-center">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
              </div>
              
              {/* Browser content with subtle movement */}
              <div className="p-4">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div 
                    className="bg-green-500 h-24 col-span-1 rounded-lg transition-transform duration-300 ease-out"
                    style={{ transform: `translateY(${mousePosition.y * 5}px)` }}
                  ></div>
                  <div className="grid grid-rows-2 col-span-2 gap-2">
                    <div 
                      className="bg-purple-300 h-11 rounded-lg transition-transform duration-300 ease-out"
                      style={{ transform: `translateX(${mousePosition.x * 8}px)` }}
                    ></div>
                    <div 
                      className="bg-blue-400 h-11 rounded-lg transition-transform duration-300 ease-out"
                      style={{ transform: `translateX(${mousePosition.x * -8}px)` }}
                    ></div>
                  </div>
                </div>
                
                {/* Simplified person with magnifying glass - more pronounced movement */}
                <div className="relative h-36">
                  <div 
                    className="absolute right-0 bottom-0 w-32 transition-transform duration-500 ease-out"
                    style={{ 
                      transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 15}px)` 
                    }}
                  >
                    <div className="relative">
                      {/* Magnifying glass with rotation effect */}
                      <div 
                        className="absolute w-24 h-24 border-8 border-navy-900 rounded-full right-0 transition-transform duration-300"
                        style={{ 
                          transform: `rotate(${mousePosition.x * 8}deg)` 
                        }}
                      ></div>
                      <div 
                        className="absolute w-8 h-24 bg-navy-900 rounded-full transform rotate-45 right-5 bottom-5 transition-transform duration-300"
                        style={{ 
                          transform: `rotate(${45 + mousePosition.x * 15}deg)` 
                        }}
                      ></div>
                      
                      {/* Simplified person with subtle floating animation */}
                      <div 
                        className="absolute right-20 bottom-0 transition-all duration-500 ease-out"
                        style={{ 
                          transform: `translateY(${Math.sin(Date.now() / 1000) * 6}px)` 
                        }}
                      >
                        <div className="w-10 h-10 rounded-full bg-navy-900"></div>
                        <div className="w-16 h-24 bg-purple-300 rounded-t-lg relative">
                          <div className="absolute w-full h-2 bg-navy-900 top-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative dots with subtle animation */}
          <div 
            className="absolute bottom-0 left-0 transition-transform duration-700 ease-out"
            style={{ 
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 20}px)` 
            }}
          >
            <div className="grid grid-cols-6 gap-1">
              {[...Array(24)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 rounded-full bg-purple-300 transition-all duration-300"
                  style={{ 
                    transform: `scale(${1 + Math.sin((Date.now() / 1000) + i * 0.5) * 0.2})`,
                    opacity: 0.7 + Math.sin((Date.now() / 1000) + i * 0.5) * 0.3
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    
      {/* NEW: Stats Counter Section */}
      <section className="py-12 w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg border border-gray-100">
                <div className="mb-3 p-3 bg-gray-50 rounded-full">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-2 text-gray-800">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Carousel Section - Enhanced with title */}
      <section className="bg-white bg-opacity-80 py-20 mt-20 w-full">
        <div className="w-full px-4 md:px-8 lg:px-16 mb-10">
          <h2 className="text-3xl font-bold text-center mb-10">Trusted by Leading Companies</h2>
          <Carousel
            plugins={[Autoplay({ delay: 2000 })]}
            className="w-full"
          >
            <CarouselContent className="flex gap-5 sm:gap-20 items-center">
              {companies.map(({ name, id, path }) => (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <img
                    src={path}
                    alt={name}
                    className="h-9 sm:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Card Section for Job Seekers and Employers - Enhanced */}
      <section className="py-20 w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">We connect talent with opportunity through our powerful platform</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="shadow-lg transition-all hover:scale-105 border-t-4 border-t-blue-600">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Users className="mr-2 h-6 w-6 text-blue-600" />
                  For Job Seekers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Search and filter jobs based on your skills and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Apply with one click using your profile</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Get personalized job recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Track application status in real-time</span>
                  </li>
                </ul>
                <Link to="/jobs">
                  <Button variant="blue" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Find Jobs
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="shadow-lg transition-all hover:scale-105 border-t-4 border-t-orange-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Briefcase className="mr-2 h-6 w-6 text-orange-500" />
                  For Employers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Post job openings with detailed requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access a diverse pool of qualified candidates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>AI-powered matching with suitable applicants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Streamlined hiring workflow and analytics</span>
                  </li>
                </ul>
                <Link to="/post-job">
                  <Button variant="destructive" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Post a Job
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW: Job Categories Section */}
      <section className="bg-white bg-opacity-80 py-16 mt-12 w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-4">Explore Job Categories</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Browse opportunities across industries and find the perfect role for your skills and experience</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category) => (
              <Link to={`/jobs/category/${category.id}`} key={category.id}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-100 flex items-center">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                    <p className="text-gray-600">{category.count} open positions</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/categories">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Testimonials Section */}
      <section className="py-16 w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-4">What People Say</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Hear from job seekers and employers who've found success on our platform</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 relative">
                {/* Rating stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: CTA Section */}
      <section className="bg-opacity-80 mt-12 py-20 bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 text-white w-full">
        <div className="w-full px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take the Next Step in Your Career?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90">Join thousands of professionals who've found their dream jobs through our platform</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/jobs">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                Browse Jobs
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-16 w-full">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Find answers to common questions about our platform</p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="mb-4 border rounded-lg">
                  <AccordionTrigger className="text-xl font-semibold p-4 hover:bg-gray-50">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-lg p-4 pt-0">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
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
    </main>
  );
};

export default LandingPage;