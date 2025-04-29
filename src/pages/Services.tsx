
import Hero from "@/components/Hero";
import { Code, Smartphone, Cctv, Monitor, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "web-dev",
      title: "Web & Software Development",
      icon: Code,
      description: "We create custom websites and web applications that are both visually appealing and functionally powerful.",
      details: [
        "Custom websites and web applications",
        "E-commerce platforms",
        "Real estate management systems",
        "Hospital management software",
        "Hotel booking systems",
        "Cryptocurrency platforms",
        "Online banking solutions",
        "SaaS applications",
        "Portfolio websites",
        "Landing pages"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      icon: Smartphone,
      description: "We build high-performance native and cross-platform mobile applications for iOS and Android devices.",
      details: [
        "iOS app development",
        "Android app development",
        "Cross-platform applications",
        "Mobile e-commerce apps",
        "Delivery service apps",
        "Educational mobile apps",
        "Healthcare applications",
        "Banking & finance apps",
        "Social media applications",
        "Entertainment apps"
      ],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: "cctv",
      title: "CCTV Installation",
      icon: Cctv,
      description: "We provide professional CCTV installation services for homes, offices, and commercial properties.",
      details: [
        "Security camera systems",
        "IP camera networks",
        "Wireless surveillance systems",
        "Remote monitoring solutions",
        "Access control integration",
        "Motion detection systems",
        "CCTV maintenance and support",
        "Video analytics",
        "Facial recognition systems",
        "24/7 monitoring services"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: "ip-phone",
      title: "IP Phone Installation",
      icon: Monitor,
      description: "We implement modern IP telephony systems that reduce costs and enhance communication capabilities.",
      details: [
        "VoIP phone systems",
        "IP PBX installation",
        "SIP trunking",
        "Unified communications",
        "Video conferencing integration",
        "Call center solutions",
        "Cloud telephony services",
        "Multi-site deployments",
        "Legacy system integration",
        "Ongoing support and maintenance"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: "it-consultancy",
      title: "IT Consultancy",
      icon: Briefcase,
      description: "We provide expert IT consultancy services to help organizations optimize their technology strategy and implementation.",
      details: [
        "IT strategy development",
        "Digital transformation planning",
        "System architecture design",
        "Technology needs assessment",
        "IT infrastructure optimization",
        "Cloud migration strategies",
        "Cybersecurity consulting",
        "Business process automation",
        "IT staff training and development",
        "Project management"
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Our Services" 
        subtitle="Explore our comprehensive range of ICT solutions designed to transform your business"
        backgroundImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        ctaText=""
      />

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer a wide range of ICT solutions tailored to meet the diverse needs of businesses and government organizations across Nigeria.
            </p>
          </div>
          
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-24 last:mb-0`}
            >
              <div className="md:w-1/2 mb-10 md:mb-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              
              <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-innovatech-navy/10 dark:bg-innovatech-red/10 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                    <service.icon className="h-7 w-7 text-innovatech-navy dark:text-innovatech-red" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-innovatech-navy dark:text-white">Our Solutions Include:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-innovatech-red font-bold mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-innovatech-navy-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure the successful delivery of every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-innovatech-navy-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 pt-2 dark:text-white">Discovery</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We start by understanding your business goals, challenges, and requirements through in-depth consultations.
              </p>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 pt-2 dark:text-white">Planning</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We develop a detailed project plan, including timelines, milestones, resource allocation, and deliverables.
              </p>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 pt-2 dark:text-white">Implementation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our expert team executes the project according to the plan, with regular updates and progress reports.
              </p>
            </div>
            
            <div className="bg-white dark:bg-innovatech-navy-dark p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-innovatech-navy dark:bg-innovatech-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 pt-2 dark:text-white">Support</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We provide ongoing support, maintenance, and optimization to ensure the long-term success of your solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
