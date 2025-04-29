
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Code, Smartphone, Cctv, Monitor, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Sample services
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies to elevate your business online.",
      icon: Code,
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
      icon: Smartphone,
    },
    {
      title: "CCTV Installation",
      description: "Professional security camera systems for residential and commercial properties with remote monitoring.",
      icon: Cctv,
    },
    {
      title: "IP Phone Installation",
      description: "Modern IP telephony solutions to streamline your business communications with advanced features.",
      icon: Monitor,
    },
    {
      title: "IT Consultancy",
      description: "Expert guidance and strategic planning to optimize your technology infrastructure and operations.",
      icon: Briefcase,
    }
  ];

  // Sample testimonials
  const testimonials = [
    {
      quote: "InnovaTech built our real estate management system that has transformed how we operate. Their expertise and professionalism exceeded our expectations.",
      name: "Ahmed Ibrahim",
      title: "CEO",
      company: "Prime Properties"
    },
    {
      quote: "The mobile app developed by InnovaTech for our hotel has significantly improved guest satisfaction and streamlined our booking process.",
      name: "Sarah Johnson",
      title: "Operations Manager",
      company: "Skyline Hotels"
    },
    {
      quote: "Their IT consultancy services helped us modernize our government office systems while training our staff effectively. Truly a valuable partner.",
      name: "Mohammed Yusuf",
      title: "Director",
      company: "Jigawa State ICT Directorate"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Leading ICT Solutions Provider in Nigeria" 
        subtitle="We deliver innovative and professional technology solutions for both government and private sectors. From web development to IT consultancy, we transform ideas into powerful digital solutions."
        ctaText="Explore Our Services"
        ctaLink="/services"
      />

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-innovatech-navy-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive ICT solutions tailored to meet the unique needs of both government and private sector organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Digital Institute CTA Section */}
      <section className="py-20 bg-innovatech-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-white mb-4">InnovaTech Digital Institute</h2>
              <p className="text-gray-300 mb-6">
                Enhance your skills or start a new career with our comprehensive courses in IT, Business, Entrepreneurship, 
                Law, Economics, Finance, and more. Learn from industry experts and get certified.
              </p>
              <Link to="/institute" className="btn-primary bg-innovatech-red hover:bg-innovatech-red-dark">
                Explore Courses
              </Link>
            </div>
            
            <div className="md:w-2/5">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Digital Institute" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-innovatech-navy-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-innovatech-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Business with Technology?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Contact us today to discuss how our ICT solutions can help your organization achieve its goals.
          </p>
          <Link to="/contact" className="btn-primary bg-innovatech-red hover:bg-innovatech-red-dark">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
