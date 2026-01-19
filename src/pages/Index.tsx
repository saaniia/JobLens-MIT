
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SearchCheck, Server, LineChart, Zap, ArrowRight, Building, Briefcase } from 'lucide-react';
import Logo from '@/components/Logo';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Logo className="text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-joblens-secondary via-joblens-primary to-joblens-accent">
              Your Campus Placement Companion
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Get data-driven insights on placements across all MIT campuses. 
              Find companies, roles, and predict your eligibility with our ML-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything you need for placement success</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              JobLens MIT centralizes placement data across campuses and provides personalized insights 
              to help you prepare better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in-up">
              <div className="bg-blue-100 text-joblens-primary p-3 rounded-lg inline-block mb-4">
                <SearchCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Data</h3>
              <p className="text-gray-600">
                Access consolidated placement data from all MIT campuses in one place.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in-up" style={{animationDelay: "100ms"}}>
              <div className="bg-green-100 text-green-600 p-3 rounded-lg inline-block mb-4">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Company Database</h3>
              <p className="text-gray-600">
                Explore detailed information about companies visiting MIT campuses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in-up" style={{animationDelay: "200ms"}}>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-lg inline-block mb-4">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Placement Insights</h3>
              <p className="text-gray-600">
                Visualize trends, patterns, and statistics across roles and campuses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in-up" style={{animationDelay: "300ms"}}>
              <div className="bg-amber-100 text-amber-600 p-3 rounded-lg inline-block mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ML Predictions</h3>
              <p className="text-gray-600">
                Get personalized eligibility predictions based on your profile and skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Covering All MIT Campuses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform aggregates placement data from all Manipal Institute of Technology campuses across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "MIT Manipal", students: "8,500+", companies: "350+" },
              { name: "MIT Bengaluru", students: "3,200+", companies: "120+" },
              { name: "Manipal University Jaipur", students: "2,800+", companies: "95+" },
              { name: "SMIT", students: "2,000+", companies: "80+" }
            ].map((campus, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <h3 className="text-xl font-semibold mb-2">{campus.name}</h3>
                <p className="text-gray-600 mb-4">
                  <span className="block">{campus.students} Students</span>
                  <span className="block">{campus.companies} Companies</span>
                </p>
                <Link to="/companies" className="text-joblens-primary font-medium hover:underline flex items-center">
                  View details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Companies at MIT Campuses</h2>
              <p className="text-lg text-gray-600">
                Explore opportunities from leading companies that recruit from MIT.
              </p>
            </div>
            <div className="mt-4 lg:mt-0">
              <Link to="/companies">
                <Button>
                  View All Companies <Building className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: "Microsoft", roles: 4, package: "₹25L+", logo: "MS" },
              { name: "Google", roles: 3, package: "₹30L+", logo: "G" },
              { name: "Amazon", roles: 5, package: "₹22L+", logo: "AMZ" },
              { name: "Infosys", roles: 7, package: "₹7L+", logo: "INF" },
              { name: "TCS", roles: 8, package: "₹7L+", logo: "TCS" },
              { name: "Accenture", roles: 6, package: "₹8L+", logo: "ACC" },
              { name: "Wipro", roles: 4, package: "₹6L+", logo: "WIP" },
              { name: "IBM", roles: 3, package: "₹12L+", logo: "IBM" }
            ].map((company, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fade-in-up"
                style={{animationDelay: `${index * 50}ms`}}
              >
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-bold mr-4">
                    {company.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{company.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {company.roles} open roles
                    </p>
                    <p className="text-sm font-medium text-joblens-primary">
                      Packages from {company.package}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-joblens-secondary via-joblens-primary to-blue-400 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to boost your placement chances?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join JobLens MIT today and get access to exclusive placement data, insights, and personalized predictions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/companies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Explore Companies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
