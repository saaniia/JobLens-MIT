
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChartHorizontal, Building, Briefcase, Calculator, ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Mock data for dashboard stats
  const stats = [
    { title: "Companies", value: "250+", icon: Building, color: "bg-blue-100 text-blue-700" },
    { title: "Job Roles", value: "560+", icon: Briefcase, color: "bg-green-100 text-green-700" },
    { title: "Insights", value: "140+", icon: BarChartHorizontal, color: "bg-purple-100 text-purple-700" },
    { title: "Eligibility Predictions", value: "98%", icon: Calculator, color: "bg-amber-100 text-amber-700" },
  ];

  // Mock data for recent companies
  const recentCompanies = [
    { name: "Microsoft", roles: 4, avgPackage: "₹25.5 LPA", date: "Apr 3, 2025" },
    { name: "Infosys", roles: 7, avgPackage: "₹7.2 LPA", date: "Apr 2, 2025" },
    { name: "Amazon", roles: 3, avgPackage: "₹22 LPA", date: "Mar 29, 2025" },
    { name: "TCS", roles: 5, avgPackage: "₹7 LPA", date: "Mar 27, 2025" },
  ];

  // Mock data for job roles
  const trendingRoles = [
    { title: "Software Development Engineer", company: "Microsoft", package: "₹25 LPA", skills: ["Python", "Azure", "Algorithms"] },
    { title: "Machine Learning Engineer", company: "Google", package: "₹28 LPA", skills: ["TensorFlow", "Python", "NLP"] },
    { title: "System Engineer", company: "Infosys", package: "₹7.5 LPA", skills: ["Java", "SQL", "Cloud"] },
    { title: "Data Analyst", company: "Amazon", package: "₹15 LPA", skills: ["SQL", "Power BI", "Python"] },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome, {currentUser?.name}!</h1>
        <p className="text-gray-600">Here's what's happening with campus placements</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Recently Added Companies */}
        <Card className="lg:col-span-1 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl">Recent Companies</CardTitle>
            <CardDescription>Latest companies visiting campus</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCompanies.map((company, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{company.name}</p>
                    <p className="text-sm text-gray-500">
                      {company.roles} roles · {company.avgPackage}
                    </p>
                  </div>
                  <div className="text-xs text-gray-400">{company.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" onClick={() => navigate('/companies')}>
              View all companies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Trending Job Roles */}
        <Card className="lg:col-span-2 animate-fade-in" style={{animationDelay: "150ms"}}>
          <CardHeader>
            <CardTitle className="text-xl">Trending Job Roles</CardTitle>
            <CardDescription>Popular roles across campuses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trendingRoles.map((role, index) => (
                <Card key={index} className="border border-gray-100">
                  <CardContent className="p-4">
                    <p className="font-medium truncate">{role.title}</p>
                    <p className="text-sm text-gray-500 mb-2">{role.company} · {role.package}</p>
                    <div className="flex flex-wrap gap-1">
                      {role.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" onClick={() => navigate('/jobs')}>
              View all job roles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in" style={{animationDelay: "300ms"}}>
        <Card className="bg-gradient-to-br from-joblens-primary to-joblens-secondary text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Predict Your Eligibility</h3>
            <p className="mb-4 text-white/90">Use our ML model to check your chances for different roles</p>
            <Button variant="secondary" onClick={() => navigate('/predict')}>
              Try Prediction Tool
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Update Your Profile</h3>
            <p className="mb-4 text-white/90">Keep your skills and GPA updated for better predictions</p>
            <Button variant="secondary" onClick={() => navigate('/profile')}>
              Edit Profile
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-amber-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Placement Insights</h3>
            <p className="mb-4 text-white/90">Explore data trends and statistics across campuses</p>
            <Button variant="secondary" onClick={() => navigate('/insights')}>
              View Insights
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
