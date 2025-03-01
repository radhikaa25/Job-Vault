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
  
  return (
    
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 ">
      {/* Hero Section - Redesigned with left text and right graphics */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 gap-8 mb-16">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-left">
          <p className="text-gray-700 mb-2">Easiest way to find a perfect job</p>
          
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-gray-800 mb-6">
            Find Your Next{' '} <br />
              <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600">
                Dream Job
              </span>
          </h1>
          
          <p className="text-gray-800 mb-8">
            Explore thousands of job listings or find the perfect candidate.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to={"/jobs"}>
              <Button variant="blue" size="xl">
                Find Jobs
              </Button>
            </Link>
            <Link to={"/post-job"}>
              <Button variant="destructive" size="xl">
                Post a Job
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Right Side - Graphics with animation */}
        <div className="md:w-1/2 relative h-[400px]">
          {/* Main illustration with interactive movement */}
          <div className="relative z-10 h-full">
            {/* Animated background circles */}
            <div 
              className="bg-orange-500 rounded-full absolute w-64 h-64 right-0 top-0 -z-10 transition-transform duration-500 ease-out"
              style={{ 
                transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` 
              }}
            ></div>
            <div 
              className="bg-teal-400 rounded-full absolute w-48 h-48 right-20 top-20 -z-10 transition-transform duration-700 ease-out"
              style={{ 
                transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)` 
              }}
            ></div>
            
            {/* Browser window with search - moves slightly with mouse */}
            <div 
              className="bg-gray-200 rounded-lg shadow-lg overflow-hidden max-w-md mx-auto transition-all duration-500 ease-out"
              style={{ 
                transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
                boxShadow: `${mousePosition.x * 10}px ${mousePosition.y * 10}px 20px rgba(0,0,0,0.1)`
              }}
            >
              {/* Browser header */}
              <div className="bg-orange-400 p-2 flex items-center">
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
                    className="bg-green-500 h-24 col-span-1 rounded transition-transform duration-300 ease-out"
                    style={{ transform: `translateY(${mousePosition.y * 5}px)` }}
                  ></div>
                  <div className="grid grid-rows-2 col-span-2 gap-2">
                    <div 
                      className="bg-purple-300 h-11 rounded transition-transform duration-300 ease-out"
                      style={{ transform: `translateX(${mousePosition.x * 8}px)` }}
                    ></div>
                    <div 
                      className="bg-green-500 h-11 rounded transition-transform duration-300 ease-out"
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

      {/* Companies Carousel Section */}
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="w-full py-20"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Card Section for Job Seekers and Employers */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 mb-16">
        <Card className="shadow-lg transition-all hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Search and apply for jobs from top companies across various
              industries.
            </p>
            <Link to="/find-jobs">
              <Button variant="blue" size="lg">
                Find Jobs
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="shadow-lg transition-all hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Post job openings and hire from a wide pool of qualified
              candidates.
            </p>
            <Link to="/post-job">
              <Button variant="destructive" size="lg">
                Post a Job
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="px-4 mb-20">
        <h2 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="mb-4">
              <AccordionTrigger className="text-xl font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-lg">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default LandingPage;
