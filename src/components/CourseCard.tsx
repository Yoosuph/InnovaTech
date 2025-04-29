
import { GraduationCap } from "lucide-react";

interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
}

const CourseCard = ({
  title,
  category,
  description,
  image = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
}: CourseCardProps) => {
  return (
    <div className="bg-white dark:bg-innovatech-navy-dark border border-gray-100 dark:border-gray-800 overflow-hidden rounded-lg shadow-md card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="bg-innovatech-red/10 text-innovatech-red text-xs px-2 py-1 rounded-full font-medium flex items-center">
            <GraduationCap className="h-3 w-3 mr-1" />
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
        <button className="btn-secondary w-full">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;
