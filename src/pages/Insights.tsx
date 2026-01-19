import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, LineChart, PieChart } from 'lucide-react';

const Insights: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  // Mock data for placement statistics
  const placementStats = {
    totalStudents: 5420,
    placedStudents: 4650,
    highestPackage: "₹45 LPA",
    averagePackage: "₹12.8 LPA",
    placementPercentage: "85.8%"
  };

  // Mock data for top recruiters
  const topRecruiters = [
    { name: "Microsoft", students: 85, avgPackage: "₹25.5 LPA" },
    { name: "Google", students: 42, avgPackage: "₹32 LPA" },
    { name: "Amazon", students: 78, avgPackage: "₹22 LPA" },
    { name: "Infosys", students: 220, avgPackage: "₹7.2 LPA" },
    { name: "TCS", students: 240, avgPackage: "₹7 LPA" }
  ];

  // Mock data for placement trend across years
  const placementTrend = [
    { year: 2020, placementRate: 76, avgPackage: 9.5 },
    { year: 2021, placementRate: 72, avgPackage: 10.2 },
    { year: 2022, placementRate: 78, avgPackage: 11.5 },
    { year: 2023, placementRate: 81, avgPackage: 12.2 },
    { year: 2024, placementRate: 83, avgPackage: 12.5 },
    { year: 2025, placementRate: 86, avgPackage: 12.8 },
  ];

  // Mock data for domain-wise placement
  const domainWisePlacements = [
    { domain: "Software Development", percentage: 42, growth: "+5%" },
    { domain: "Data Science & AI", percentage: 18, growth: "+12%" },
    { domain: "Cloud Computing", percentage: 12, growth: "+8%" },
    { domain: "Cybersecurity", percentage: 8, growth: "+15%" },
    { domain: "Product Management", percentage: 7, growth: "+6%" },
    { domain: "Other Domains", percentage: 13, growth: "-2%" }
  ];

  // Mock data for top campuses by placement
  const campusWisePlacements = [
    { campus: "MIT Manipal", placementRate: 88, avgPackage: 14.2 },
    { campus: "MIT Bengaluru", placementRate: 86, avgPackage: 13.5 },
    { campus: "Manipal University Jaipur", placementRate: 82, avgPackage: 11.8 },
    { campus: "SMIT", placementRate: 79, avgPackage: 10.5 }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Placement Insights</h1>
        <p className="text-gray-600">
          Comprehensive analytics and trends from campus placement data
        </p>
      </div>

      <div className="mb-6 flex justify-end">
        <div className="w-48">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger>
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">
            <BarChart className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="trends">
            <LineChart className="h-4 w-4 mr-2" />
            Trends
          </TabsTrigger>
          <TabsTrigger value="comparison">
            <PieChart className="h-4 w-4 mr-2" />
            Comparison
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Placement Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-1">Total Students</p>
                <h3 className="text-2xl font-bold">{placementStats.totalStudents}</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-1">Placed Students</p>
                <h3 className="text-2xl font-bold">{placementStats.placedStudents}</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-1">Placement %</p>
                <h3 className="text-2xl font-bold">{placementStats.placementPercentage}</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-1">Average Package</p>
                <h3 className="text-2xl font-bold">{placementStats.averagePackage}</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-1">Highest Package</p>
                <h3 className="text-2xl font-bold">{placementStats.highestPackage}</h3>
              </CardContent>
            </Card>
          </div>

          {/* Top Recruiters */}
          <Card>
            <CardHeader>
              <CardTitle>Top Recruiters</CardTitle>
              <CardDescription>Companies that hired the most students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Company</th>
                      <th className="text-center py-3 px-2">Students Hired</th>
                      <th className="text-right py-3 px-2">Average Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topRecruiters.map((company, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-2 font-medium">{company.name}</td>
                        <td className="text-center py-3 px-2">{company.students}</td>
                        <td className="text-right py-3 px-2">{company.avgPackage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Domain-wise Placement */}
          <Card>
            <CardHeader>
              <CardTitle>Domain-wise Placement Distribution</CardTitle>
              <CardDescription>Percentage of students placed in different domains</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {domainWisePlacements.map((domain, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{domain.domain}</span>
                      <div className="flex items-center">
                        <span className="font-medium">{domain.percentage}%</span>
                        <span className={`text-xs ml-2 ${domain.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {domain.growth}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-joblens-primary h-2 rounded-full" 
                        style={{ width: `${domain.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          {/* Placement Trend Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Placement Trends Over Years</CardTitle>
              <CardDescription>Tracking placement rate and average package</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex flex-col justify-center items-center">
              <div className="text-center text-gray-500">
                <p className="mb-2">Interactive chart visualization would appear here</p>
                <p className="text-sm">Showing placement percentage and average package trends from 2020-2025</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 w-full mt-8">
                <div>
                  <h4 className="text-center font-medium mb-4">Placement Percentage</h4>
                  <div className="space-y-2">
                    {placementTrend.map((year, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-12">{year.year}</span>
                        <div className="flex-grow mx-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full" 
                              style={{ width: `${year.placementRate}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="w-8">{year.placementRate}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-center font-medium mb-4">Avg. Package (in LPA)</h4>
                  <div className="space-y-2">
                    {placementTrend.map((year, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-12">{year.year}</span>
                        <div className="flex-grow mx-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full" 
                              style={{ width: `${(year.avgPackage/15)*100}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="w-12">₹{year.avgPackage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Year-on-Year Growth */}
          <Card>
            <CardHeader>
              <CardTitle>Year-on-Year Growth</CardTitle>
              <CardDescription>Key metrics comparison with previous years</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Placement Rate</p>
                  <p className="text-3xl font-bold text-green-600">+3.6%</p>
                  <p className="text-xs text-gray-500">Compared to 2024</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Average Package</p>
                  <p className="text-3xl font-bold text-green-600">+2.4%</p>
                  <p className="text-xs text-gray-500">Compared to 2024</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Number of Recruiters</p>
                  <p className="text-3xl font-bold text-green-600">+12%</p>
                  <p className="text-xs text-gray-500">Compared to 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Comparison Tab */}
        <TabsContent value="comparison" className="space-y-6">
          {/* Campus Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Campus-wise Placement Comparison</CardTitle>
              <CardDescription>Performance metrics across different MIT campuses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Campus</th>
                      <th className="text-center py-3 px-2">Placement Rate</th>
                      <th className="text-center py-3 px-2">Avg. Package (LPA)</th>
                      <th className="text-center py-3 px-2">Growth vs Last Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campusWisePlacements.map((campus, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-2 font-medium">{campus.campus}</td>
                        <td className="text-center py-3 px-2">{campus.placementRate}%</td>
                        <td className="text-center py-3 px-2">₹{campus.avgPackage}</td>
                        <td className="text-center py-3 px-2">
                          <span className="text-green-600">+{(index * 1.2 + 2.5).toFixed(1)}%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Package Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Package Comparison by Domain</CardTitle>
                <CardDescription>Average packages across different domains</CardDescription>
              </CardHeader>
              <CardContent className="h-60 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Domain-wise package comparison chart would appear here</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Package Comparison by Campus</CardTitle>
                <CardDescription>Average packages across MIT campuses</CardDescription>
              </CardHeader>
              <CardContent className="h-60 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Campus-wise package comparison chart would appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CGPA vs Package Correlation */}
          <Card>
            <CardHeader>
              <CardTitle>CGPA vs Package Correlation</CardTitle>
              <CardDescription>How academic performance relates to placement packages</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="mb-2">CGPA vs Package scatter plot would appear here</p>
                <p className="text-sm">Data shows positive correlation between CGPA and package offered</p>
                <div className="mt-6">
                  <div className="flex justify-between max-w-md mx-auto mb-2">
                    <span>6.0</span>
                    <span>7.0</span>
                    <span>8.0</span>
                    <span>9.0</span>
                    <span>10.0</span>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 max-w-md mx-auto mb-1"></div>
                  <p className="text-xs text-gray-500">CGPA Range</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-8 bg-blue-50 border-blue-100">
        <CardHeader>
          <CardTitle>Data Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium">Key Findings from 2025 Placement Season:</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>85.8% of eligible students were successfully placed</li>
              <li>Average package increased by 2.4% compared to last year</li>
              <li>Technology sector continues to be the dominant recruiter (60% of all placements)</li>
              <li>Data Science & AI roles saw the highest growth rate (+12%)</li>
              <li>MIT Manipal leads with 88% placement rate among all campuses</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium">Recommendations:</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Focus on developing skills in Data Science, AI, and Cybersecurity for higher packages</li>
              <li>Students with 8.5+ CGPA received 32% higher packages on average</li>
              <li>Project-based learning significantly improves placement chances</li>
              <li>Internship experience correlated with 18% higher starting packages</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-gray-500 mt-12">
        <p>Data source: MIT Placement Cell Records, {selectedYear}</p>
        <p className="mt-1">Last updated: April 10, {selectedYear}</p>
      </div>
    </div>
  );
};

export default Insights;