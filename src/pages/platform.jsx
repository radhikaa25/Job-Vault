import { Brain, Briefcase } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router-dom";

const Platform = () => {
  return (
    <div className=" bg-gradient-to-l from-violet-300 to-orange-200">
    
      <header className="absolute top-0 left-0 right-0 p-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600">
            AI Career Hub
          </h1>
          <div className="space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Help
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex flex-col lg:flex-row">
        {/* Main Heading */}
        <div className="absolute top-32 left-0 right-0 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Career Journey Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your path: Practice interviews with AI or discover your next
            career opportunity
          </p>
        </div>

        {/* Mock.ai Section */}
        <section className="flex-1 flex items-center justify-center p-8 lg:p-16 transition-all hover:bg-white/50 mt-48 lg:mt-0">
          <div className="max-w-xl space-y-6">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-gray-900">Mock.ai</h2>
            </div>
            <p className="text-lg text-gray-600">
              Master your interview skills with AI-powered mock interviews. Get
              real-time feedback and improve your chances of landing your dream
              job.
            </p>
            <a href="https://ai-interview-smoky.vercel.app/">
              <button className="group relative mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 text-white rounded-lg overflow-hidden transition-all hover:from-blue-600 hover:via-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                <span className="relative z-10">Practice Interviews</span>
              </button>
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-gradient-to-b from-blue-200 via-orange-200 to-purple-200" />

        {/* Hired Section */}
        <section className="flex-1 flex items-center justify-center p-8 lg:p-16 transition-all hover:bg-white/50 mt-0">
          <div className="max-w-xl space-y-6">
            <div className="flex items-center space-x-3">
              <Briefcase className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">Placed</h2>
            </div>
            <p className="text-lg text-gray-600">
              Connect with top companies and find your next career opportunity.
              Smart matching algorithm to find the perfect fit for your skills.
            </p>
            <Link to={"/platform"}>
              <button className="group mt-8 relative px-8 py-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-lg overflow-hidden transition-all hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                <span className="relative z-10">Find Jobs</span>
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          {/* <p>© 2025 AI Career Hub. All rights reserved.</p> */}
        </div>
      </footer>
    </div>
  );
};

export default memo(Platform);
