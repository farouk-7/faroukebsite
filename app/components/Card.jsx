import React from "react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const Card = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  featured = false,
}) => {
  return (
    <div className={`project-card group ${featured ? "md:col-span-2" : ""} border-1 shadow-2xl rounded-lg`}>
      <div className="relative  overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Project Links Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Link href={demoUrl}>
            
          {/* {demoUrl && (  */}
            <Button  size="sm" className="hero-gradient text-white cursor-pointer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
           {/* )}  */}
          
          </Link>

         <Link href={githubUrl}>
          {/* {githubUrl && ( */}
            <Button
              size="sm"
              variant="outline"
              className="glass-effect text-black border-white hover:bg-white hover:text-black cursor-pointer"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          {/* )} */}
          </Link>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-3 group-hover:hero-text-gradient transition-all duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
