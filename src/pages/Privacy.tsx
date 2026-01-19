import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p>Last updated: April 13, 2025</p>
          
          <h2>Introduction</h2>
          <p>
            JobLens MIT ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our job 
            placement portal for MIT campuses.
          </p>
          
          <h2>Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, campus, department, semester, GPA/CGPA</li>
            <li><strong>Resume Data:</strong> Information you provide in uploaded resumes</li>
            <li><strong>Usage Data:</strong> How you interact with our platform, including job searches and predictions</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>We use the collected information for various purposes, including:</p>
          <ul>
            <li>Providing and personalizing our services</li>
            <li>Generating job eligibility predictions</li>
            <li>Improving our prediction algorithms</li>
            <li>Sending notifications about relevant job opportunities</li>
            <li>Analyzing usage patterns to enhance user experience</li>
          </ul>
          
          <h2>Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. Your data may be shared with:
          </p>
          <ul>
            <li>University placement offices to facilitate your job applications</li>
            <li>Service providers who help us operate our platform</li>
            <li>When required by law or to protect our rights</li>
          </ul>
          
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
          
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have rights to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Restrict certain processing activities</li>
          </ul>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:privacy@joblens-mit.edu">privacy@joblens-mit.edu</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Privacy;