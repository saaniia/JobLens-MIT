import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, ArrowUpRight } from 'lucide-react';

// Mock job data
const jobsData = [
  {
    id: "j1",
    title: "Software Development Engineer",
    company: "Microsoft",
    companyLogo: "MS",
    location: "Bengaluru",
    package: "₹25 LPA",
    skills: ["C++", "Data Structures", "Algorithms", "System Design"],
    campuses: ["Manipal", "Bengaluru"],
    cgpaCutoff: 7.5,
    employmentType: "Full-time",
  },
  {
    id: "j2",
    title: "Machine Learning Engineer",
    company: "Google",
    companyLogo: "G",
    location: "Bengaluru",
    package: "₹35 LPA",
    skills: ["Python", "TensorFlow", "Machine Learning", "NLP"],
    campuses: ["Manipal"],
    cgpaCutoff: 8.0,
    employmentType: "Full-time",
  },
  {
    id: "j3",
    title: "Associate Software Engineer",
    company: "Infosys",
    companyLogo: "INF",
    location: "Bengaluru",
    package: "₹7.5 LPA",
    skills: ["Java", "SQL", "Web Development"],
    campuses: ["Manipal", "Bengaluru", "Jaipur", "Sikkim"],
    cgpaCutoff: 6.0,
    employmentType: "Full-time",
  },
  {
    id: "j4",
    title: "Data Analyst",
    company: "Amazon",
    companyLogo: "AMZ",
    location: "Hyderabad",
    package: "₹15 LPA",
    skills: ["SQL", "Python", "Power BI", "Data Visualization"],
    campuses: ["Manipal", "Bengaluru"],
    cgpaCutoff: 7.0,
    employmentType: "Full-time",
  },
  {
    id: "j5",
    title: "Software Development Intern",
    company: "Microsoft",
    companyLogo: "MS",
    location: "Bengaluru",
    package: "₹80,000/month",
    skills: ["C++", "Data Structures", "Algorithms"],
    campuses: ["Manipal", "Bengaluru"],
    cgpaCutoff: 7.5,
    employmentType: "Internship",
  },
  {
    id: "j6",
    title: "System Engineer",
    company: "TCS",
    companyLogo: "TCS",
    location: "Multiple",
    package: "₹7 LPA",
    skills: ["Java", "Testing", "DevOps"],
    campuses: ["Manipal", "Bengaluru", "Jaipur", "Hyderabad"],
    cgpaCutoff: 6.0,
    employmentType: "Full-time",
  },
  {
    id: "j7",
    title: "Frontend Developer",
    company: "Oracle",
    companyLogo: "ORC",
    location: "Bengaluru",
    package: "₹18 LPA",
    skills: ["React", "JavaScript", "CSS", "UI/UX"],
    campuses: ["Manipal"],
    cgpaCutoff: 7.0,
    employmentType: "Full-time",
  },
  {
    id: "j8",
    title: "Data Science Intern",
    company: "IBM",
    companyLogo: "IBM",
    location: "Bengaluru",
    package: "₹45,000/month",
    skills: ["Python", "Machine Learning", "Statistics"],
    campuses: ["Manipal", "Bengaluru"],
    cgpaCutoff: 7.5,
    employmentType: "Internship",
  },
  {
    id: "j9",
    title: "Consulting Analyst",
    company: "Deloitte",
    companyLogo: "DEL",
    location: "Hyderabad",
    package: "₹9 LPA",
    skills: ["Analytics", "Excel", "Communication"],
    campuses: ["Manipal", "Bengaluru"],
    cgpaCutoff: 6.5,
    employmentType: "Full-time",
  },
  {
    id: "j10",
    title: "Cloud Engineer",
    company: "Wipro",
    companyLogo: "WIP",
    location: "Bengaluru",
    package: "₹8 LPA",
    skills: ["AWS", "DevOps", "Kubernetes"],
    campuses: ["Manipal", "Bengaluru", "Jaipur"],
    cgpaCutoff: 6.5,
    employmentType: "Full-time",
  },
];

const campuses = ["All Campuses", "Manipal", "Bengaluru", "Jaipur", "Hyderabad"];
const jobTypes = ["All Types", "Full-time", "Internship"];

const Jobs: React.FC = () => {
    // Get query parameters from URL
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchParam = queryParams.get('search') || '';
    const maxCgpaParam = queryParams.get('maxCgpa');
    
    const [searchTerm, setSearchTerm] = useState(searchParam);
    const [selectedCampus, setSelectedCampus] = useState('All Campuses');
    const [selectedJobType, setSelectedJobType] = useState('All Types');
    
    // Initialize CGPA range based on URL parameter if available
    const initialCgpaRange = maxCgpaParam 
    ? [0, parseFloat(maxCgpaParam)] as [number, number]
    : [0, 10] as [number, number];
  const [cgpaRange, setCgpaRange] = useState<[number, number]>(initialCgpaRange);
    // Effect to update filters when URL parameters change
    useEffect(() => {
      setSearchTerm(searchParam);
      if (maxCgpaParam) {
        setCgpaRange([0, parseFloat(maxCgpaParam)]);
      }
    }, [searchParam, maxCgpaParam]);

  // Filter jobs based on search term and filters
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCampus = selectedCampus === 'All Campuses' || job.campuses.includes(selectedCampus);
    const matchesJobType = selectedJobType === 'All Types' || job.employmentType === selectedJobType;
    const matchesCgpa = job.cgpaCutoff >= cgpaRange[0] && job.cgpaCutoff <= cgpaRange[1];
    
    return matchesSearch && matchesCampus && matchesJobType && matchesCgpa;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Job Roles</h1>
        <p className="text-gray-600">Explore job opportunities available at MIT campuses</p>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8">
        <div className="lg:col-span-2 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search by title, company, or skills..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Select value={selectedCampus} onValueChange={setSelectedCampus}>
            <SelectTrigger>
              <SelectValue placeholder="Campus" />
            </SelectTrigger>
            <SelectContent>
              {campuses.map(campus => (
                <SelectItem key={campus} value={campus}>{campus}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedJobType} onValueChange={setSelectedJobType}>
            <SelectTrigger>
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button variant="outline" onClick={() => {
            setSearchTerm('');
            setSelectedCampus('All Campuses');
            setSelectedJobType('All Types');
            setCgpaRange([0, 10]);
          }}>
            <Filter size={16} className="mr-2" /> Reset filters
          </Button>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">CGPA Cutoff: {cgpaRange[0]} - {cgpaRange[1]}</span>
        </div>
        <Slider
          value={cgpaRange}
          min={0}
          max={10}
          step={0.5}
          onValueChange={(value) => setCgpaRange(value as [number, number])}
          className="mb-6"
        />
      </div>

      {/* Jobs List */}
      {filteredJobs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">No jobs found matching your filters.</p>
          <Button variant="outline" onClick={() => {
            setSearchTerm('');
            setSelectedCampus('All Campuses');
            setSelectedJobType('All Types');
            setCgpaRange([0, 10]);
          }} className="mt-4">
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-bold mr-4">
                    {job.companyLogo}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.company} · {job.location}</p>
                    
                    <div className="mt-4 flex items-center">
                      <Badge className={job.employmentType === "Internship" ? "bg-amber-100 text-amber-800 hover:bg-amber-200" : ""}>
                        {job.employmentType}
                      </Badge>
                      <span className="mx-3 text-gray-400">|</span>
                      <span className="text-joblens-primary font-medium">{job.package}</span>
                    </div>

                    <div className="mt-3">
                      <p className="text-sm text-gray-500 mb-1">Required Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        CGPA Cutoff: <span className="font-medium">{job.cgpaCutoff}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 px-6 py-3 flex justify-between items-center">
                <div className="flex text-xs space-x-1">
                  {job.campuses.slice(0, 2).map((campus, index) => (
                    <Badge key={index} variant="outline" className="font-normal">
                      MIT {campus}
                    </Badge>
                  ))}
                  {job.campuses.length > 2 && (
                    <Badge variant="outline" className="font-normal">
                      +{job.campuses.length - 2} more
                    </Badge>
                  )}
                </div>
                <Link to={`/jobs/${job.id}`}>
                  <Button size="sm">
                    Details <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
