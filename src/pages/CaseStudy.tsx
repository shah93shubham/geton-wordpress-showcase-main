
import React, { useState, useMemo } from 'react';
import { useCaseStudies, fallbackCaseStudies } from '@/services/wordpressApi';
import CaseStudyCard from '@/components/CaseStudyCard';
import FilterTabs from '@/components/FilterTabs';
import Header from '@/components/Header';
import PartnershipSection from '@/components/PartnershipSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const CaseStudy = () => {
  const { caseStudies, categories, industries, loading, error } = useCaseStudies();
  const { toast } = useToast();
  
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);
  const [visiblePosts, setVisiblePosts] = useState(6);
  
  // Show error toast if API fails
  React.useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    }
  }, [error, toast]);
  
  // Filter case studies based on selected category and industry
  const filteredCaseStudies = useMemo(() => {
    // Use fallback data if API call fails
    const studies = caseStudies.length > 0 ? caseStudies : fallbackCaseStudies;
    
    return studies.filter(study => {
      const matchesCategory = selectedCategory === null || 
        (study.services && study.services.includes(selectedCategory));
      
      const matchesIndustry = selectedIndustry === null || 
        (study.industries && study.industries.includes(selectedIndustry));
      
      return matchesCategory && matchesIndustry;
    });
  }, [caseStudies, selectedCategory, selectedIndustry]);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Header Section with Background Image */}
      <header 
        className="pt-16 pb-28 px-4 text-center bg-cover bg-center h-[330px] flex items-center justify-center mt-20"
        style={{ backgroundImage: 'url(https://getoncrm.com/wp-content/uploads/2025/01/Vector-8-2.webp)' }}
      >
        <div className="container mx-auto">
          <h1 className="text-6xl md:text-7xl font-prompt font-bold mb-4 text-gray-900">
            Case Studies
          </h1>
          <p className="text-lg font-satoshi text-gray-600 max-w-2xl mx-auto">
            See how we deliver client's ideas into excellent results!
          </p>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Filter Section */}
        <div className="mb-8">
          <FilterTabs
            serviceTerms={categories}
            industryTerms={industries}
            selectedServiceId={selectedCategory}
            selectedIndustryId={selectedIndustry}
            onSelectService={setSelectedCategory}
            onSelectIndustry={setSelectedIndustry}
          />
        </div>
        
        {/* Case Studies Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : filteredCaseStudies.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCaseStudies.slice(0, visiblePosts).map(study => (
                <CaseStudyCard key={study.id} caseStudy={study} />
              ))}
            </div>
            
            {visiblePosts < filteredCaseStudies.length && (
              <div className="flex justify-center mt-10">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white font-satoshi font-bold py-2 px-6 rounded"
                  onClick={handleLoadMore}
                >
                  Load More
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-prompt font-medium text-gray-600">
              No case studies found matching your criteria.
            </h3>
            <p className="mt-2 font-satoshi text-gray-500">
              Try changing your filter selections.
            </p>
          </div>
        )}
      </main>
      
      {/* Partnership Section - Now appears before CTA Section */}
      <PartnershipSection />
      
      {/* CTA Section - Now appears after Partnership Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CaseStudy;
