import { Layout } from "@/components/layout";
import { SubjectCard } from "@/components/subject-card";
import { SUBJECTS } from "@/data/subjects";
import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, GraduationCap, ShieldCheck, FileText } from "lucide-react";
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

      {/* Terms & Conditions */}
      <section id="terms" className="py-20 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-display font-black text-3xl text-foreground">Terms and Conditions</h2>
                <p className="text-sm text-muted-foreground font-medium">Last updated: March 2026</p>
              </div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                <h3 className="font-bold text-foreground text-lg mb-2">1. Who Can Use Kidz Learn AI</h3>
                <p>Kidz Learn AI is designed for students aged <strong className="text-foreground">10 to 18 years old</strong>. By using this platform, you confirm that you fall within this age range. Users under 13 should have parental or guardian consent before using this service.</p>
              </div>

              <div className="p-5 rounded-2xl bg-secondary/5 border border-secondary/10">
                <h3 className="font-bold text-foreground text-lg mb-2">2. Educational Use Only</h3>
                <p>Kidz Learn AI is strictly an <strong className="text-foreground">educational platform</strong>. It is intended to help students learn and explore academic subjects. Any use for non-educational, commercial, or harmful purposes is strictly prohibited.</p>
              </div>

              <div className="p-5 rounded-2xl bg-accent/5 border border-accent/10">
                <h3 className="font-bold text-foreground text-lg mb-2">3. Acceptable Use</h3>
                <p className="mb-3">You agree to use Kidz Learn AI responsibly. The following are strictly prohibited:</p>
                <ul className="list-none space-y-1.5">
                  {[
                    'Asking or sharing any pornographic, sexual, or adult content',
                    'Questions related to violence, self-harm, or illegal activities',
                    'Bullying, hate speech, or harassment of any kind',
                    'Attempting to bypass subject restrictions or safety filters',
                    'Sharing personal information of yourself or others',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-destructive font-bold mt-0.5">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                <h3 className="font-bold text-foreground text-lg mb-2">4. AI-Generated Content Disclaimer</h3>
                <p>Responses provided by Zara (our AI tutor) are generated by artificial intelligence and are intended for general educational guidance. While we strive for accuracy, AI can make mistakes. We encourage students to <strong className="text-foreground">verify important facts</strong> with their teachers, textbooks, or trusted sources.</p>
              </div>

              <div className="p-5 rounded-2xl bg-secondary/5 border border-secondary/10">
                <h3 className="font-bold text-foreground text-lg mb-2">5. Subject Restrictions</h3>
                <p>Each section of Kidz Learn AI is dedicated to a specific subject. Questions must be relevant to the subject you are currently studying. Off-topic questions will be redirected to the appropriate subject section.</p>
              </div>

              <div className="p-5 rounded-2xl bg-accent/5 border border-accent/10">
                <h3 className="font-bold text-foreground text-lg mb-2">6. Changes to Terms</h3>
                <p>We may update these Terms and Conditions from time to time. Continued use of the platform after changes constitutes your acceptance of the new terms. We recommend checking this page periodically.</p>
              </div>

              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                <h3 className="font-bold text-foreground text-lg mb-2">7. Parental Guidance</h3>
                <p>We encourage parents and guardians to supervise their children's use of this platform. If you have concerns about any content or interaction, please contact us immediately. Our commitment is to provide a <strong className="text-foreground">safe, positive, and enriching</strong> learning environment for all young learners.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="py-20 bg-gray-50/80 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="font-display font-black text-3xl text-foreground">Privacy Policy</h2>
                <p className="text-sm text-muted-foreground font-medium">Last updated: March 2026</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-green-50 border border-green-200 mb-8 flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">🔒</span>
              <p className="text-green-800 font-semibold">Your privacy matters to us. Kidz Learn AI is designed with student safety and privacy as a top priority. We collect minimal data and never share it with third parties for marketing purposes.</p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div className="p-5 rounded-2xl bg-white border border-border shadow-sm">
                <h3 className="font-bold text-foreground text-lg mb-2">1. Information We Collect</h3>
                <p className="mb-3">Kidz Learn AI does <strong className="text-foreground">not require account registration</strong>. We collect only the minimum data necessary to provide our service:</p>
                <ul className="list-none space-y-1.5">
                  {[
                    'Questions and messages you type into the chat (to generate AI responses)',
                    'Your selected age group (to tailor explanations appropriately)',
                    'Conversation history (stored temporarily to maintain chat context)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-border shadow-sm">
                <h3 className="font-bold text-foreground text-lg mb-2">2. What We Do NOT Collect</h3>
                <ul className="list-none space-y-1.5">
                  {[
                    'Your name, email address, or any personal identification',
                    'Location data or device identifiers',
                    'Browsing history outside of this platform',
                    'Payments or financial information',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-destructive font-bold mt-0.5">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-border shadow-sm">
                <h3 className="font-bold text-foreground text-lg mb-2">3. How We Use Your Information</h3>
                <p>The conversation data you provide is used solely to:</p>
                <ul className="list-none space-y-1.5 mt-2">
                  {[
                    'Generate accurate, age-appropriate AI responses from Zara',
                    'Maintain conversation context within a single learning session',
                    'Improve the quality and safety of our educational service',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-border shadow-sm">
                <h3 className="font-bold text-foreground text-lg mb-2">4. AI Processing</h3>
                <p>Your questions are processed by an AI language model to generate educational responses. By using this platform, you consent to your questions being processed for this purpose. We do not use your questions to train AI models without explicit consent.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-border shadow-sm">
                <h3 className="font-bold text-foreground text-lg mb-2">5. Children's Privacy (COPPA)</h3>
                <p>We take the privacy of children very seriously. We do not knowingly collect personal information from children under 13 without verifiable parental consent. If a parent or guardian believes their child has provided personal information, please contact us and we will promptly remove it.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-border shadow-sm">
                <h3 className="font-bold text-foreground text-lg mb-2">6. Data Security</h3>
                <p>We implement appropriate technical and organisational measures to protect the data processed on our platform. Conversation data is stored securely and access is restricted to essential operations only.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-border shadow-sm">
                <h3 className="font-bold text-foreground text-lg mb-2">7. Contact Us</h3>
                <p>If you have any questions about these policies, or if you are a parent/guardian with concerns about your child's use of this platform, please reach out to us. We are committed to addressing any privacy or safety concerns promptly and transparently.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
