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
    topics: ['How do plants make food? 🌿', 'What is electricity? ⚡', 'How does gravity work? 🍎', 'What are atoms? ⚛️'],
    keywords: ['experiment', 'scientific', 'natural', 'matter', 'energy', 'organism', 'hypothesis', 'observation', 'lab', 'science', 'plants', 'animals', 'electricity', 'gravity', 'atom', 'force', 'motion', 'heat', 'sound', 'light']
  },
  { 
    id: 'space', 
    name: 'Space', 
    icon: Rocket, 
    colorClass: 'bg-indigo-500', 
    bgClass: 'bg-indigo-500',
    description: 'Blast off and explore planets, stars, and black holes.',
    topics: ['How big is the universe? 🌌', 'What is a black hole? 🕳️', 'How do rockets work? 🚀', 'Are there other planets like Earth? 👽'],
    keywords: ['planet', 'star', 'galaxy', 'orbit', 'asteroid', 'solar', 'telescope', 'astronaut', 'nasa', 'moon', 'sun', 'universe', 'comet', 'meteor', 'nebula', 'supernova', 'spacecraft', 'rocket', 'black hole', 'milky way', 'space', 'cosmos', 'alien', 'extraterrestrial', 'satellite']
  },
  { 
    id: 'math', 
    name: 'Mathematics', 
    icon: Calculator, 
    colorClass: 'bg-blue-500', 
    bgClass: 'bg-blue-500',
    description: 'Play with numbers, shapes, and amazing puzzles.',
    topics: ['What are prime numbers? 🔢', 'How does algebra work? ✖️', 'What is Pi? 🥧', 'How do fractions work? 🍕'],
    keywords: ['equation', 'calculate', 'algebra', 'geometry', 'calculus', 'number', 'formula', 'graph', 'statistics', 'probability', 'fraction', 'decimal', 'percentage', 'prime', 'factor', 'multiple', 'angle', 'triangle', 'circle', 'pi', 'mathematics', 'math', 'arithmetic', 'integer', 'polynomial', 'matrix', 'vector', 'derivative', 'integral', 'logarithm', 'trigonometry', 'ratio', 'proportion', 'mean', 'median', 'mode', 'area', 'perimeter', 'volume', 'quadratic']
  },
  { 
    id: 'biology', 
    name: 'Biology', 
    icon: Dna, 
    colorClass: 'bg-emerald-500', 
    bgClass: 'bg-emerald-500',
    description: 'Learn about animals, the human body, and all living things.',
    topics: ['How does the human body work? 🫀', 'What is DNA? 🧬', 'How do cells divide? 🦠', 'What is evolution? 🦕'],
    keywords: ['cell', 'organism', 'dna', 'rna', 'evolution', 'genetics', 'photosynthesis', 'anatomy', 'bacteria', 'virus', 'mitosis', 'meiosis', 'chromosome', 'protein', 'enzyme', 'ecosystem', 'species', 'habitat', 'biodiversity', 'taxonomy', 'mutation', 'gene', 'heredity', 'respiration', 'digestion', 'nervous system', 'immune system', 'blood', 'heart', 'lung', 'muscle', 'bone', 'plant', 'animal', 'fungi', 'microorganism', 'biology', 'living']
  },
  { 
    id: 'chemistry', 
    name: 'Chemistry', 
    icon: Beaker, 
    colorClass: 'bg-purple-500', 
    bgClass: 'bg-purple-500',
    description: 'Mix it up and learn about reactions and elements.',
    topics: ['What are elements? 🧪', 'How do chemical reactions work? 💥', 'What is the periodic table? 📊', 'What are acids and bases? 🍋'],
    keywords: ['element', 'compound', 'molecule', 'reaction', 'acid', 'base', 'periodic table', 'bond', 'solvent', 'solution', 'oxidation', 'reduction', 'catalyst', 'electron', 'proton', 'neutron', 'ion', 'isotope', 'valence', 'covalent', 'ionic', 'organic', 'inorganic', 'hydrocarbon', 'polymer', 'ph', 'titration', 'mole', 'stoichiometry', 'enthalpy', 'endothermic', 'exothermic', 'chemistry', 'chemical', 'substance', 'mixture', 'dissolve', 'precipitate', 'salt']
  },
  { 
    id: 'physics', 
    name: 'Physics', 
    icon: Atom, 
    colorClass: 'bg-sky-500', 
    bgClass: 'bg-sky-500',
    description: 'Understand energy, light, magnets, and motion.',
    topics: ['What is quantum mechanics? 🎲', 'How does light work? 💡', 'What is energy? 🔋', 'How do magnets work? 🧲'],
    keywords: ['force', 'quantum', 'relativity', 'magnetism', 'optics', 'mechanics', 'velocity', 'acceleration', 'momentum', 'friction', 'inertia', 'wave', 'frequency', 'wavelength', 'electromagnetic', 'photon', 'nuclear', 'fission', 'fusion', 'thermodynamics', 'entropy', 'kinetic', 'potential', 'Newton', 'Einstein', 'Bohr', 'Heisenberg', 'electricity', 'circuit', 'resistance', 'voltage', 'current', 'capacitor', 'inductor', 'pressure', 'density', 'fluid', 'heat', 'temperature', 'physics', 'motion', 'gravity', 'magnet', 'light', 'sound', 'energy', 'power']
  },
  { 
    id: 'history', 
    name: 'History', 
    icon: ScrollText, 
    colorClass: 'bg-amber-600', 
    bgClass: 'bg-amber-600',
    description: 'Time travel to ancient worlds and epic events.',
    topics: ['Who were the ancient Egyptians? 🐪', 'What was the Renaissance? 🎨', 'How did democracy begin? 🏛️', 'What caused World War II? 🕊️'],
    keywords: ['war', 'civilization', 'ancient', 'empire', 'revolution', 'dynasty', 'century', 'historical', 'kingdom', 'pharaoh', 'medieval', 'colonialism', 'independence', 'treaty', 'battle', 'king', 'queen', 'emperor', 'president', 'napoleon', 'caesar', 'egypt', 'rome', 'greece', 'renaissance', 'reformation', 'industrial', 'world war', 'cold war', 'history', 'timeline', 'decade', 'era', 'bc', 'ad', 'epoch', 'artifact', 'archaeology', 'historical', 'past', 'event']
  },
  { 
    id: 'geography', 
    name: 'Geography', 
    icon: Map, 
    colorClass: 'bg-teal-500', 
    bgClass: 'bg-teal-500',
    description: 'Explore mountains, oceans, and cool places on Earth.',
    topics: ['How are mountains formed? ⛰️', 'What causes earthquakes? 🌋', 'How do rivers form? 🌊', 'What are tectonic plates? 🗺️'],
    keywords: ['continent', 'country', 'ocean', 'mountain', 'river', 'climate', 'map', 'latitude', 'longitude', 'earthquake', 'volcano', 'tectonic', 'erosion', 'biome', 'desert', 'rainforest', 'tundra', 'savanna', 'coral reef', 'glacier', 'population', 'capital', 'border', 'region', 'terrain', 'landform', 'lake', 'sea', 'bay', 'peninsula', 'island', 'delta', 'valley', 'plateau', 'plain', 'monsoon', 'hurricane', 'geography', 'location', 'place', 'environment']
  },
  { 
    id: 'coding', 
    name: 'Coding', 
    icon: Code2, 
    colorClass: 'bg-slate-700', 
    bgClass: 'bg-slate-700',
    description: 'Speak the language of computers and build apps.',
    topics: ['What is programming? 💻', 'How does the internet work? 🌐', 'What is AI? 🤖', 'How do apps get made? 📱'],
    keywords: ['code', 'program', 'algorithm', 'function', 'variable', 'loop', 'syntax', 'database', 'api', 'html', 'css', 'javascript', 'python', 'java', 'c++', 'compiler', 'debugger', 'software', 'hardware', 'operating system', 'application', 'app', 'website', 'server', 'client', 'frontend', 'backend', 'framework', 'library', 'object', 'class', 'array', 'string', 'boolean', 'integer', 'recursion', 'data structure', 'machine learning', 'artificial intelligence', 'robot', 'automation', 'internet', 'wifi', 'network', 'coding', 'programming', 'computer', 'binary', 'data', 'bug', 'git']
  },
  { 
    id: 'general-knowledge', 
    name: 'General Knowledge', 
    icon: Globe2, 
    colorClass: 'bg-pink-500', 
    bgClass: 'bg-pink-500',
    description: 'Random, awesome facts about everything you can imagine.',
    topics: ['Why is the sky blue? 🌤️', 'How do planes fly? ✈️', 'What makes rainbows? 🌈', 'How does WiFi work? 📶'],
    keywords: ['fact', 'why', 'how', 'what', 'wonder', 'curious', 'interesting', 'amazing', 'fun', 'trivia', 'world', 'general', 'knowledge', 'everyday', 'common']
  },
  { 
    id: 'civics', 
    name: 'Civics', 
    icon: Scale, 
    colorClass: 'bg-orange-500', 
    bgClass: 'bg-orange-500',
    description: 'Learn how society, laws, and governments work.',
    topics: ['How does government work? 🏛️', 'What are human rights? 🤝', 'How are laws made? 📜', 'What is democracy? 🗳️'],
    keywords: ['law', 'government', 'democracy', 'constitution', 'rights', 'vote', 'election', 'parliament', 'court', 'justice', 'citizen', 'policy', 'bill', 'amendment', 'legislation', 'congress', 'senate', 'president', 'republic', 'freedom', 'liberty', 'equality', 'tax', 'public', 'society', 'civics', 'political', 'civic', 'federal', 'state', 'local', 'judicial', 'executive', 'legislature']
  },
  { 
    id: 'english', 
    name: 'English', 
    icon: BookOpen, 
    colorClass: 'bg-rose-500', 
    bgClass: 'bg-rose-500',
    description: 'Master writing, reading, and powerful storytelling.',
    topics: ['What are literary devices? 📖', 'How do I write a great essay? ✍️', 'What is grammar? 📝', 'How do I improve vocabulary? 🧠'],
    keywords: ['grammar', 'essay', 'literature', 'poem', 'poetry', 'story', 'vocabulary', 'writing', 'reading', 'novel', 'metaphor', 'simile', 'adjective', 'noun', 'verb', 'adverb', 'punctuation', 'sentence', 'paragraph', 'thesis', 'narrative', 'character', 'plot', 'theme', 'setting', 'tone', 'author', 'genre', 'fiction', 'nonfiction', 'shakespeare', 'sonnet', 'haiku', 'synonym', 'antonym', 'prefix', 'suffix', 'root', 'english', 'language', 'communication', 'speech', 'listening']
  }
];
