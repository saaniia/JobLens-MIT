
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, LogOut, Settings, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
            
            {currentUser && (
              <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                <Link 
                  to="/companies"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 
                             inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                >
                  Companies
                </Link>
                <Link 
                  to="/jobs"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 
                             inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                >
                  Job Roles
                </Link>
                <Link 
                  to="/predict"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 
                             inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                >
                  Predict Eligibility
                </Link>
                <Link 
                  to="/insights"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 
                             inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                >
                  Insights
                </Link>
              </div>
            )}
          </div>
          
          <div className="flex items-center">
            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-joblens-primary text-white flex items-center justify-center">
                      {currentUser.name.charAt(0)}
                    </div>
                    <span className="hidden md:inline-block text-sm font-medium">
                      {currentUser.name}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex w-full items-center gap-2 cursor-pointer">
                      <User size={16} />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex w-full items-center gap-2 cursor-pointer">
                      <Settings size={16} />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/resume" className="flex w-full items-center gap-2 cursor-pointer">
                      <BookOpen size={16} />
                      <span>My Resume</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="flex items-center gap-2 cursor-pointer">
                    <LogOut size={16} />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-4">
                <Link to="/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
