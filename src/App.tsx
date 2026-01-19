
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Data from './pages/Data';
import CompanyDetails from "./pages/CompanyDetails";
import JobDetails from "./pages/JobDetails";
import Insights from "./pages/Insights";
// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import Jobs from "./pages/Jobs";
import Predict from "./pages/Predict";
import NotFound from "./pages/NotFound";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

// Layout with Navbar and Footer
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Index /></Layout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/data" element={<Data />} />
      <Route path="/companies/:id" element={<CompanyDetails />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      
      {/* Protected routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Layout><Dashboard /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/companies" element={
        <ProtectedRoute>
          <Layout><Companies /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/jobs" element={
        <ProtectedRoute>
          <Layout><Jobs /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/predict" element={
        <ProtectedRoute>
          <Layout><Predict /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/insights" element={
      <ProtectedRoute>
        <Layout><Insights /></Layout>
      </ProtectedRoute>
    } />
      
      {/* 404 route */}
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
