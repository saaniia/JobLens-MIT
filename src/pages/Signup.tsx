
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import Logo from '@/components/Logo';

const campuses = [
  { value: 'manipal', label: 'MIT Manipal' },
  { value: 'bengaluru', label: 'MIT Bengaluru' },
  { value: 'jaipur', label: 'Manipal University Jaipur' },
  { value: 'gangtok', label: 'SMIT' }
];

const departments = [
  { value: 'cs', label: 'Computer Science' },
  { value: 'ec', label: 'Electronics & Communication' },
  { value: 'ee', label: 'Electrical & Electronics' },
  { value: 'me', label: 'Mechanical Engineering' },
  { value: 'ce', label: 'Civil Engineering' },
  { value: 'ch', label: 'Chemical Engineering' },
  { value: 'bt', label: 'Biotechnology' }
];

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [campus, setCampus] = useState('');
  const [department, setDepartment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formattedCampus = campuses.find(c => c.value === campus)?.label || campus;
      const formattedDepartment = departments.find(d => d.value === department)?.label || department;
      
      await signup(name, email, password, formattedCampus, formattedDepartment);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="mb-8">
        <Logo />
      </div>
      
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your information to get started with JobLens MIT
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500">Preferably use your university email address</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="campus">Campus</Label>
              <Select value={campus} onValueChange={setCampus} required>
                <SelectTrigger id="campus">
                  <SelectValue placeholder="Select your campus" />
                </SelectTrigger>
                <SelectContent>
                  {campuses.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select value={department} onValueChange={setDepartment} required>
                <SelectTrigger id="department">
                  <SelectValue placeholder="Select your department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((d) => (
                    <SelectItem key={d.value} value={d.value}>
                      {d.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || !name || !email || !password || !campus || !department}
            >
              {isSubmitting ? 'Creating Account...' : 'Sign up'}
            </Button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-joblens-primary hover:underline">
                Log in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
