import React, { useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PartnershipSection = () => {
  const partners = [
    { name: 'Salesforce', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/Marketing-Cloud-Administrator.webp' },
    { name: 'Microsoft', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/B2C-Commerce-Developer.webp' },
    { name: 'AWS', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/CPQ-Specialist.webp' },
    { name: 'Google', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/Experience-Cloud-Consultant.webp' },
    { name: 'HubSpot', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/JavaScript-Developer-I.webp' },
    { name: 'Atlassian', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/Marketing-Cloud-Administrator.webp' },
    { name: 'Oracle', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/Marketing-Cloud-Email-Specialist.webp' },
    { name: 'Adobe', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/Pardot-Specialist.webp' },
    { name: 'IBM', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/Platform-App-Builder.webp' },
    { name: 'SAP', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/Platform-Developer-I.webp' },
    { name: 'Atlassian', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/Service-Cloud-Consultant.webp' },
    { name: 'Atlassian', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/Tableau-CRM-and-Einstein-Discovery-Consultant.webp' },
    { name: 'AWS', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/Available_On_Appexchange_Badge_RGB.webp' },
    { name: 'Google', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/partner-logo-1.webp' },
    { name: 'HubSpot', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/authorized-cloud-reseller-partner-badge-RGB.webp' },
    { name: 'Atlassian', logo: 'https://getoncrm.com/wp-content/uploads/2025/01/Pledge-1.webp' },
    { name: 'Oracle', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/ISOQAR-9001-Registered-1536x1528-1.webp' },
    { name: 'Adobe', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/image-55.webp' },
    { name: 'IBM', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/7701-2.webp' },
    { name: 'SAP', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/Clutch.webp' },
    { name: 'Atlassian', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/goodfirms-goc.webp' },
    { name: 'Atlassian', logo: 'https://getoncrm.com/wp-content/uploads/2025/03/forcetalk-goc.webp' },
  ];

  const midpoint = Math.ceil(partners.length / 2);
  const firstRowPartners = partners.slice(0, midpoint);
  const secondRowPartners = partners.slice(midpoint);

  // Create separate plugin instances
  const autoplay1 = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }));
  const autoplay2 = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <section className="bg-[#0a1b3c] text-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Carousel Section */}
          <div className="md:w-2/3 order-2 md:order-1 space-y-6">
            {[firstRowPartners, secondRowPartners].map((rowPartners, i) => (
              <Carousel
                key={i}
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                }}
                plugins={[i === 0 ? autoplay1.current : autoplay2.current]}
                className="w-full"
              >
                <CarouselContent className="-ml-2">
                  {rowPartners.map((partner, index) => (
                    <CarouselItem key={index} className="pl-6 basis-1/2 sm:basis-1/3 lg:basis-1/5">
                      <div className="bg-white p-4 rounded flex items-center justify-center h-40">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="h-full object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            ))}
          </div>

          {/* Text Section */}
          <div className="md:w-1/3 order-1 md:order-2">
            <h2 className="text-5xl font-prompt font-bold mb-4">Partnerships & Certifications</h2>
            <p className="text-gray-300 font-satoshi">
              We partner with industry leaders to deliver exceptional solutions and maintain the highest standards of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;