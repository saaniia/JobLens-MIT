import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-gray-500 mb-4">
              Centralizing placement data for MIT campus students with predictive insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-joblens-primary">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-joblens-primary">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-joblens-primary">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/companies" className="text-sm text-gray-500 hover:text-joblens-primary">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-sm text-gray-500 hover:text-joblens-primary">
                  Job Roles
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-sm text-gray-500 hover:text-joblens-primary">
                  Placement Insights
                </Link>
              </li>
              <li>
                <Link to="/predict" className="text-sm text-gray-500 hover:text-joblens-primary">
                  Eligibility Predictor
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase mb-4">
              MIT Campuses
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-joblens-primary">
                  MIT Manipal
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-joblens-primary">
                  MIT Bengaluru
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-joblens-primary">
                  Manipal University Jaipur
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-joblens-primary">
                  SMIT
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-gray-500 hover:text-joblens-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-500 hover:text-joblens-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/data" className="text-sm text-gray-500 hover:text-joblens-primary">
                  Data Usage Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} JobLens MIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
