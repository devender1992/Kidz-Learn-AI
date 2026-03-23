import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface SubjectCardProps {
  id: string;
  name: string;
  icon: LucideIcon;
  colorClass: string;
  bgClass: string;
  description: string;
  delay?: number;
}

export function SubjectCard({ id, name, icon: Icon, colorClass, bgClass, description, delay = 0 }: SubjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={`/learn/${id}`}>
        <div className={`group relative h-full glass-card rounded-3xl p-6 overflow-hidden cursor-pointer flex flex-col`}>
          {/* Background decoration */}
          <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150 ${bgClass}`} />
          
          <div className="relative z-10">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg ${colorClass} text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
              <Icon className="w-7 h-7" />
            </div>
            
            <h3 className="font-display font-bold text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
            
            <p className="text-muted-foreground font-medium mb-6 line-clamp-2">
              {description}
            </p>
          </div>
          
          <div className="mt-auto flex items-center justify-between text-sm font-bold pt-4 border-t border-border/50">
            <span className={`${colorClass.replace('bg-', 'text-').split(' ')[0]} bg-clip-text`}>
              Explore Topic
            </span>
            <div className={`w-8 h-8 rounded-full ${bgClass} flex items-center justify-center text-white opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0`}>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
