
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { X, Check, Info, Upload, AlertTriangle, ChevronRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "sonner";

// Sample job roles for prediction
const jobRoles = [
  { value: "sde", label: "Software Development Engineer" },
  { value: "mle", label: "Machine Learning Engineer" },
  { value: "da", label: "Data Analyst" },
  { value: "fe", label: "Frontend Developer" },
  { value: "be", label: "Backend Developer" },
  { value: "fs", label: "Full Stack Developer" },
  { value: "dse", label: "Data Science Engineer" },
  { value: "devops", label: "DevOps Engineer" },
  { value: "qa", label: "Quality Assurance Engineer" },
];

const companies = [
  { value: "microsoft", label: "Microsoft" },
  { value: "google", label: "Google" },
  { value: "amazon", label: "Amazon" },
  { value: "infosys", label: "Infosys" },
  { value: "tcs", label: "TCS" },
  { value: "wipro", label: "Wipro" },
  { value: "oracle", label: "Oracle" },
  { value: "ibm", label: "IBM" },
  { value: "deloitte", label: "Deloitte" },
];

interface PredictionResult {
  eligibilityScore: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
}

const Predict: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [jobRole, setJobRole] = useState('');
  const [company, setCompany] = useState('');
  const [cgpa, setCgpa] = useState(currentUser?.gpa?.toString() || '');
  const [skills, setSkills] = useState('');
  const [projects, setProjects] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!jobRole || !company || !cgpa || !skills || !projects) {
      toast.error("Please fill all the required fields");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call for prediction
    try {
      // In a real application, we would send the form data to an API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock eligibility prediction result
      const mockResult: PredictionResult = generateMockPrediction(jobRole, company, parseFloat(cgpa), skills);
      setResult(mockResult);
      
      toast.success("Prediction generated successfully!");
    } catch (error) {
      toast.error("Failed to generate prediction. Please try again.");
      console.error("Prediction error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

      // Update the handleViewRelatedJobs function
  const handleViewRelatedJobs = () => {
    // Get the job role label to use as search term
    const selectedJobRole = jobRoles.find(r => r.value === jobRole)?.label || "";
    
    // Include the user's CGPA in the query parameters 
    // This will allow the Jobs page to filter by both job role and CGPA
    const userCgpa = parseFloat(cgpa);
    
    // Navigate to Jobs page with search term and CGPA filter
    navigate(`/jobs?search=${encodeURIComponent(selectedJobRole)}&maxCgpa=${userCgpa}`);
  };

  // Function to generate mock prediction based on input
  const generateMockPrediction = (jobRole: string, company: string, cgpa: number, skills: string): PredictionResult => {
    // Extract skills as an array
    const skillsArray = skills.split(',').map(s => s.trim().toLowerCase());
    
    // Define required skills for different roles (simplified for demo)
    const requiredSkills: Record<string, string[]> = {
      sde: ['java', 'python', 'algorithms', 'data structures', 'system design'],
      mle: ['python', 'machine learning', 'tensorflow', 'deep learning', 'nlp', 'ml'],
      da: ['sql', 'python', 'excel', 'data visualization', 'statistics'],
      fe: ['javascript', 'react', 'html', 'css', 'ui/ux'],
      be: ['java', 'nodejs', 'databases', 'api design', 'spring'],
      fs: ['javascript', 'react', 'nodejs', 'mongodb', 'express'],
      dse: ['python', 'machine learning', 'sql', 'statistics', 'data engineering'],
      devops: ['docker', 'kubernetes', 'ci/cd', 'aws', 'jenkins'],
      qa: ['testing', 'automation', 'selenium', 'jira', 'junit'],
    };
    
    // Set CGPA thresholds for different companies
    const cgpaThresholds: Record<string, number> = {
      microsoft: 8.0,
      google: 8.5,
      amazon: 7.5,
      infosys: 6.0,
      tcs: 6.0,
      wipro: 6.0,
      oracle: 7.0,
      ibm: 6.5,
      deloitte: 6.5,
    };
    
    // Calculate skill match percentage
    const roleSkills = requiredSkills[jobRole] || [];
    const matchedSkills = skillsArray.filter(skill => 
      roleSkills.some(rs => rs.includes(skill) || skill.includes(rs))
    );
    const skillMatchPercentage = roleSkills.length ? (matchedSkills.length / roleSkills.length) * 100 : 0;
    
    // Calculate CGPA score
    const cgpaThreshold = cgpaThresholds[company] || 7.0;
    const cgpaScore = cgpa >= cgpaThreshold ? 100 : (cgpa / cgpaThreshold) * 100;
    
    // Calculate overall eligibility score
    const eligibilityScore = Math.min(Math.round((skillMatchPercentage * 0.6) + (cgpaScore * 0.4)), 100);
    
    // Generate strengths, weaknesses and recommendations
    const strengths: string[] = [];
    const weaknesses: string[] = [];
    const recommendations: string[] = [];
    
    if (cgpa >= cgpaThreshold) {
      strengths.push(`Your CGPA of ${cgpa} meets or exceeds the typical threshold for ${companies.find(c => c.value === company)?.label}`);
    } else {
      weaknesses.push(`Your CGPA of ${cgpa} is below the typical threshold of ${cgpaThreshold} for ${companies.find(c => c.value === company)?.label}`);
      recommendations.push("Focus on improving your academic performance or highlight projects that demonstrate your abilities");
    }
    
    if (matchedSkills.length > 0) {
      strengths.push(`You have ${matchedSkills.length} relevant skills for this role: ${matchedSkills.slice(0, 3).join(', ')}${matchedSkills.length > 3 ? '...' : ''}`);
    }
    
    const missingSkills = roleSkills.filter(skill => 
      !skillsArray.some(s => s.includes(skill) || skill.includes(s))
    );
    
    if (missingSkills.length > 0) {
      weaknesses.push(`Missing key skills: ${missingSkills.slice(0, 3).join(', ')}${missingSkills.length > 3 ? '...' : ''}`);
      recommendations.push(`Consider learning ${missingSkills.slice(0, 2).join(' and ')} to increase your chances`);
    }
    
    if (eligibilityScore >= 80) {
      recommendations.push("Your profile is strong! Focus on interview preparation.");
    } else if (eligibilityScore >= 50) {
      recommendations.push("Your profile is decent. Work on strengthening your weak areas and prepare for interviews.");
    } else {
      recommendations.push("Consider applying for other roles that better match your current profile or invest time in building the required skills.");
    }
    
    return {
      eligibilityScore,
      strengths,
      weaknesses,
      recommendations
    };
  };

  const resetForm = () => {
    setJobRole('');
    setCompany('');
    setCgpa(currentUser?.gpa?.toString() || '');
    setSkills('');
    setProjects('');
    setResumeFile(null);
    setResult(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Predict Your Eligibility</h1>
        <p className="text-gray-600">
          Our ML-powered tool will analyze your profile and predict your eligibility for specific job roles
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {!result ? (
            <Card>
              <CardHeader>
                <CardTitle>Eligibility Prediction Form</CardTitle>
                <CardDescription>
                  Fill in your details to get personalized eligibility predictions
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="jobRole">Job Role</Label>
                      <Select value={jobRole} onValueChange={setJobRole} required>
                        <SelectTrigger id="jobRole">
                          <SelectValue placeholder="Select job role" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobRoles.map(role => (
                            <SelectItem key={role.value} value={role.value}>
                              {role.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Select value={company} onValueChange={setCompany} required>
                        <SelectTrigger id="company">
                          <SelectValue placeholder="Select company" />
                        </SelectTrigger>
                        <SelectContent>
                          {companies.map(c => (
                            <SelectItem key={c.value} value={c.value}>
                              {c.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cgpa">CGPA</Label>
                    <Input
                      id="cgpa"
                      type="number"
                      min="0"
                      max="10"
                      step="0.01"
                      placeholder="Enter your CGPA (e.g. 8.5)"
                      value={cgpa}
                      onChange={(e) => setCgpa(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills (comma separated)</Label>
                    <Textarea
                      id="skills"
                      placeholder="E.g. Python, Machine Learning, SQL, React, JavaScript"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="projects">Projects (briefly describe)</Label>
                    <Textarea
                      id="projects"
                      placeholder="Briefly describe your key projects relevant to this role"
                      value={projects}
                      onChange={(e) => setProjects(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume (optional)</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('resume')?.click()}
                        className="w-full"
                      >
                        <Upload className="mr-2 h-4 w-4" /> {resumeFile ? resumeFile.name : 'Upload resume'}
                      </Button>
                      {resumeFile && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => setResumeFile(null)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC or DOCX (5MB max)</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Reset
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Predict Eligibility'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          ) : (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Prediction Result
                  <Button variant="ghost" size="sm" onClick={() => setResult(null)}>
                    Edit inputs
                  </Button>
                </CardTitle>
                <CardDescription>
                  Eligibility prediction for {jobRoles.find(r => r.value === jobRole)?.label} at {companies.find(c => c.value === company)?.label}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Eligibility Score</span>
                    <span className="font-bold">{result.eligibilityScore}%</span>
                  </div>
                  <Progress value={result.eligibilityScore} className="h-2" />
                  
                  <div className="mt-2">
                    <Badge variant="outline" className={
                      result.eligibilityScore >= 80 ? "bg-green-50 text-green-700 border-green-200" :
                      result.eligibilityScore >= 50 ? "bg-amber-50 text-amber-700 border-amber-200" :
                                                     "bg-red-50 text-red-700 border-red-200"
                    }>
                      {result.eligibilityScore >= 80 ? "Strong Match" :
                       result.eligibilityScore >= 50 ? "Moderate Match" :
                                                      "Low Match"}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium flex items-center text-green-600 mb-2">
                      <Check className="mr-1 h-4 w-4" /> Strengths
                    </h3>
                    <ul className="space-y-1 text-sm pl-5 list-disc">
                      {result.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium flex items-center text-red-600 mb-2">
                      <X className="mr-1 h-4 w-4" /> Areas for Improvement
                    </h3>
                    <ul className="space-y-1 text-sm pl-5 list-disc">
                      {result.weaknesses.length > 0 ? (
                        result.weaknesses.map((weakness, index) => (
                          <li key={index}>{weakness}</li>
                        ))
                      ) : (
                        <li>No significant weaknesses identified</li>
                      )}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium flex items-center text-blue-600 mb-2">
                      <Info className="mr-1 h-4 w-4" /> Recommendations
                    </h3>
                    <ul className="space-y-1 text-sm pl-5 list-disc">
                      {result.recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
      <Button variant="outline" onClick={resetForm} className="w-full sm:w-auto">
        Start New Prediction
      </Button>
      <Button className="w-full sm:w-auto" onClick={handleViewRelatedJobs}>
        View Related Jobs <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </CardFooter>
            </Card>
          )}
        </div>
        
        <div className="lg:col-span-1">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <p className="text-sm">Enter your academic details, skills and projects</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <p className="text-sm">Our ML algorithm analyzes your profile against job requirements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <p className="text-sm">Get a personalized eligibility score with detailed feedback</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-700 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <p className="text-sm">Use recommendations to improve your profile and chances</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center text-amber-800">
                  <AlertTriangle className="mr-2 h-5 w-5" /> Important Note
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-amber-800">
                <p className="mb-3">
                  This prediction tool provides an estimate based on historical data. Actual eligibility may vary based on:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Company-specific hiring criteria</li>
                  <li>Interview performance</li>
                  <li>Current market demand</li>
                  <li>Other qualitative factors</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict;
