import { CheckSquare } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  image?: string;
  icon?: React.ReactNode;
}

const ServiceCard = ({
  title,
  description,
  items,
  image,
  icon,
}: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {image ? (
        <div className="h-48 overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="h-24 bg-primary/10 flex items-center justify-center flex-shrink-0">
          {icon && (
            <span className="text-primary [&>svg]:w-10 [&>svg]:h-10">
              {icon}
            </span>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          {image && icon && <span className="text-accent">{icon}</span>}
          <h3 className="text-lg font-heading font-bold text-primary">
            {title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <ul className="space-y-2 mt-auto">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-foreground"
            >
              <CheckSquare className="w-4 h-4 mt-0.5 text-check flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
