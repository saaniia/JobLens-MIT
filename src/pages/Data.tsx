import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Data: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Data Usage Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p>Last updated: April 13, 2025</p>
          
          <h2>Overview</h2>
          <p>
            This Data Usage Policy explains how JobLens MIT collects, processes, and utilizes data to provide 
            job placement services and eligibility predictions for MIT campus students.
          </p>
          
          <h2>Data Collection</h2>
          <p>We collect the following types of data:</p>
          <ul>
            <li><strong>Personal Data:</strong> Information that identifies you, such as name, email, and academic records</li>
            <li><strong>Placement Data:</strong> Historical placement information (anonymized)</li>
            <li><strong>Usage Data:</strong> How you interact with our platform</li>
            <li><strong>Resume Data:</strong> Content from resumes you upload</li>
          </ul>
          
          <h2>Use of Machine Learning</h2>
          <p>
            JobLens MIT employs machine learning algorithms to:
          </p>
          <ul>
            <li>Generate job eligibility predictions based on your profile and historical placement data</li>
            <li>Recommend skills you might want to develop</li>
            <li>Match your profile with suitable job opportunities</li>
          </ul>
          <p>
            Our algorithms use anonymized historical data from previous placement seasons, including successful and 
            unsuccessful applications.
          </p>
          
          <h2>Data Retention</h2>
          <p>
            We retain your personal data for as long as you maintain an active account. Historical placement data 
            is retained indefinitely in anonymized form to improve our prediction models.
          </p>
          
          <h2>Academic Research</h2>
          <p>
            With explicit consent, we may use anonymized data for academic research to improve placement outcomes 
            for students. Research findings may be published in academic journals or conferences without 
            identifying individual users.
          </p>
          
          <h2>Algorithmic Transparency</h2>
          <p>
            Our prediction algorithms consider factors including:
          </p>
          <ul>
            <li>CGPA/GPA</li>
            <li>Skills listed on your profile and resume</li>
            <li>Your department and campus</li>
            <li>Project experience</li>
            <li>Historical placement patterns</li>
          </ul>
          
          <h2>Third-Party Data Processing</h2>
          <p>
            We may use third-party services for data storage and processing. All third-party providers are 
            required to maintain confidentiality and security of your data.
          </p>
          
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Request data correction</li>
            <li>Opt out of predictive features</li>
            <li>Request data deletion (with certain limitations)</li>
          </ul>
          
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Data Usage Policy periodically. We will notify you of significant changes 
            via email or through the platform.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            For questions about our data practices, please contact:
            <br />
            <a href="mailto:data@joblens-mit.edu">data@joblens-mit.edu</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Data;