import { Layout } from "@/components/layout";
import { SubjectCard } from "@/components/subject-card";
import { SUBJECTS } from "@/data/subjects";
import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 shadow-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
                <span className="text-sm font-bold text-primary">Powered by Smart AI</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-foreground leading-[1.1] mb-6">
                Meet <span className="text-gradient from-primary via-accent to-secondary">Zara</span>, Your<br/>
                Super-Smart AI Tutor! 🤖
              </h1>
              
              <p className="text-xl text-muted-foreground font-medium mb-8 max-w-xl leading-relaxed">
                Curious about black holes? Need help with math? Want to know why the sky is blue? Ask Zara anything and learn in a fun, simple way!
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#subjects" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Explore Subjects
                </a>
                <Link href="/learn/general-knowledge" className="px-8 py-4 bg-white text-foreground border-2 border-border hover:border-primary/50 rounded-2xl font-bold text-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2">
                  Ask a Random Question
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
                  alt="Colorful abstract shapes" 
                  className="w-full h-full object-cover rounded-[3rem] shadow-2xl animate-float relative z-10 border-8 border-white"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 glass w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg animate-float-delayed z-20 rotate-12">
                  <span className="text-4xl">🚀</span>
                </div>
                <div className="absolute top-1/2 -right-10 glass w-20 h-20 rounded-full flex items-center justify-center shadow-lg animate-float z-20 -rotate-12">
                  <span className="text-3xl">🧬</span>
                </div>
                <div className="absolute -bottom-4 left-10 glass w-28 h-16 rounded-xl flex items-center justify-center shadow-lg animate-float-delayed z-20">
                  <span className="text-xl font-bold text-primary">E=mc²</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Features Banner */}
      <section className="bg-foreground py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            <div className="flex flex-col items-center p-4">
              <BrainCircuit className="w-10 h-10 text-accent mb-4" />
              <h4 className="text-white font-bold text-xl mb-1">Smart AI Answers</h4>
              <p className="text-gray-400 font-medium text-sm">Complex topics explained simply</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Sparkles className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-white font-bold text-xl mb-1">Fun & Interactive</h4>
              <p className="text-gray-400 font-medium text-sm">Emojis, diagrams, and cool facts</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <GraduationCap className="w-10 h-10 text-secondary mb-4" />
              <h4 className="text-white font-bold text-xl mb-1">Tailored for You</h4>
              <p className="text-gray-400 font-medium text-sm">Adjusts to your age group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section id="subjects" className="py-24 bg-gray-50/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4">
              What do you want to <span className="text-primary relative inline-block">
                learn
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent"/>
                </svg>
              </span> today?
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Pick a subject and start asking questions. Zara knows a little bit about everything!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SUBJECTS.map((subject, index) => (
              <SubjectCard 
                key={subject.id} 
                {...subject} 
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
