import { ReactNode } from "react";
import { Link } from "wouter";
import { Sparkles, Brain, Menu } from "lucide-react";
import { motion } from "framer-motion";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="blob bg-primary/20 w-[600px] h-[600px] -top-64 -left-32"></div>
        <div className="blob bg-secondary/20 w-[500px] h-[500px] top-1/4 -right-32 animate-float-delayed"></div>
        <div className="blob bg-accent/20 w-[400px] h-[400px] -bottom-32 left-1/3 animate-float"></div>
      </div>

      <header className="sticky top-0 z-50 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:-translate-y-1">
              <Brain className="w-7 h-7 text-white" />
              <motion.div 
                className="absolute -top-1 -right-1"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Sparkles className="w-5 h-5 text-accent" fill="currentColor" />
              </motion.div>
            </div>
            <div>
              <h1 className="font-display font-extrabold text-2xl text-foreground leading-none tracking-tight group-hover:text-primary transition-colors">
                Kidz<span className="text-secondary">Learn</span><span className="text-accent ml-1">AI</span>
              </h1>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Your Smart Tutor</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-semibold text-foreground hover:text-primary transition-colors">Home</Link>
            <a href="#subjects" className="font-semibold text-foreground hover:text-primary transition-colors">Subjects</a>
            <button className="px-6 py-2.5 bg-foreground text-background font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              Start Learning
            </button>
          </div>

          <button className="md:hidden p-2 text-foreground">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col z-0">
        {children}
      </main>

      <footer className="bg-white border-t border-border mt-auto py-8 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground font-medium">
          <p className="flex items-center justify-center gap-2">
            Built with <span className="text-destructive animate-pulse">❤️</span> for curious minds everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
}
