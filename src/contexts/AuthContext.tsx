
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  campus: string;
  department: string;
  semester: number;
  gpa: number;
}

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, campus: string, department: string) => Promise<void>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock user data for demo purposes
const MOCK_USER: User = {
  id: "u1",
  name: "Aditya Sharma",
  email: "aditya.sharma@example.com",
  campus: "MIT Bengaluru",
  department: "Computer Science",
  semester: 6,
  gpa: 8.7
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in local storage on component mount
    const storedUser = localStorage.getItem('joblens_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // In a real application, we would make an API call here
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, check if it's the demo account
      if (email === "demo@mit.edu" && password === "password") {
        setCurrentUser(MOCK_USER);
        localStorage.setItem('joblens_user', JSON.stringify(MOCK_USER));
        toast.success("Login successful!");
        return;
      }
      
      // Check for accounts created through signup
      const storedUsers = localStorage.getItem('joblens_users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Find user with matching email
      const user = users.find((u: any) => u.email === email);
      
      // In a real app, you would check hashed passwords here
      // For demo, we'll just check if user exists (since we don't store passwords securely in this demo)
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('joblens_user', JSON.stringify(user));
        toast.success("Login successful!");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string, campus: string, department: string) => {
    try {
      // In a real application, we would make an API call here
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, create a new user based on the input
      const newUser: User = {
        id: `u${Math.floor(Math.random() * 1000)}`,
        name,
        email,
        campus,
        department,
        semester: 1, // Default values
        gpa: 0 // Default values
      };
      
      // Get existing users or initialize empty array
      const storedUsers = localStorage.getItem('joblens_users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Check if email already exists
      if (users.some((user: User) => user.email === email)) {
        throw new Error("Email already exists");
      }
      
      // Add new user to array
      users.push(newUser);
      
      // Save updated users array
      localStorage.setItem('joblens_users', JSON.stringify(users));
      
      // Set current user
      setCurrentUser(newUser);
      localStorage.setItem('joblens_user', JSON.stringify(newUser));
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Signup failed. Please try again.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('joblens_user');
    toast.info("You have been logged out.");
  };

  const updateProfile = async (userData: Partial<User>) => {
    try {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!currentUser) {
        throw new Error("No user is logged in");
      }
      
      const updatedUser = { ...currentUser, ...userData };
      setCurrentUser(updatedUser);
      localStorage.setItem('joblens_user', JSON.stringify(updatedUser));
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    loading,
    login,
    signup,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};