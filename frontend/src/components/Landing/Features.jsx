import React from 'react';
import { 
  FileSearch, 
  CheckCircle, 
  Zap,
  Clock,
  BarChart3,
  Shield,
} from 'lucide-react';
import FeatureCard from './FeatureCard';
const Features = () => {
  const features = [
    {
      icon: <FileSearch className="w-full h-full" />,
      title: "Smart Resume Parsing",
      description: "Automatically extract key information from resumes with advanced AI technology."
    },
    {
      icon: <CheckCircle className="w-full h-full" />,
      icon: <CheckCircle className="w-full h-full" />,
      title: "Candidate Matching",
      description: "Match candidates with job requirements using our intelligent scoring system."
    },
    {
      icon: <Zap className="w-full h-full" />,
      title: "Rapid Screening",
      description: "Process hundreds of resumes in minutes instead of hours."
    },
    {
      icon: <Clock className="w-full h-full" />,
      title: "Time-Saving Automation",
      description: "Automate repetitive tasks and focus on engaging with top candidates."
    },
    {
      icon: <BarChart3 className="w-full h-full" />,
      title: "Actionable Analytics",
      description: "Gain insights from comprehensive reports and analytics on your candidate pool."
    },
    {
      icon: <Shield className="w-full h-full" />,
      title: "Bias Reduction",
      description: "Minimize unconscious bias with objective, skills-based candidate assessment."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 " >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-4">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Streamline Your Recruitment Process</h2>
          <p className="text-xl text-gray-700">
            Our powerful features help you identify top talent quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
              className="animate-slide-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
