
import { useState, useEffect } from 'react';

// Define interfaces for our data
export interface CaseStudy {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  featured_media_url?: string;
  date: string;
  services: number[];
  industries?: number[];
  categoryNames?: string[];
  industryNames?: string[];
  slug: string;
  _embedded?: any;
}

export interface Term {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// Base URL for the WordPress REST API
const API_BASE_URL = 'https://getoncrm.com/wp-json/wp/v2';

// Custom hook to fetch case studies
export const useCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [categories, setCategories] = useState<Term[]>([]);
  const [industries, setIndustries] = useState<Term[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        setLoading(true);
        
        // Fetch services taxonomy (categories)
        const categoriesRes = await fetch(`${API_BASE_URL}/services`);
        const categoriesData = await categoriesRes.json();
        setCategories(categoriesData);
        
        // Fetch industries taxonomy
        const industriesRes = await fetch(`${API_BASE_URL}/industries`);
        const industriesData = await industriesRes.json();
        setIndustries(industriesData);
        
        // Fetch portfolio items (case studies) with embedded featured media
        const caseStudiesRes = await fetch(
          `${API_BASE_URL}/portfolio?_embed=true&per_page=100`
        );
        
        if (!caseStudiesRes.ok) {
          throw new Error('Failed to fetch case studies');
        }
        
        const caseStudiesData = await caseStudiesRes.json();
        
        // Process the data to add featured image URLs and term names
        const processedData = caseStudiesData.map((study: CaseStudy) => {
          // Extract featured image if available
          let featuredMediaUrl = '';
          if (study._embedded && 
              study._embedded['wp:featuredmedia'] && 
              study._embedded['wp:featuredmedia'][0]) {
            featuredMediaUrl = study._embedded['wp:featuredmedia'][0].source_url;
          }
          
          // Get category names (services taxonomy)
          const categoryNames = study.services
            ? study.services
                .map(catId => {
                  const category = categoriesData.find((cat: Term) => cat.id === catId);
                  return category ? category.name : '';
                })
                .filter(Boolean)
            : [];
            
          // Get industry names
          const industryNames = study.industries
            ? study.industries
                .map(indId => {
                  const industry = industriesData.find((ind: Term) => ind.id === indId);
                  return industry ? industry.name : '';
                })
                .filter(Boolean)
            : [];
            
          return {
            ...study,
            featured_media_url: featuredMediaUrl,
            categoryNames,
            industryNames,
          };
        });
        
        setCaseStudies(processedData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load case studies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  return { caseStudies, categories, industries, loading, error };
};

// Fallback data in case the API is not available
export const fallbackCaseStudies: CaseStudy[] = [
  {
    id: 1,
    title: {
      rendered: "Cost Optimization While Maintaining Workflow Integrity: Healthcare Partner's Transition to Salesforce PRM"
    },
    content: {
      rendered: "<p>How a healthcare partner optimized licensing costs and enhanced partner collaboration by seamlessly transitioning users to Salesforce PRM while maintaining existing workflows.</p>"
    },
    excerpt: {
      rendered: "<p>How a healthcare partner optimized licensing costs and enhanced partner collaboration by seamlessly transitioning users to Salesforce PRM while maintaining existing workflows.</p>"
    },
    featured_media: 1,
    featured_media_url: "/placeholder.svg",
    date: "2023-05-15",
    services: [1],
    industries: [1],
    categoryNames: ["Sales Cloud"],
    industryNames: ["Healthcare"],
    slug: "cost-optimization"
  },
  {
    id: 2,
    title: {
      rendered: "How GetOnCRM And Salesforce Empowered A Leading University To Rethink Student Engagement And Administration Efficiency"
    },
    content: {
      rendered: "<p>A leading University embarked on a transformative journey with Salesforce to improve student engagement and administrative efficiency by integrating with their Community Registration Portal.</p>"
    },
    excerpt: {
      rendered: "<p>A leading University embarked on a transformative journey with Salesforce to improve student engagement and administrative efficiency by integrating with their Community Registration Portal.</p>"
    },
    featured_media: 2,
    featured_media_url: "/placeholder.svg",
    date: "2023-06-20",
    services: [2],
    industries: [2],
    categoryNames: ["Salesforce CRM"],
    industryNames: ["Education"],
    slug: "university-engagement"
  }
];
