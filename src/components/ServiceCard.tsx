
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
}

const ServiceCard = ({ title, description, icon: Icon, link = "/services" }: ServiceCardProps) => {
  return (
    <div className="bg-white dark:bg-innovatech-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 card-hover">
      <div className="p-3 bg-innovatech-navy/10 dark:bg-innovatech-red/10 rounded-full w-14 h-14 flex items-center justify-center mb-5">
        <Icon className="h-7 w-7 text-innovatech-navy dark:text-innovatech-red" />
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-5">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-innovatech-navy dark:text-innovatech-red hover:underline font-medium"
      >
        Learn More <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;
