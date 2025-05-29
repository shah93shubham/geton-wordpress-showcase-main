
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/case-study" className="text-2xl font-bold text-primary">
          <img src="https://getoncrm.com/wp-content/uploads/2024/09/175_70-GOC-Logo.webp" alt="GetOnCRM" className="h-16" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium text-black hover:text-[#707070]">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/about/" className="block p-2 hover:text-[#707070] text-black">
                          About
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/blog/" className="block p-2 hover:text-[#707070] text-black">
                          Insights
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/culture-insights/" className="block p-2 hover:text-[#707070] text-black">
                          Culture Insights
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/quality-management-system-policy/" className="block p-2 hover:text-[#707070] text-black">
                          QMS Policy
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/career/" className="block p-2 hover:text-[#707070] text-black">
                          Career
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium text-black hover:text-[#707070]">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-[35%_35%_30%] gap-6 p-6 w-[850px]">
                    <div>
                      <Link to="https://getoncrm.com/salesforce-implementation-services/" className="font-medium hover:text-[#707070] text-black"><h3 className="font-prompt font-medium mb-2 text-black">Salesforce Implementation Services</h3></Link>
                      <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                        <li><Link to="https://getoncrm.com/salesforce-sales-cloud/" className="text-sm hover:text-[#707070] text-black">Sales Cloud</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-agentforce-services/" className="text-sm hover:text-[#707070] text-black">Agetnforce</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-service-cloud/" className="text-sm hover:text-[#707070] text-black">Service Cloud</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-data-cloud/" className="text-sm hover:text-[#707070] text-black">Data Cloud</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-marketing-cloud/" className="text-sm hover:text-[#707070] text-black">Marketing Cloud</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-experience-cloud-services/" className="text-sm hover:text-[#707070] text-black">Experience Cloud</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-commerce-cloud/" className="text-sm hover:text-[#707070] text-black">Commerce Cloud</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-field-service-lightning/" className="text-sm hover:text-[#707070] text-black">Field Service</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-health-cloud/" className="text-sm hover:text-[#707070] text-black">Health Cloud</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-einstein/" className="text-sm hover:text-[#707070] text-black">Einstein</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-prompt font-medium mb-2 text-black">Salesforce Development Services</h3>
                      <ul className="space-y-1">
                        <li><Link to="https://getoncrm.com/salesforce-mobile-application/" className="text-sm hover:text-[#707070] text-black">Custom Cloud App Development</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-appexchange/" className="text-sm hover:text-[#707070] text-black">AppExchange Product Development</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-prompt font-medium mb-2 text-black">Our Core Services</h3>
                      <ul className="space-y-1">
                        <li><Link to="https://getoncrm.com/salesforce-consulting-services/" className="text-sm hover:text-[#707070] text-black">Consulting Services</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-integration/" className="text-sm hover:text-[#707070] text-black">Integration Services</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-data-migration/" className="text-sm hover:text-[#707070] text-black">Data Migration</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-managed-services/" className="text-sm hover:text-[#707070] text-black">Managed Services</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-health-check/" className="text-sm hover:text-[#707070] text-black">Healthcheck</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-pardot/" className="text-sm hover:text-[#707070] text-black">Pardot</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-cpq/" className="text-sm hover:text-[#707070] text-black">CPQ</Link></li>
                        <li><Link to="https://getoncrm.com/salesforce-industries/" className="text-sm hover:text-[#707070] text-black">Industries</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium text-black hover:text-[#707070]">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/salesforce-indiamart-integration/" className="block p-2 hover:text-[#707070] text-black rounded-md">
                          Salesforce Indiamart Integration
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/storage-plus/" className="block p-2 hover:text-[#707070] text-black rounded-md">
                          Storage Plus
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium text-black hover:text-[#707070]">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/salesforce-fintech-services/" className="block p-2 hover:text-[#707070] text-black rounded-md">
                          Financial Services
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/salesforce-healthcare/" className="block p-2 hover:text-[#707070] text-black rounded-md">
                          Healthcare
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/salesforce-manufacturing/" className="block p-2 hover:text-[#707070] text-black rounded-md">
                          Manufacturing
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/salesforce-education/" className="block p-2 hover:text-[#707070] text-black rounded-md">
                          Education
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/salesforce-for-retail/" className="block p-2 hover:text-[#707070] text-black rounded-md">
                          Retail
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/public-sector-solutions/" className="block p-2 hover:text-[#707070] text-black rounded-md">
                          Public Sector
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="https://getoncrm.com/salesforce-renewable-energy/" className="block p-2 hover:text-[#707070] text-black rounded-md">
                          Renewable Energy
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link to="https://getoncrm.com/case-studies/" className="font-medium text-black hover:text-[#707070]">
            Case Studies
          </Link>
          
          <Link to="https://getoncrm.com/salesforce-reseller/" className="font-medium text-black hover:text-[#707070]">
            Salesforce Reseller
          </Link>
          
          <Link to="https://getoncrm.com/contact-us/" className="bg-primary hover:bg-primary/90 text-white font-medium py-4 px-6 rounded">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-black" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="py-2 border-b">
              <div className="flex justify-between items-center py-2" onClick={() => {}}>
                <span className="font-medium">Company</span>
                <ChevronDown size={18} />
              </div>
            </div>

            <div className="py-2 border-b">
              <div className="flex justify-between items-center py-2" onClick={() => {}}>
                <span className="font-medium">Services</span>
                <ChevronDown size={18} />
              </div>
            </div>

            <div className="py-2 border-b">
              <div className="flex justify-between items-center py-2" onClick={() => {}}>
                <span className="font-medium">Products</span>
                <ChevronDown size={18} />
              </div>
            </div>

            <div className="py-2 border-b">
              <div className="flex justify-between items-center py-2" onClick={() => {}}>
                <span className="font-medium">Industries</span>
                <ChevronDown size={18} />
              </div>
            </div>

            <Link 
              to="/case-studies" 
              className="text-gray-800 hover:text-[#707070] font-medium py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            
            <Link 
              to="/salesforce-reseller" 
              className="text-gray-800 hover:text-[#707070] font-medium py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Salesforce Reseller
            </Link>
            
            <Link 
              to="/contact" 
              className="mt-2 bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
