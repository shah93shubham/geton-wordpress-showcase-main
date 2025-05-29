
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a1b3c] text-white pt-4 pb-8">
      <div className="container mx-auto">
        {/* Contact Info Section - 5 Column Layout */}
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Column 1: Title */}
            <div className="flex flex-col">
              <h3 className="text-xl font-prompt font-bold">Contact us for Sales Enquiries</h3>
            </div>
            
            {/* Column 2: USA */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://getoncrm.com/wp-content/uploads/2024/10/usa-flag.svg" alt="USA Flag" className="h-4" />
                <span className="font-prompt font-bold">USA</span>
              </div>
              <a href="tel:+13312202070" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                +1 331-220-2070
              </a>
            </div>
            
            {/* Column 3: UAE */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://getoncrm.com/wp-content/uploads/2024/10/uae-flag.svg" alt="UAE Flag" className="h-4" />
                <span className="font-prompt font-bold">UAE</span>
              </div>
               <a href="tel:+971543770990" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                +971 54-377-0990
              </a>
            </div>
            
            {/* Column 4: India */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://getoncrm.com/wp-content/uploads/2024/10/india-flag-1.svg" alt="India Flag" className="h-4" />
                <span className="font-prompt font-bold">India</span>
              </div>
              <a href="tel:+919909987042" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                +91 9909987042
              </a>
            </div>
            
            {/* Column 5: Email */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Mail size={16} />
                <span className="font-prompt font-bold">Mail us on</span>
              </div>
              <a href="mailto:sales@getoncrm.com" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                sales@getoncrm.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Second Row - 5 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-gray-700 pt-10">
          {/* Column 1: Our Services */}
          <div>
            <h3 className="text-xl font-prompt font-bold mb-4">Our Services</h3>
            <div className="flex flex-col gap-y-2">
              <Link to="https://getoncrm.com/salesforce-consulting-services/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Consulting Services
              </Link>
              <Link to="https://getoncrm.com/salesforce-implementation-services/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Implementation Services
              </Link>
              <Link to="https://getoncrm.com/salesforce-integration/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Integration Services
              </Link>
              <Link to="https://getoncrm.com/salesforce-mobile-application/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Cloud App Development
              </Link>
              <Link to="https://getoncrm.com/salesforce-managed-services/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Managed Services
              </Link>
              <Link to="https://getoncrm.com/salesforce-health-check/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Health Check
              </Link>
              <Link to="https://getoncrm.com/salesforce-data-migration/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Data Migration
              </Link>
            </div>
          </div>
          
          {/* Column 2: Sales Cloud */}
          <div>
            <h3 className="text-xl font-prompt font-bold mb-4">&nbsp;</h3>
            <div className="flex flex-col gap-y-2">
              <Link to="https://getoncrm.com/salesforce-sales-cloud/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Sales Cloud
              </Link>
              <Link to="https://getoncrm.com/salesforce-service-cloud/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Service Cloud
              </Link>
              <Link to="https://getoncrm.com/salesforce-marketing-cloud/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Marketing Cloud
              </Link>
              <Link to="https://getoncrm.com/salesforce-health-cloud/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Health Cloud
              </Link>
              <Link to="https://getoncrm.com/salesforce-data-cloud/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Data Cloud
              </Link>
              <Link to="https://getoncrm.com/salesforce-experience-cloud-services/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Experience Cloud
              </Link>
              <Link to="https://getoncrm.com/salesforce-pardot/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Pardot
              </Link>
            </div>
          </div>
          
          {/* Column 4: Manufacturing */}
          <div>
            <h3 className="text-xl font-prompt font-bold mb-4">&nbsp;</h3>
            <div className="flex flex-col gap-y-2">
              <Link to="https://getoncrm.com/salesforce-agentforce-services/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Agetnforce
              </Link>
              <Link to="https://getoncrm.com/salesforce-einstein/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Einstein
              </Link>
              <Link to="https://getoncrm.com/salesforce-field-service-lightning/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Field Service
              </Link>
              <Link to="https://getoncrm.com/salesforce-reseller/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Reseller Partner
              </Link>
              <h3 className="text-xl font-prompt font-bold mt-4 mb-2">Products</h3>
                <Link to="https://getoncrm.com/salesforce-indiamart-integration/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                  Indiamart Integration
                </Link>
                <Link to="https://getoncrm.com/storage-plus/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                  Storage Plus
                </Link>
            </div>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="text-xl font-prompt font-bold mb-4">Industries</h3>
            <div className="flex flex-col gap-y-2">
              <Link to="https://getoncrm.com/salesforce-fintech-services/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Financial Services
              </Link>
              <Link to="https://getoncrm.com/salesforce-healthcare/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Healthcare
              </Link>
              <Link to="https://getoncrm.com/salesforce-manufacturing/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Manufacturing
              </Link>
              <Link to="https://getoncrm.com/salesforce-education/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Education
              </Link>
              <Link to="https://getoncrm.com/salesforce-for-retail/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Retail
              </Link>
              <Link to="https://getoncrm.com/public-sector-solutions/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Public Sector
              </Link>
              <Link to="https://getoncrm.com/salesforce-renewable-energy/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Renewable Energy
              </Link>
            </div>
          </div>
          
          {/* Column 5: Quick Links & Want to work with us */}
          <div>
            <h3 className="text-xl font-prompt font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-y-2">
              <Link to="https://getoncrm.com/about/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                About Us
              </Link>
              <Link to="https://getoncrm.com/blog/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Insights
              </Link>
              <Link to="https://getoncrm.com/case-studies/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
                Case Studies
              </Link>
            </div>
            
            <h3 className="text-xl font-prompt font-bold mt-8 mb-4">Want to work with us</h3>
            <Link to="https://getoncrm.com/career/" className="font-satoshi text-sm hover:text-blue-400 transition-colors">
              Know Our Latest Openings
            </Link>
            
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/company/getoncrm-solutions/" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/getoncrm_solutions/" className="hover:text-blue-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com/getoncrm" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.facebook.com/GetonCRM/" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UC2wa0_gNlifaKdP4NZeiOTw" className="hover:text-blue-400 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3A00000FR4oQUAT" className="hover:text-blue-400 transition-colors">
                <img src="https://placehold.co/24x24/fff/aaa?text=SF" alt="Salesforce Icon" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Row - Third Row */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm font-satoshi text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GetOnCRM Solutions PVT. LTD. All Rights Reserved.
            </div>
            <div className="text-sm font-satoshi">
              <a href="https://getoncrm.com/privacy-policy/" className="text-gray-400 hover:text-blue-400 mr-4">Privacy Policy</a>
              <a href="https://getoncrm.com/cookies-policy/" className="text-gray-400 hover:text-blue-400">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
