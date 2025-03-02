import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { State } from "country-state-city";
import { BarLoader } from "react-spinners";
import useFetch from "@/hooks/use-fetch";
import { Search, MapPin, Building, X, Briefcase } from "lucide-react";

import JobCard from "@/components/job-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getCompanies } from "@/api/apiCompanies";
import { getJobs } from "@/api/apiJobs";

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);

  const { isLoaded } = useUser();

  const {
    data: companies,
    fn: fnCompanies,
  } = useFetch(getCompanies);

  const {
    loading: loadingJobs,
    data: jobs,
    fn: fnJobs,
  } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) {
      fnCompanies();
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) fnJobs();
    
    // Update active filters
    const newFilters = [];
    if (searchQuery) newFilters.push({ type: 'search', value: searchQuery });
    if (location) newFilters.push({ type: 'location', value: location });
    if (company_id && companies) {
      const companyName = companies.find(c => c.id === company_id)?.name;
      if (companyName) newFilters.push({ type: 'company', value: companyName });
    }
    setActiveFilters(newFilters);
    
  }, [isLoaded, location, company_id, searchQuery, companies]);

  const handleSearch = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    const query = formData.get("search-query");
    if (query) setSearchQuery(query);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setCompany_id("");
    setLocation("");
  };
  
  const removeFilter = (type) => {
    if (type === 'search') setSearchQuery("");
    if (type === 'location') setLocation("");
    if (type === 'company') setCompany_id("");
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <BarLoader className="mb-4" width={200} color="#36d7b7" />
          <p className="text-gray-500 animate-pulse">Loading job opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl mb-4">
          Discover Your Next Career
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
          Find the perfect job opportunity that matches your skills and aspirations
        </p>
      </div>
      
      {/* Search Bar with Visual Enhancement */}
      <div className="p-6 mb-8 shadow-md border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search Jobs by Title..."
              name="search-query"
              defaultValue={searchQuery}
              className="h-14 pl-10 pr-4 text-lg rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="h-14 px-8 font-medium text-lg transition-all duration-200 hover:scale-105" 
            variant="blue"
          >
            Search
          </Button>
        </form>
      </div>

      {/* Filters Section with Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
          <Select value={location} onValueChange={(value) => setLocation(value)}>
            <SelectTrigger className="h-12 pl-10">
              <SelectValue placeholder="Filter by Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {State.getStatesOfCountry("IN").map(({ name }) => (
                  <SelectItem key={name} value={name}>
                    {name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
          <Select
            value={company_id}
            onValueChange={(value) => setCompany_id(value)}
          >
            <SelectTrigger className="h-12 pl-10">
              <SelectValue placeholder="Filter by Company" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {companies?.map(({ name, id }) => (
                  <SelectItem key={id} value={id}>
                    {name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="h-12 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300"
          variant="outline"
          onClick={clearFilters}
        >
          <X className="mr-2 h-4 w-4" /> Clear All Filters
        </Button>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {activeFilters.map((filter, index) => (
            <div key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {filter.type === 'search' && 'Search: '}
              {filter.type === 'location' && 'Location: '}
              {filter.type === 'company' && 'Company: '}
              {filter.value}
              <button 
                className="ml-2 hover:text-red-600 transition-colors" 
                onClick={() => removeFilter(filter.type)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Results Stats */}
      {!loadingJobs && jobs?.length > 0 && (
        <div className="mb-6 text-gray-600">
          <p>Found {jobs.length} job {jobs.length === 1 ? 'opportunity' : 'opportunities'}</p>
        </div>
      )}

      {/* Loading Spinner */}
      {loadingJobs && (
        <div className="flex justify-center items-center h-40">
          <div className="text-center">
            <BarLoader className="mb-4" width={150} color="#36d7b7" />
            <p className="text-gray-500 animate-pulse">Finding the perfect jobs for you...</p>
          </div>
        </div>
      )}

      {/* No Results Message */}
      {!loadingJobs && jobs?.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-lg">
          <Briefcase className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Jobs Found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search filters or clearing them completely</p>
          <Button 
            onClick={clearFilters}
            variant="outline"
            className="border-blue-500 text-blue-600 hover:bg-blue-50"
          >
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Jobs Grid with Animation */}
      {!loadingJobs && jobs?.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div 
              key={job.id} 
              className="transform transition duration-300 hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms`, animation: 'fadeIn 0.5s ease-in-out forwards' }}
            >
              <JobCard
                job={job}
                savedInit={job?.saved?.length > 0}
              />
            </div>
          ))}
        </div>
      )}

      {/* Add some basic keyframe animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .gradient-title {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default JobListing;