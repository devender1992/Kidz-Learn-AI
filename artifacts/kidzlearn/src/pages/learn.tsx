import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout";
import { SUBJECTS } from "@/data/subjects";
import { useChatStream } from "@/hooks/use-chat-stream";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { useCreateOpenaiConversation } from "@workspace/api-client-react";
import { 
  ArrowLeft, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  RefreshCw,
  Lightbulb
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const INAPPROPRIATE_KEYWORDS = [
  'porn', 'pornography', 'pornographic', 'xxx', 'nude', 'nudity', 'naked', 'sex', 'sexual',
  'intercourse', 'masturbat', 'orgasm', 'erotic', 'fetish', 'adultery', 'affair', 'infidelity',
  'prostitut', 'escort', 'strip', 'stripper', 'genitals', 'penis', 'vagina', 'breast', 'nipple',
  'condom', 'vibrator', 'dildo', 'bdsm', 'kink', 'horny', 'sexy', 'seduct', 'seduce',
  'rape', 'molest', 'abuse', 'assault', 'harassment', 'incest', 'pedophil', 'predator',
  'gore', 'torture', 'suicide', 'self-harm', 'drug', 'cocaine', 'heroin', 'methamphetamin',
  'terrorist', 'bomb making', 'weapon', 'kill', 'murder', 'hate speech', 'racist',
];

function detectInappropriateContent(text: string): boolean {
  const lowerText = text.toLowerCase();
  return INAPPROPRIATE_KEYWORDS.some(kw => lowerText.includes(kw));
}

function detectOffTopic(text: string, currentSubjectId: string): { offTopic: boolean; suggestedSubject?: (typeof SUBJECTS)[0] } {
  const lowerText = text.toLowerCase();
  // General Knowledge is open-ended — never flag it as off-topic
  if (currentSubjectId === 'general-knowledge') return { offTopic: false };

  let bestMatch: (typeof SUBJECTS)[0] | undefined;
  let bestScore = 0;

  for (const subject of SUBJECTS) {
    if (subject.id === currentSubjectId || subject.id === 'general-knowledge') continue;
    const score = subject.keywords.filter(kw => lowerText.includes(kw.toLowerCase())).length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = subject;
    }
  }

  // Check how many keywords the current subject matches
  const currentSubject = SUBJECTS.find(s => s.id === currentSubjectId);
  const currentScore = currentSubject?.keywords.filter(kw => lowerText.includes(kw.toLowerCase())).length ?? 0;

  // Flag as off-topic only if another subject scores significantly higher
  if (bestMatch && bestScore >= 2 && bestScore > currentScore) {
    return { offTopic: true, suggestedSubject: bestMatch };
  }

  return { offTopic: false };
}

export default function Learn() {
  const { subject: subjectId } = useParams<{ subject: string }>();
  const subject = SUBJECTS.find(s => s.id === subjectId) || SUBJECTS[0];
  
  const [question, setQuestion] = useState("");
  const [ageGroup, setAgeGroup] = useState("10-12");
  const [conversationId, setConversationId] = useState<number | undefined>();
  const [topicError, setTopicError] = useState<{ message: string; subject?: (typeof SUBJECTS)[0] } | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  const { mutateAsync: createConversation } = useCreateOpenaiConversation();
  const { messages, isStreaming, error, sendMessage, clearMessages } = useChatStream();

  // Scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAsk = async (text: string) => {
    if (!text.trim() || isStreaming) return;
    
    setTopicError(null);

    // Block inappropriate / adult content first
    if (detectInappropriateContent(text)) {
      setTopicError({
        message: "🚫 That kind of content is not allowed here. Kidz Learn AI is a safe learning space for students. Please ask an educational question!",
      });
      return;
    }

    // Check if the question is about a different subject
    const check = detectOffTopic(text, subject.id);
    if (check.offTopic && check.suggestedSubject) {
      setTopicError({
        message: `This looks like a ${check.suggestedSubject.name} question! Please ask only ${subject.name} questions here.`,
        subject: check.suggestedSubject,
      });
      return;
    }

    setQuestion("");
    
    // Create conversation context if first message
    let currentConvId = conversationId;
    if (!currentConvId && messages.length === 0) {
      try {
        const conv = await createConversation({ data: { title: `${subject.name} Session` } });
        currentConvId = conv.id;
        setConversationId(conv.id);
      } catch (e) {
        console.error("Failed to create conversation history block, continuing anyway");
      }
    }

    await sendMessage(text, {
      subject: subject.name,
      topic: "General",
      ageGroup,
      conversationId: currentConvId
    });
  };

  const handleTopicClick = (topic: string) => {
    // Remove the emoji for the actual question
    const cleanTopic = topic.replace(/[\u{1F600}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F300}-\u{1F5FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}]/gu, '').trim();
    handleAsk(cleanTopic);
  };

  const resetSession = () => {
    clearMessages();
    setConversationId(undefined);
  };

  return (
    <Layout>
      <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-80px)]">
        
        {/* Header Area */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-muted rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6 text-muted-foreground" />
            </Link>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md ${subject.bgClass}`}>
              <subject.icon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground">{subject.name}</h2>
              <p className="text-sm font-medium text-muted-foreground">Chat with Zara</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl border shadow-sm">
            <span className="text-xs font-bold text-muted-foreground uppercase pl-2">I am:</span>
            <div className="flex gap-1">
              {['10-12', '13-15', '16-18'].map(age => (
                <button
                  key={age}
                  onClick={() => setAgeGroup(age)}
                  className={`px-3 py-1.5 text-sm font-bold rounded-lg transition-all ${
                    ageGroup === age 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {age} yrs
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 glass-card rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-primary/5 relative z-10">
          
          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
                <img 
                  src={`${import.meta.env.BASE_URL}images/zara-robot.png`}
                  alt="Zara Robot" 
                  className="w-32 h-32 mb-6 drop-shadow-xl animate-float"
                />
                <h3 className="font-display font-bold text-3xl text-foreground mb-2">
                  Hi! I'm Zara! 👋
                </h3>
                <p className="text-lg text-muted-foreground font-medium mb-8">
                  I'm your AI tutor for {subject.name}. What would you like to explore today?
                </p>
                
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-4 justify-center text-sm font-bold text-muted-foreground uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4 text-accent" /> Try asking about:
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {subject.topics.map((topic, i) => (
                      <button
                        key={i}
                        onClick={() => handleTopicClick(topic)}
                        className={`px-4 py-2.5 rounded-xl border-2 font-bold text-sm transition-all hover:-translate-y-1 hover:shadow-md ${
                          i % 2 === 0 
                            ? 'border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 hover:border-primary' 
                            : 'border-secondary/20 text-secondary-foreground bg-secondary/5 hover:bg-secondary/10 hover:border-secondary'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 pb-4">
                <AnimatePresence initial={false}>
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.role === 'assistant' && (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-100 to-blue-50 border border-blue-200 shadow-sm flex-shrink-0 flex items-center justify-center overflow-hidden p-1">
                           <img src={`${import.meta.env.BASE_URL}images/zara-robot.png`} alt="Zara" className="w-full h-full object-contain" />
                        </div>
                      )}
                      
                      <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-5 py-4 shadow-sm ${
                        msg.role === 'user' 
                          ? 'bg-primary text-white rounded-tr-sm' 
                          : 'bg-white border border-border rounded-tl-sm'
                      }`}>
                        {msg.role === 'user' ? (
                          <p className="font-medium text-[15px] leading-relaxed">{msg.content}</p>
                        ) : (
                          <div className="text-[15px] text-foreground">
                            {msg.content ? (
                              <MarkdownRenderer content={msg.content} />
                            ) : (
                              <div className="flex gap-1 h-6 items-center">
                                <span className="w-2 h-2 bg-primary/50 rounded-full typing-dot"></span>
                                <span className="w-2 h-2 bg-primary/50 rounded-full typing-dot"></span>
                                <span className="w-2 h-2 bg-primary/50 rounded-full typing-dot"></span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {msg.role === 'user' && (
                        <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm flex-shrink-0 flex items-center justify-center text-slate-500">
                           <User className="w-5 h-5" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={chatEndRef} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 sm:p-6 bg-white/50 border-t border-border/50 backdrop-blur-sm">
            {topicError && (
              <div className="mb-3 p-3 bg-amber-50 text-amber-800 rounded-xl text-sm font-semibold border border-amber-200 flex items-start gap-2">
                <span className="shrink-0 mt-0.5">🚫</span>
                <span className="flex-1">{topicError.message}</span>
                {topicError.subject && (
                  <a
                    href={`${import.meta.env.BASE_URL}learn/${topicError.subject.id}`}
                    className="shrink-0 underline text-amber-700 hover:text-amber-900 font-bold"
                  >
                    Go to {topicError.subject.name} →
                  </a>
                )}
              </div>
            )}
            {error && !topicError && (
              <div className="mb-3 p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100 flex items-start gap-2">
                <span className="shrink-0 mt-0.5">⚠️</span> {error}
              </div>
            )}
            
            <form 
              onSubmit={(e) => { e.preventDefault(); handleAsk(question); }}
              className="flex items-end gap-3 relative"
            >
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={resetSession}
                  className="p-3 sm:p-4 text-muted-foreground hover:text-primary bg-white border border-border hover:border-primary/30 rounded-2xl transition-all shadow-sm flex-shrink-0"
                  title="Start Over"
                >
                  <RefreshCw className="w-6 h-6" />
                </button>
              )}
              
              <div className="flex-1 relative bg-white rounded-2xl shadow-inner border-2 border-border focus-within:border-primary/50 focus-within:ring-4 ring-primary/10 transition-all">
                <textarea
                  value={question}
                  onChange={(e) => { setQuestion(e.target.value); if (topicError) setTopicError(null); }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleAsk(question);
                    }
                  }}
                  placeholder={isStreaming ? "Zara is thinking..." : "Ask your question here..."}
                  disabled={isStreaming}
                  className="w-full bg-transparent border-none rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground font-medium text-[15px] resize-none focus:outline-none max-h-32 min-h-[56px]"
                  rows={1}
                  style={{ height: "auto" }}
                />
              </div>
              
              <button
                type="submit"
                disabled={!question.trim() || isStreaming}
                className={`p-4 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-200 ${
                  !question.trim() || isStreaming
                    ? 'bg-muted text-muted-foreground cursor-not-allowed shadow-none'
                    : 'bg-primary text-white hover:bg-primary/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30'
                }`}
              >
                {isStreaming ? (
                  <Sparkles className="w-6 h-6 animate-pulse" />
                ) : (
                  <Send className="w-6 h-6 ml-1" />
                )}
              </button>
            </form>
            <p className="text-center mt-3 text-xs font-semibold text-muted-foreground">
              Zara can make mistakes. It's always good to double check facts! 🕵️‍♀️
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
