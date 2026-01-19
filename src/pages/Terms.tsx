import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p>Last updated: April 13, 2025</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using JobLens MIT, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our platform.
          </p>
          
          <h2>2. User Eligibility</h2>
          <p>
            JobLens MIT is available only to students and alumni of MIT campuses. You represent and warrant 
            that you are a current student or alumnus of an MIT campus and that you have the right, authority, 
            and capacity to agree to these Terms.
          </p>
          
          <h2>3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all 
            activities that occur under your account. Notify us immediately of any unauthorized use of your account.
          </p>
          
          <h2>4. User Content</h2>
          <p>
            You retain ownership of the content you submit to JobLens MIT, including resumes and personal information. 
            However, you grant us a non-exclusive license to use this content to provide, improve, and promote our services.
          </p>
          
          <h2>5. Prediction Accuracy</h2>
          <p>
            Our eligibility prediction service uses algorithms based on historical data. While we strive for accuracy, 
            we cannot guarantee the predictions will perfectly match actual recruitment outcomes. Predictions should be used 
            as guidance only.
          </p>
          
          <h2>6. Prohibited Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for any illegal purpose</li>
            <li>Submit false or misleading information</li>
            <li>Attempt to access other users' accounts</li>
            <li>Interfere with the proper functioning of the platform</li>
            <li>Circumvent any security features</li>
          </ul>
          
          <h2>7. Disclaimers</h2>
          <p>
            JobLens MIT is provided "as is" without warranties of any kind, either express or implied. 
            We do not guarantee job placement or interview opportunities.
          </p>
          
          <h2>8. Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting 
            from your use of or inability to use the service.
          </p>
          
          <h2>9. Modifications to Terms</h2>
          <p>
            We may modify these Terms at any time. Continued use of JobLens MIT after changes constitutes acceptance 
            of the modified Terms.
          </p>
          
          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of India, without regard to its conflict of law provisions.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at:
            <br />
            <a href="mailto:legal@joblens-mit.edu">legal@joblens-mit.edu</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Terms;