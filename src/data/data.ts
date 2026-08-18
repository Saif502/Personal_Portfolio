export type NavItem = {
  id: string
  label: string
}

export type EducationItem = {
  degree: string
  institution: string
  duration: string
  result?: string
}

export type PublicationItem = {
  title: string
  type: string
  tags: string[]
}

export type ExperienceItem = {
  role: string
  organization: string
  duration: string
  project?: string
  supervisor?: string
  bullets: string[]
  certificateUrl?: string
}

export type ProjectItem = {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

export type SkillCategory = {
  category: string
  items: string[]
}

export type AchievementItem = {
  label: string
  value: string
  link?: string
}

export type CertificationLeadershipItem = {
  title: string
  details: string
  link?: string
  certificateUrl?: string
}

export type ContactInfo = {
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  facebook: string
}

export const siteConfig = {
  name: 'Md Saifuzzaman Abhi',
  initials: 'SA',
  profileImage: '/Profile.jpeg',
  cvPath: '/Md_Saifuzzaman_Abhi_CV.pdf',
  roles: [
    'CSE Graduate',
    'AI & Medical Imaging Researcher',
    'Aspiring Graduate Researcher (MS/PhD)',
    'Research Enthusiast',
  ],
  professionalSummary:
    'Computer Science graduate with research interests in AI, deep learning, machine learning, medical image analysis, and explainable AI for healthcare applications.',
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const quickFacts = [
  { label: 'Location', value: 'Barishal, Bangladesh' },
  { label: 'Email', value: 'msaifuzzaman20.cse@bu.ac.bd' },
  { label: 'Phone', value: '+880 1326367787' },
]

export const aboutText =
  'A Computer Science and Engineering graduate with research interests in Artificial Intelligence, Deep Learning, Machine Learning, Medical Image Analysis, and Explainable AI (XAI), with a particular interest in developing reliable and interpretable AI solutions for healthcare applications. During undergraduate studies, actively engaged in research involving deep learning-based medical image analysis and explainable AI, while developing a strong interest in machine learning for real-world applications. Also experienced in peer teaching and academic mentorship in core areas including Data Structures & Algorithms, OOP, C++, and Competitive Programming.'

export const educationItems: EducationItem[] = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'University of Barishal, Bangladesh',
    duration: '2026',
    result: 'CGPA: 3.51 / 4.00',
  },
  {
    degree: 'Higher Secondary School Certificate (HSC)',
    institution: 'Sayed Afsar Ali Digree College, Barishal',
    duration: '2019',
    result: 'GPA: 5.00 / 5.00',
  },
]

export const publicationItems: PublicationItem[] = [
  {
    title:
      'CSWFE: A Class-Specific Weighted Feature Engineering Framework for Mpox Skin Lesion Classification Using Explainable AI',
    type: '(Undergraduate Thesis) — Accepted in 4th International Conference on Computing Advancements (ICCA 2026)',
    tags: ['Explainable AI', 'Medical Imaging'],
  },
]

export const experienceItems: ExperienceItem[] = [
  {
    role: 'Research Assistant',
    organization: 'Academic Research, Dept. of CSE, University of Barishal',
    duration: 'Jan 2025 - Present',
    project: 'Mpox Skin Lesion Classification Using Explainable AI',
    supervisor: 'taislam@bu.ac.bd',
    bullets: [
      'Conducted medical image analysis research using Deep Learning, Transfer Learning, and Explainable AI (XAI) techniques.',
      'Performed model interpretation, benchmarking, and performance evaluation to improve classification reliability.',
      'Prepared structured technical documentation and research artifacts to support reproducibility and review.',
    ],
  },
  {
    role: 'Lab Attendant',
    organization:
      'Data Science with Python & Web Development, EDGE: BU-CSE Digital Skills Training',
    duration: 'Aug 2024 - May 2025',
    bullets: [
      'Mentored 100+ students in practical programming sessions covering Data Science, Python, and Web Development.',
      'Provided technical support for debugging, assignment evaluation, and project supervision.',
      'Helped maintain a structured, hands-on learning environment with consistent guidance and feedback loops.',
    ],
    certificateUrl: '/lab-attendant-certificate.pdf',
  },
]

export const projectItems: ProjectItem[] = [
  {
    title: 'Chicken Fowlpox Detection System',
    description:
      'Deep learning-based mobile app for Fowlpox detection using a Vision Transformer (ViT) model, achieving 95.06% test accuracy. Integrated a Flask API with a Flutter app for real-time image-based prediction.',
    tech: ['Flutter', 'Python', 'Machine Learning', 'Flask'],
    github: 'https://github.com/Saif502/Flowpox_detection_APP',
  },
  {
    title: 'QuickFix - Service Management App',
    description:
      'Flutter-based mobile application for booking home services such as cleaning, plumbing, and electrical assistance.',
    tech: ['Flutter', 'Dart'],
    github: 'https://github.com/Saif502/APP_Project',
  },
  {
    title: 'Enhanced Sports Search Engine',
    description:
      'Sports search engine using Python web scraping to extract cricket and football player statistics and career data. Deployed using ngrok.',
    tech: ['Python', 'Web Crawling & Scraping', 'BeautifulSoup'],
    github:
      'https://github.com/Saif502/Information-Retrieval-and-SEO/tree/main/Project/Player_search',
  },
  {
    title: 'VocabMaster',
    description:
      'IELTS vocabulary platform featuring 1200+ English-Bengali words, progress tracking, spaced-repetition quizzes, timed practice, and custom vocabulary management with localStorage. Includes a personalized dashboard with daily goals, learning streaks, and mastery tracking for consistent vocabulary development.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://vocab-master-smoky.vercel.app/',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    items: ['C/C++', 'Python', 'Java', 'SQL', 'JavaScript', 'PHP'],
  },
  {
    category: 'Machine Learning',
    items: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Transfer Learning',
      'CNN',
      'RNN',
      'Ensemble Methods',
      'Clustering',
    ],
  },
  {
    category: 'Explainable AI',
    items: ['SHAP', 'Grad-CAM', 't-SNE'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'NumPy', 'Git', 'Linux'],
  },
]

export const achievementItems: AchievementItem[] = [
  { label: 'Problems Solved', value: '2000+' },
  {
    label: 'Codeforces Specialist',
    value: 'Max Rating: 1402',
    link: 'https://codeforces.com/profile/ZEro_Byte',
  },
  {
    label: 'CodeChef',
    value: '3 Star',
    link: 'https://www.codechef.com/users/honey_ghost',
  },
  { label: 'Onsite Contest Participation', value: 'IUPC, NCPC' },
]

export const certificationsLeadershipItems: CertificationLeadershipItem[] = [
  {
    title: 'Mobile Application Development (Flutter)',
    details: 'Professional training certificate',
    link: 'https://drive.google.com/file/d/1xmZaiuSr7X-DCQaA933FD-ZhHBoEDjla/view?usp=sharing',
  },
  {
    title: 'Secretary-General, Programming Club, CSE Department',
    details: 'Jan 2024 - Dec 2024',
    certificateUrl: '/secretary-general-certificate.pdf',
  },
  {
    title: 'Joint General Secretary, Badhon Blood Donation Organization, BU',
    details: 'Mar 2024 - Jan 2025',
  },
]

export const contactInfo: ContactInfo = {
  email: 'msaifuzzaman20.cse@bu.ac.bd',
  phone: '+880 1326367787',
  location: 'Barishal, Bangladesh',
  linkedin: 'https://www.linkedin.com/in/md-saifuzzaman-abhi-4a79a41a8/',
  github: 'https://github.com/Saif502',
  facebook: 'https://www.facebook.com/md.saifuzzaman.abhi',
}
