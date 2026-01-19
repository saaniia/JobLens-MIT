
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, ArrowUpRight } from 'lucide-react';

// Mock company data
import { companiesData } from '@/data/mock-data';

const sectors = ["All Sectors", "Technology", "IT Services", "Consulting", "Finance", "Manufacturing"];
const campuses = ["All Campuses", "Manipal", "Bengaluru", "Jaipur", "Sikkim"];

const Companies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All Sectors');
  const [selectedCampus, setSelectedCampus] = useState('All Campuses');

  // Filter companies based on search term and filters
  const filteredCompanies = companiesData.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'All Sectors' || company.sector === selectedSector;
    const matchesCampus = selectedCampus === 'All Campuses' || company.campuses.includes(selectedCampus);
    
    return matchesSearch && matchesSector && matchesCampus;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Companies</h1>
        <p className="text-gray-600">Explore companies visiting MIT campuses for placements</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search companies..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-48">
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger>
                <SelectValue placeholder="Sector" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map(sector => (
                  <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-48">
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
          </div>
          
          <Button variant="outline" onClick={() => {
            setSearchTerm('');
            setSelectedSector('All Sectors');
            setSelectedCampus('All Campuses');
          }} className="w-full sm:w-auto">
            <Filter size={16} className="mr-2" /> Reset filters
          </Button>
        </div>
      </div>

      {/* Companies List */}
      {filteredCompanies.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">No companies found matching your filters.</p>
          <Button variant="outline" onClick={() => {
            setSearchTerm('');
            setSelectedSector('All Sectors');
            setSelectedCampus('All Campuses');
          }} className="mt-4">
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <Card key={company.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="h-14 w-14 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-bold mr-4">
                    {company.logo}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold truncate">{company.name}</h3>
                      <Badge>{company.sector}</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {company.roleCount} open roles
                    </p>
                    <div className="mt-3">
                      <p className="text-sm font-medium">
                        Package range: {company.avgPackage}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {company.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex text-xs space-x-1">
                        {company.campuses.slice(0, 2).map((campus, index) => (
                          <Badge key={index} variant="outline" className="font-normal">
                            MIT {campus}
                          </Badge>
                        ))}
                        {company.campuses.length > 2 && (
                          <Badge variant="outline" className="font-normal">
                            +{company.campuses.length - 2} more
                          </Badge>
                        )}
                      </div>
                      <Link to={`/companies/${company.id}`}>
                        <Button size="sm" variant="ghost">
                          Details <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Companies;
