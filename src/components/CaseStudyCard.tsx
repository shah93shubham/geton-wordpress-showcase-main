
import React from 'react';
import { Card } from "@/components/ui/card";
import { CaseStudy } from '@/services/wordpressApi';
import { ExternalLink } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  // Function to safely parse HTML content
  const createMarkup = (html: string) => {
    return { __html: html };
  };
  
  // Function to get the post URL from the slug
  const getPostUrl = () => {
    // Using WordPress site URL or fallback to slug
    return `https://getoncrm.com/portfolio/${caseStudy.slug}`;
  };

  return (
    <a 
      href={getPostUrl()} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block"
    >
      <Card className="case-study-card relative h-[300px] overflow-hidden group cursor-pointer transition-all duration-300">
        {/* Hover effect overlay */}
        <div className="card-hover-effect"></div>
        
        {/* Featured Image with Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full">
          {caseStudy.featured_media_url ? (
            <img 
              src={caseStudy.featured_media_url} 
              alt={caseStudy.title.rendered} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200"></div>
          )}
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>
          
          {/* Sky Blue Hover Overlay - Hidden initially, shown on hover */}
          <div className="absolute inset-0 bg-[#33C3F0] opacity-0 group-hover:opacity-90 transition-all duration-500 transform translate-y-full group-hover:translate-y-0"></div>
        </div>
        
        {/* Content - Moved to bottom with flex-col-reverse */}
        <div className="relative z-10 flex flex-col-reverse h-full p-6 text-white">
          {/* External link icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink size={20} />
          </div>
          
          <div>
            <h3 
              className="text-xl font-bold mb-2 line-clamp-2"
              dangerouslySetInnerHTML={createMarkup(caseStudy.title.rendered)} 
            />
            
            <div 
              className="text-sm line-clamp-3"
              dangerouslySetInnerHTML={createMarkup(caseStudy.excerpt.rendered)} 
            />
          </div>
        </div>
      </Card>
    </a>
  );
};

export default CaseStudyCard;
