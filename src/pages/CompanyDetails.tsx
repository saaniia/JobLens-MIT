import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, MapPin, Building, Users, GraduationCap, Calendar, Briefcase } from 'lucide-react';

// Import the mock company data
import { companiesData, jobsData } from '@/data/mock-data';

const CompanyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<any | null>(null);
  const [companyJobs, setCompanyJobs] = useState<any[]>([]);
  
  useEffect(() => {
    // Find the company with the matching ID
    const foundCompany = companiesData.find(c => c.id === id);
    setCompany(foundCompany || null);
    
    // Find jobs from this company
    const jobs = jobsData.filter(job => job.company === (foundCompany?.name || ''));
    setCompanyJobs(jobs);
  }, [id]);
  
  if (!company) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Company not found</h1>
        <p className="mb-8">The company you're looking for doesn't exist or has been removed.</p>
        <Link to="/companies">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Companies
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/companies" className="inline-flex items-center text-joblens-primary hover:underline mb-6">
        <ArrowLeft className="mr-1 h-4 w-4" /> Back to Companies
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Company Overview Card */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-bold">
                  {company.logo}
                </div>
                <div>
                  <CardTitle className="text-2xl">{company.name}</CardTitle>
                  <CardDescription>{company.sector}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">About</h3>
                <p className="text-gray-600">
                  {company.name} is a leading company in the {company.sector} sector, 
                  offering a range of opportunities for fresh graduates from MIT campuses. 
                  They regularly visit for campus placements and have hired many students over the years.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Key Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Headquarters: {company.name === "Microsoft" ? "Redmond, WA" : 
                          company.name === "Google" ? "Mountain View, CA" : 
                          company.name === "Amazon" ? "Seattle, WA" : 
                          company.name === "Infosys" ? "Bangalore, India" : 
                          company.name === "TCS" ? "Mumbai, India" : 
                          "Bangalore, India"}</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Founded: {company.name === "Microsoft" ? "1975" : 
                          company.name === "Google" ? "1998" : 
                          company.name === "Amazon" ? "1994" : 
                          company.name === "Infosys" ? "1981" : 
                          company.name === "TCS" ? "1968" : 
                          "1980s-2000s"}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Employees: {company.name === "Microsoft" ? "180,000+" : 
                          company.name === "Google" ? "150,000+" : 
                          company.name === "Amazon" ? "1,500,000+" : 
                          company.name === "Infosys" ? "300,000+" : 
                          company.name === "TCS" ? "600,000+" : 
                          "50,000+"}</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Visited MIT Campuses: {company.campuses.join(", ")}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Package Details</h3>
                <p className="font-medium">Range: {company.avgPackage}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Package may vary based on role, experience, and campus
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {company.skills.map((skill: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                  {company.sector === "Technology" && (
                    <>
                      <Badge variant="secondary">Problem Solving</Badge>
                      <Badge variant="secondary">System Design</Badge>
                    </>
                  )}
                  {company.sector === "Consulting" && (
                    <>
                      <Badge variant="secondary">Communication</Badge>
                      <Badge variant="secondary">Business Acumen</Badge>
                    </>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Selection Process</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center mr-2">
                      1
                    </Badge>
                    <span>Online Assessment / Aptitude Test</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center mr-2">
                      2
                    </Badge>
                    <span>Technical Interviews ({company.sector === "Technology" ? "2-3 rounds" : "1-2 rounds"})</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center mr-2">
                      3
                    </Badge>
                    <span>HR / Managerial Interview</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Open Positions Tab */}
          <Tabs defaultValue="openings" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="openings">Open Positions ({companyJobs.length})</TabsTrigger>
              <TabsTrigger value="timeline">Past Recruitment</TabsTrigger>
            </TabsList>
            <TabsContent value="openings" className="mt-4">
              {companyJobs.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center text-gray-500">
                    No open positions currently available
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {companyJobs.map((job) => (
                    <Card key={job.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-medium">{job.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                          </div>
                          <Badge>{job.employmentType}</Badge>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-1">
                          {job.skills.map((skill: string, index: number) => (
                            <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <div className="text-sm">
                            <span className="font-medium">Package:</span> {job.package}
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">CGPA Cutoff:</span> {job.cgpaCutoff}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-gray-50 py-3">
                        <Link 
                            to={`/jobs/${job.id}`} 
                            state={{ from: 'company', companyId: id }}
                        >
                            <Button size="sm">View Details</Button>
                        </Link>
                        </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            <TabsContent value="timeline" className="mt-4">
              <Card>
                <CardContent className="py-6">
                  <div className="space-y-6">
                    {/* Past recruitment timeline - mocked data */}
                    <div className="flex gap-4">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-joblens-primary text-white flex items-center justify-center">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-200"></div>
                      </div>
                      <div className="flex-1 pb-6">
                        <p className="text-sm text-gray-500">April 2025</p>
                        <h4 className="text-lg font-medium">Latest Campus Visit</h4>
                        <p className="text-gray-600 mt-1">
                          Visited {company.campuses.length > 1 ? company.campuses[0] + " and " + company.campuses[1] : company.campuses[0]} campus for recruiting {company.roleCount} roles
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div className="absolute top-10 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-200"></div>
                      </div>
                      <div className="flex-1 pb-6">
                        <p className="text-sm text-gray-500">October 2024</p>
                        <h4 className="text-lg font-medium">Fall Recruitment Drive</h4>
                        <p className="text-gray-600 mt-1">
                          Selected 15 students for various roles across different departments
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div>
                        <div className="h-10 w-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center">
                          <Briefcase className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500">April 2024</p>
                        <h4 className="text-lg font-medium">Spring Recruitment</h4>
                        <p className="text-gray-600 mt-1">
                          Hired 12 students from MIT Manipal for internship and full-time positions
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar */}
        <div>
          {/* Campus Presence Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Campus Presence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {company.campuses.map((campus: string, index: number) => (
                <div key={index} className="flex items-center justify-between">
                  <span>MIT {campus}</span>
                  <Badge variant="outline">Active</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Application Tips Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Application Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Resume Focus</h4>
                <p className="text-sm text-gray-600">
                  Highlight projects related to {company.skills.join(", ")}
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Interview Preparation</h4>
                <p className="text-sm text-gray-600">
                  Practice {company.sector === "Technology" ? 
                    "coding problems and system design questions" : 
                    company.sector === "Consulting" ? 
                    "case studies and business problems" : 
                    "technical and domain-specific questions"}
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Eligibility</h4>
                <p className="text-sm text-gray-600">
                  Minimum CGPA: {company.name === "Microsoft" || company.name === "Google" || company.name === "Amazon" ? "7.5" : "6.0"} and above
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => window.open(`https://${company.name.toLowerCase().replace(" ", "")}.com/careers`, '_blank')}>
                Visit Official Careers Page
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;