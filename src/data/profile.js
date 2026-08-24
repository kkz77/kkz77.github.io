// ─────────────────────────────────────────────────────────────
// EDIT EVERYTHING ABOUT YOUR SITE HERE.
// Change text, add/remove projects, update links — no other file needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Kaung Khant Zaw',
  role: 'AI/ML & Computer Engineering Graduate',
  tagline:
    'Recent Computer Engineering graduate from KMITL with a keen interest in NLP, deep reinforcement learning, and applied AI. I love learning by building, and I am looking for my first opportunity to grow and contribute to a great team.',
  location: 'Bangkok, Thailand',
  email: 'khantzawkaung2@gmail.com',
  phone: '+66 80 224 4794',
  // Drop a square photo at /public/photo.jpg to show it in the hero (leave as '' to show your initials instead).
  photo: '/photo.jpg',
  resumeUrl: '/resume.pdf', // put your PDF in the /public folder as resume.pdf
  socials: {
    github: 'https://github.com/kkz77',
    linkedin: 'https://www.linkedin.com/in/kaung-khant-zaw77',
  },
}

export const about = [
  "I recently graduated in Computer Engineering from King Mongkut's Institute of Technology Ladkrabang (KMITL), where I studied on a full scholarship.",
  'Most of my time went into machine learning and NLP. I fine-tuned language models for low-resource languages like Burmese, and I explored deep reinforcement learning to make optical networks run more efficiently.',
  'What I enjoy most is taking an idea all the way to something that actually works. I like training the models, building the pipelines, and putting a clean interface on top. I know I still have plenty to learn, and honestly that is the part I look forward to. I would love to keep growing alongside people who are further along than I am.',
]

export const education = [
  {
    school: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
    degree: 'B.Eng. in Computer Engineering',
    location: 'Bangkok, Thailand',
    period: 'Graduated 2026',
    detail: 'GPA 3.62 / 4.0 · Full Scholarship Recipient',
  },
  {
    school: 'University of Information Technology (UIT)',
    degree: 'Computer Science Coursework',
    location: 'Yangon, Myanmar',
    period: '2017 – 2019',
    detail: '',
  },
]

// Highlighted work. `link` opens the GitHub repo (or leave as null).
export const projects = [
  {
    title: 'Named Entity-Aware Model for Burmese Abstractive Summarization',
    tag: 'Research · JAIST, Japan',
    image: '/img/nlp.svg',
    featured: true,
    description:
      'I fine-tuned the mT5 model to summarize Burmese news, and looked into whether teaching the model about named entities would make its summaries better. To do that, I built an entity-tagging pipeline with Conditional Random Fields and Stanza, then trained the model in two stages, first on the tagged data and then again with the entities masked.',
    result: '+4.06% improvement over the previous best fine-tuned Burmese mT5 model.',
    tech: ['mT5', 'Transformers', 'CRF', 'Stanza', 'PyTorch', 'NLP'],
    link: null,
    publicationHref: '#publications', // this project is written up in the Publications section
  },
  {
    title: 'Optical Network Resource Allocation with DRL',
    tag: 'Capstone Project · KMITL',
    image: '/img/network.svg',
    featured: true,
    description:
      'For my final-year project I built a full simulation of an elastic optical network (the COST239 topology, with 11 nodes, 34 links, and 400 spectrum slots per link). I then designed Slicer-Aware PPO, a deep reinforcement learning agent that learns to allocate spectrum while keeping fragmentation low, and compared it against four other methods.',
    result: 'Reduced request blocking probability by up to 80% at low load and about 40% at high load, compared with First-Fit.',
    tech: ['PyTorch', 'PPO', 'Deep RL', 'Python', 'Simulation'],
    link: 'https://github.com/kkz77/eon-spectrum-allocation-drl',
  },
  {
    title: 'AI Safety Assistant App',
    tag: 'International AI Hackathon 2024 · 🥉 Third Place',
    image: '/img/safety.svg',
    featured: true,
    description:
      'A workplace safety assistant my team built at a hackathon. It takes in images, voice, and text, uses OpenCV and YOLO to spot hazards in a scene, pulls relevant safety documents through a RAG pipeline with Amazon Titan Embeddings, and asks Claude 3 Sonnet to turn all of that into clear safety advice.',
    result: 'Awarded Third Place among international teams.',
    tech: ['YOLO', 'OpenCV', 'RAG', 'Amazon Titan', 'Claude 3', 'LangChain'],
    link: 'https://github.com/kkz77/ai_hackathon',
  },
  {
    title: 'Room Mood Classifier',
    tag: 'ML Project',
    image: '/img/mood.svg',
    featured: false,
    description:
      'A small computer vision project that looks at a photo of a room and guesses its overall mood or ambiance.',
    result: '',
    tech: ['Python', 'Computer Vision'],
    link: 'https://github.com/kkz77/room_mood',
  },
  {
    title: 'Automatic Pet Feeder',
    tag: 'Embedded Systems · STM32F767ZI',
    image: '/img/embedded.svg',
    featured: false,
    description:
      'A pet feeder that dispenses food on its own. It uses an ultrasonic sensor and a PIR sensor to sense distance and motion, a stepper motor to release the food, and an LCD with UART messages to show status and send feeding notifications.',
    result: '',
    tech: ['STM32', 'C', 'Sensors', 'UART'],
    link: 'https://github.com/kkz77/Automatic_Pet_Feeder',
  },
  {
    title: 'Café Street Ordering Platform',
    tag: 'Web App · React',
    image: '/img/cafe.svg',
    featured: false,
    description:
      'A café ordering site I built in React. Customers can sign in, browse the menu, and place orders, while staff get an admin dashboard to manage menus, categories, toppings, and the orders coming in. I connected the front end to the backend APIs with Axios.',
    result: '',
    tech: ['React', 'JavaScript', 'Axios', 'REST API'],
    link: 'https://github.com/kkz77/cafe_street',
  },
]

export const skills = [
  { group: 'Programming', items: ['Python', 'C', 'JavaScript', 'PHP'] },
  {
    group: 'AI / Machine Learning',
    items: ['PyTorch', 'Transformers', 'mT5', 'PPO', 'LLMs', 'RAG', 'YOLO', 'OpenCV', 'CRF', 'Stanza', 'LangChain'],
  },
  {
    group: 'Web Development',
    items: ['React', 'Laravel', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'REST APIs'],
  },
  { group: 'Databases & Tools', items: ['MySQL', 'Git', 'GitHub', 'Gradio', 'Streamlit'] },
  { group: 'Embedded Systems', items: ['STM32', 'Ultrasonic Sensors', 'PIR Sensors', 'Stepper Motors', 'UART'] },
]

export const achievements = [
  {
    title: 'Bronze Award, Third Place',
    detail: 'International AI Hackathon 2024, organized by KMITL, The University of Queensland, and NIA.',
  },
  {
    title: 'Full Scholarship Recipient',
    detail: "Bachelor's Degree in Computer Engineering, KMITL.",
  },
]

// Your name is highlighted automatically wherever it appears in `authors`.
export const publications = [
  {
    authors:
      'Hlaing Myat Nwe, Kaung Khant Zaw, Ye Kyaw Thu, Natthawut Kertkeidkachorn, Thepchai Supnithi, Rathachai Chawuthai, Kiyoaki Shirai, Thanaruk Theeramunkong',
    title: 'Named Entity-Aware Model for Burmese Abstractive Summarization',
    venue: 'IEEE Access',
    status: 'Under Review',
    year: '2026',
    url: '', // add a link (arXiv, DOI, PDF) once available
  },
]

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Myanmar', level: 'Native' },
]
