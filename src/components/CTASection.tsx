
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div 
          className="rounded-[16px] py-16" 
          style={{ 
            backgroundImage: 'url(https://getoncrm.com/wp-content/uploads/2024/12/GOC-Home-Page-CTA-Banner.webp)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="max-w-2xl z-10">
              <h2 className="text-3xl md:text-4xl font-prompt font-bold mb-6 text-gray-900">
                Experience Advanced Salesforce Solutions by GetOnCRM Solutions.
              </h2>
              
              <Link 
                to="https://getoncrm.com/contact-us/" 
                className="inline-block bg-primary hover:bg-primary/90 text-white font-satoshi font-medium py-3 px-8 rounded"
              >
                Connect Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
