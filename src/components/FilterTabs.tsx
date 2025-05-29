
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Term } from '@/services/wordpressApi';
import { RefreshCw, Minus, Plus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FilterTabsProps {
  serviceTerms: Term[];
  industryTerms: Term[];
  selectedServiceId: number | null;
  selectedIndustryId: number | null;
  onSelectService: (id: number | null) => void;
  onSelectIndustry: (id: number | null) => void;
}

const FilterTabs = ({ 
  serviceTerms,
  industryTerms,
  selectedServiceId,
  selectedIndustryId,
  onSelectService,
  onSelectIndustry
}: FilterTabsProps) => {
  const [visibleServices, setVisibleServices] = useState(5);
  const [visibleIndustries, setVisibleIndustries] = useState(5);
  const [activeTab, setActiveTab] = useState("services");
  
  const showMoreServices = () => {
    setVisibleServices(serviceTerms.length);
  };
  
  const showLessServices = () => {
    setVisibleServices(5);
  };
  
  const showMoreIndustries = () => {
    setVisibleIndustries(industryTerms.length);
  };
  
  const showLessIndustries = () => {
    setVisibleIndustries(5);
  };
  
  const resetServiceFilter = () => {
    onSelectService(null);
  };
  
  const resetIndustryFilter = () => {
    onSelectIndustry(null);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  return (
    <div className="mb-6">
      <Tabs 
        defaultValue="services" 
        value={activeTab}
        onValueChange={handleTabChange} 
        className="w-full"
      >
        <TabsList className="w-full mb-4 bg-transparent p-0 h-auto gap-6">
          <TabsTrigger 
            className="custom-tabs-trigger w-1/2 font-prompt text-base border border-gray-200 rounded-lg flex items-center justify-between"
            value="services"
          >
            <span>Services</span>
            {activeTab === "services" ? (
              <Minus size={16} className="ml-2" />
            ) : (
              <Plus size={16} className="ml-2" />
            )}
          </TabsTrigger>
          <TabsTrigger 
            className="custom-tabs-trigger w-1/2 font-prompt text-base border border-gray-200 rounded-lg flex items-center justify-between"
            value="industries"
          >
            <span>Industries</span>
            {activeTab === "industries" ? (
              <Minus size={16} className="ml-2" />
            ) : (
              <Plus size={16} className="ml-2" />
            )}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="services" className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-2">
            {serviceTerms.slice(0, visibleServices).map((term) => (
              <Button
                key={term.id}
                variant={selectedServiceId === term.id ? "default" : "outline"}
                className={`filter-button whitespace-nowrap text-sm rounded-lg border ${
                  selectedServiceId === term.id 
                    ? "filter-button-active" 
                    : "filter-button-inactive"
                }`}
                onClick={() => onSelectService(term.id)}
              >
                {term.name}
              </Button>
            ))}
          </div>
          
          <div className="flex justify-between mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetServiceFilter}
              className="flex items-center gap-1 font-satoshi"
            >
              <RefreshCw size={14} /> Reset
            </Button>
            
            {serviceTerms.length > 5 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={visibleServices === 5 ? showMoreServices : showLessServices}
                className="font-satoshi"
              >
                {visibleServices === 5 ? "Show More" : "Show Less"}
              </Button>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="industries" className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-2">
            {industryTerms.slice(0, visibleIndustries).map((term) => (
              <Button
                key={term.id}
                variant={selectedIndustryId === term.id ? "default" : "outline"}
                className={`filter-button whitespace-nowrap text-sm rounded-lg border ${
                  selectedIndustryId === term.id 
                    ? "filter-button-active" 
                    : "filter-button-inactive"
                }`}
                onClick={() => onSelectIndustry(term.id)}
              >
                {term.name}
              </Button>
            ))}
          </div>
          
          <div className="flex justify-between mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetIndustryFilter}
              className="flex items-center gap-1 font-satoshi"
            >
              <RefreshCw size={14} /> Reset
            </Button>
            
            {industryTerms.length > 5 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={visibleIndustries === 5 ? showMoreIndustries : showLessIndustries}
                className="font-satoshi"
              >
                {visibleIndustries === 5 ? "Show More" : "Show Less"}
              </Button>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FilterTabs;
