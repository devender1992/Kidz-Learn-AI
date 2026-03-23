import { 
  FlaskConical, 
  Rocket, 
  Globe2, 
  Code2, 
  ScrollText, 
  Map, 
  Scale, 
  Dna, 
  Beaker, 
  Atom, 
  Newspaper, 
  Calculator,
  BookOpen
} from "lucide-react";

export const SUBJECTS = [
  { 
    id: 'science', 
    name: 'Science', 
    icon: FlaskConical, 
    colorClass: 'bg-green-500', 
    bgClass: 'bg-green-500',
    description: 'Discover how the world around us works through fun experiments!',
    topics: ['How do plants make food? 🌿', 'What is electricity? ⚡', 'How does gravity work? 🍎', 'What are atoms? ⚛️'] 
  },
  { 
    id: 'space', 
    name: 'Space', 
    icon: Rocket, 
    colorClass: 'bg-indigo-500', 
    bgClass: 'bg-indigo-500',
    description: 'Blast off and explore planets, stars, and black holes.',
    topics: ['How big is the universe? 🌌', 'What is a black hole? 🕳️', 'How do rockets work? 🚀', 'Are there other planets like Earth? 👽'] 
  },
  { 
    id: 'math', 
    name: 'Mathematics', 
    icon: Calculator, 
    colorClass: 'bg-blue-500', 
    bgClass: 'bg-blue-500',
    description: 'Play with numbers, shapes, and amazing puzzles.',
    topics: ['What are prime numbers? 🔢', 'How does algebra work? ✖️', 'What is Pi? 🥧', 'How do fractions work? 🍕'] 
  },
  { 
    id: 'biology', 
    name: 'Biology', 
    icon: Dna, 
    colorClass: 'bg-emerald-500', 
    bgClass: 'bg-emerald-500',
    description: 'Learn about animals, the human body, and all living things.',
    topics: ['How does the human body work? 🫀', 'What is DNA? 🧬', 'How do cells divide? 🦠', 'What is evolution? 🦕'] 
  },
  { 
    id: 'chemistry', 
    name: 'Chemistry', 
    icon: Beaker, 
    colorClass: 'bg-purple-500', 
    bgClass: 'bg-purple-500',
    description: 'Mix it up and learn about reactions and elements.',
    topics: ['What are elements? 🧪', 'How do chemical reactions work? 💥', 'What is the periodic table? 📊', 'What are acids and bases? 🍋'] 
  },
  { 
    id: 'physics', 
    name: 'Physics', 
    icon: Atom, 
    colorClass: 'bg-sky-500', 
    bgClass: 'bg-sky-500',
    description: 'Understand energy, light, magnets, and motion.',
    topics: ['What is quantum mechanics? 🎲', 'How does light work? 💡', 'What is energy? 🔋', 'How do magnets work? 🧲'] 
  },
  { 
    id: 'history', 
    name: 'History', 
    icon: ScrollText, 
    colorClass: 'bg-amber-600', 
    bgClass: 'bg-amber-600',
    description: 'Time travel to ancient worlds and epic events.',
    topics: ['Who were the ancient Egyptians? 🐪', 'What was the Renaissance? 🎨', 'How did democracy begin? 🏛️', 'What caused World War II? 🕊️'] 
  },
  { 
    id: 'geography', 
    name: 'Geography', 
    icon: Map, 
    colorClass: 'bg-teal-500', 
    bgClass: 'bg-teal-500',
    description: 'Explore mountains, oceans, and cool places on Earth.',
    topics: ['How are mountains formed? ⛰️', 'What causes earthquakes? 🌋', 'How do rivers form? 🌊', 'What are tectonic plates? 🗺️'] 
  },
  { 
    id: 'coding', 
    name: 'Coding', 
    icon: Code2, 
    colorClass: 'bg-slate-700', 
    bgClass: 'bg-slate-700',
    description: 'Speak the language of computers and build apps.',
    topics: ['What is programming? 💻', 'How does the internet work? 🌐', 'What is AI? 🤖', 'How do apps get made? 📱'] 
  },
  { 
    id: 'general-knowledge', 
    name: 'General Knowledge', 
    icon: Globe2, 
    colorClass: 'bg-pink-500', 
    bgClass: 'bg-pink-500',
    description: 'Random, awesome facts about everything you can imagine.',
    topics: ['Why is the sky blue? 🌤️', 'How do planes fly? ✈️', 'What makes rainbows? 🌈', 'How does WiFi work? 📶'] 
  },
  { 
    id: 'civics', 
    name: 'Civics', 
    icon: Scale, 
    colorClass: 'bg-orange-500', 
    bgClass: 'bg-orange-500',
    description: 'Learn how society, laws, and governments work.',
    topics: ['How does government work? 🏛️', 'What are human rights? 🤝', 'How are laws made? 📜', 'What is democracy? 🗳️'] 
  },
  { 
    id: 'english', 
    name: 'English', 
    icon: BookOpen, 
    colorClass: 'bg-rose-500', 
    bgClass: 'bg-rose-500',
    description: 'Master writing, reading, and powerful storytelling.',
    topics: ['What are literary devices? 📖', 'How do I write a great essay? ✍️', 'What is grammar? 📝', 'How do I improve vocabulary? 🧠'] 
  }
];
