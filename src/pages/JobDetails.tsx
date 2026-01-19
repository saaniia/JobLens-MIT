import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
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
import { ArrowLeft, MapPin, Building, Briefcase, GraduationCap, Clock, Award } from 'lucide-react';

// Import the mock data
import { jobsData } from '@/data/mock-data';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<any | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if the user came from a company page
  const fromCompany = location.state?.from === 'company';
  const companyId = location.state?.companyId;
  
  useEffect(() => {
    // Find the job with the matching ID
    const foundJob = jobsData.find(j => j.id === id);
    setJob(foundJob || null);
  }, [id]);
  
  // Handle the back button click
  const handleBackClick = () => {
    // If the user came from company details, navigate back there
    if (fromCompany && companyId) {
      navigate(`/companies/${companyId}`);
    } else {
      // Otherwise go to the jobs page
      navigate('/jobs');
    }
  };
  
  if (!job) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Job not found</h1>
        <p className="mb-8">The job role you're looking for doesn't exist or has been removed.</p>
        <Button onClick={handleBackClick}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={handleBackClick} className="inline-flex items-center text-joblens-primary hover:underline mb-6">
        <ArrowLeft className="mr-1 h-4 w-4" /> 
        {fromCompany ? 'Back to Company Details' : 'Back to Jobs'}
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Job Overview Card */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-bold">
                    {job.companyLogo}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <CardDescription>{job.company} · {job.location}</CardDescription>
                  </div>
                </div>
                <Badge className={job.employmentType === "Internship" ? "bg-amber-100 text-amber-800" : ""}>
                  {job.employmentType}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Job Description</h3>
                <p className="text-gray-600">
                  {job.company} is looking for a talented {job.title} to join our team in {job.location}.
                  This is an exciting opportunity to work on challenging projects and grow your career in a
                  supportive environment.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Key Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Location: {job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Company: {job.company}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Job Type: {job.employmentType}</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Min CGPA: {job.cgpaCutoff}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Start Date: {job.employmentType === "Internship" ? "May 2025" : "July 2025"}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Package: {job.package}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Responsibilities</h3>
                <ul className="space-y-2 pl-5 list-disc">
                  {job.title.includes("Software") && (
                    <>
                      <li>Design and implement new features and functionality</li>
                      <li>Build efficient, reusable, and reliable code</li>
                      <li>Collaborate with cross-functional teams</li>
                      <li>Ensure the performance, quality, and responsiveness of applications</li>
                      <li>Identify and correct bottlenecks and fix bugs</li>
                    </>
                  )}
                  {job.title.includes("Data") && (
                    <>
                      <li>Analyze large datasets to extract valuable insights</li>
                      <li>Build data visualizations and dashboards</li>
                      <li>Develop and maintain data pipelines</li>
                      <li>Collaborate with stakeholders to understand business requirements</li>
                      <li>Present findings to technical and non-technical audiences</li>
                    </>
                  )}
                  {job.title.includes("Machine Learning") && (
                    <>
                      <li>Design and implement machine learning models</li>
                      <li>Process, clean, and verify the integrity of data</li>
                      <li>Conduct model training, evaluation, and deployment</li>
                      <li>Research and implement appropriate ML algorithms</li>
                      <li>Extend existing ML libraries and frameworks</li>
                    </>
                  )}
                  {!job.title.includes("Software") && !job.title.includes("Data") && !job.title.includes("Machine Learning") && (
                    <>
                      <li>Collaborate with team members on project deliverables</li>
                      <li>Apply domain knowledge to solve complex problems</li>
                      <li>Document processes and technical specifications</li>
                      <li>Stay updated on industry trends and technologies</li>
                      <li>Contribute to continuous improvement initiatives</li>
                    </>
                  )}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Qualifications</h3>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>Bachelor's degree in Computer Science, Engineering or related field</li>
                  <li>Minimum CGPA of {job.cgpaCutoff}</li>
                  <li>Proficiency in {job.skills.slice(0, 2).join(", ")}</li>
                  <li>Strong problem-solving skills and attention to detail</li>
                  <li>Excellent communication and teamwork abilities</li>
                  {job.employmentType === "Internship" && <li>Currently pursuing a degree</li>}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Sidebar */}
        <div>
          {/* Application Info Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Application Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center mr-2">
                    1
                  </Badge>
                  <span>Resume Screening</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center mr-2">
                    2
                  </Badge>
                  <span>Online Assessment</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center mr-2">
                    3
                  </Badge>
                  <span>Technical Interview{job.company === "Google" || job.company === "Microsoft" || job.company === "Amazon" ? "s (2-3 rounds)" : ""}</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center mr-2">
                    4
                  </Badge>
                  <span>HR Interview</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Campus Selection Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Campus Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {job.campuses.map((campus: string, index: number) => (
                <div key={index} className="flex items-center justify-between">
                  <span>MIT {campus}</span>
                  <Badge variant="outline">Eligible</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* CTA Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Interested?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Applications will be processed through your campus placement cell. Make sure your profile is updated with the latest information.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Link to={`/predict?role=${job.title}&company=${job.company}`} className="w-full">
                <Button className="w-full">Check Your Eligibility</Button>
              </Link>
              <Link to={`/companies/${job.company.toLowerCase() === "microsoft" ? "c1" : 
                              job.company.toLowerCase() === "google" ? "c2" : 
                              job.company.toLowerCase() === "amazon" ? "c3" : 
                              job.company.toLowerCase() === "infosys" ? "c4" : 
                              job.company.toLowerCase() === "tcs" ? "c5" : 
                              job.company.toLowerCase() === "oracle" ? "c9" : 
                              job.company.toLowerCase() === "ibm" ? "c8" : 
                              job.company.toLowerCase() === "deloitte" ? "c10" : "c7"}`}>
                <Button variant="outline" className="w-full">View Company Profile</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;