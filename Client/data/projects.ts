// project.tsx
export interface TechStack {
  name: string;
  logo: string;
}

export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  techStack: TechStack[]; // New property for tech stack
}

export const projects: Project[] = [
  {
    title: 'TerraSearch – Drone Landslide Detection',
    description:
      'Integrating GPR, Lidar, and thermal data to develop a YOLOv5-based detection pipeline for drone-based landslide detection.',
    logo: '/logos/vercel.svg', // Vercel logo for the project
    link: 'https://github.com/Arun-kushwaha007/TerraSearch',
    slug: 'terra-search',
    techStack: [
      { name: 'Vercel', logo: '/logos/vercel.svg' },
      { name: 'YOLOv5', logo: '/logos/vercel.svg' },  // Vercel logo added
      { name: 'TensorFlow', logo: '/logos/vercel.svg' } // Vercel logo added
    ]
  },
  {
    title: 'Deadline',
    description:
      'A task and deadline management app to keep track of important deadlines and tasks using React and Node.js.',
    logo: '/logos/vercel.svg', // Vercel logo for the project
    link: 'https://github.com/Arun-kushwaha007/Deadline',
    slug: 'deadline',
    techStack: [
      { name: 'React', logo: '/logos/vercel.svg' }, // Vercel logo added
      { name: 'Node.js', logo: '/logos/vercel.svg' } // Vercel logo added
    ]
  },
  {
    title: 'Video to Audio Python Microservices App on Kubernetes',
    description:
      'A Python-based microservices application that converts video files to audio, deployed using Kubernetes.',
    logo: '/logos/vercel.svg', // Vercel logo for the project
    link: 'https://github.com/Arun-kushwaha007/Video-to-Audio-Python-Microservices-App-on-Kubernetes',
    slug: 'video-to-audio',
    techStack: [
      { name: 'Python', logo: '/logos/vercel.svg' }, // Vercel logo added
      { name: 'Kubernetes', logo: '/logos/vercel.svg' } // Vercel logo added
    ]
  },
  {
    title: 'AI-based FIR Analyzer',
    description:
      'NLP-based FIR analysis tool developed during RJPolice Hackathon. Achieved 85%+ precision in analyzing FIR documents.',
    logo: '/logos/vercel.svg', // Vercel logo for the project
    link: 'https://github.com/Arun-kushwaha007/RJPOLICE_HACK_991_The-Crusade_4',
    slug: 'ai-fir-analyzer',
    techStack: [
      { name: 'NLP', logo: '/logos/vercel.svg' }, // Vercel logo added
      { name: 'Python', logo: '/logos/vercel.svg' } // Vercel logo added
    ]
  },
  {
    title: 'Dog Holiday Run',
    description:
      'Canvas-based 2D game built with vanilla JS, demoed to 200+ attendees at a campus tech fest.',
    logo: '/logos/vercel.svg', // Vercel logo for the project
    link: 'https://github.com/Arun-kushwaha007/Dog-Hoiday-Run',
    slug: 'dog-holiday-run',
    techStack: [
      { name: 'JavaScript', logo: '/logos/vercel.svg' }, // Vercel logo added
      { name: 'Canvas', logo: '/logos/vercel.svg' } // Vercel logo added
    ]
  },
  {
    title: 'Endless Runner Game',
    description:
      '2D mobile game developed in Unity with physics-based gameplay and optimized for 60 FPS.',
    logo: '/logos/vercel.svg', // Vercel logo for the project
    link: 'https://github.com/Arun-kushwaha007/Endless-Runner-Game-Unity',
    slug: 'endless-runner-game',
    techStack: [
      { name: 'Unity', logo: '/logos/vercel.svg' }, // Vercel logo added
      { name: 'C#', logo: '/logos/vercel.svg' } // Vercel logo added
    ]
  },
  {
    title: 'Electrothon 6.0',
    description:
      'Organized and managed the logistics for Electrothon 6.0 hackathon with 350+ participants and 40+ projects.',
    logo: '/logos/vercel.svg', // Vercel logo for the project
    link: 'https://github.com/Arun-kushwaha007/electrothon_6.O',
    slug: 'electrothon-6',
    techStack: [
      { name: 'Event Management', logo: '/logos/vercel.svg' } // Vercel logo added
    ]
  },
  {
    title: 'Stack Overflow Clone',
    description:
      'A MERN stack application with Google OAuth, JWT authentication, and real-time chat using Socket.io.',
    logo: '/logos/vercel.svg', // Vercel logo for the project
    link: 'https://github.com/Arun-kushwaha007/Stack-Overflow-Clone',
    slug: 'stack-overflow-clone',
    techStack: [
      { name: 'MongoDB', logo: '/logos/vercel.svg' }, // Vercel logo added
      { name: 'Express', logo: '/logos/vercel.svg' }, // Vercel logo added
      { name: 'React', logo: '/logos/vercel.svg' }, // Vercel logo added
      { name: 'Node.js', logo: '/logos/vercel.svg' }, // Vercel logo added
      { name: 'Socket.io', logo: '/logos/vercel.svg' } // Vercel logo added
    ]
  },
  {
    title: 'Real-Time Chat App',
    description:
      'A real-time chat application built with Socket.io, enabling instant communication between users.',
    logo: '/logos/vercel.svg', // Vercel logo for the project
    link: 'https://github.com/Arun-kushwaha007/RealTime-Chat-app',
    slug: 'realtime-chat',
    techStack: [
      { name: 'Socket.io', logo: '/logos/vercel.svg' }, // Vercel logo added
      { name: 'Node.js', logo: '/logos/vercel.svg' } // Vercel logo added
    ]
  },
  {
    title: 'Hand Tracking Using Computer Vision',
    description:
      'A project to implement hand tracking using computer vision techniques with OpenCV and Python.',
    logo: '/logos/vercel.svg', // Vercel logo for the project
    link: 'https://github.com/Arun-kushwaha007/Hand-Tracking-using-Computer-vision',
    slug: 'hand-tracking',
    techStack: [
      { name: 'OpenCV', logo: '/logos/vercel.svg' }, // Vercel logo added
      { name: 'Python', logo: '/logos/vercel.svg' } // Vercel logo added
    ]
  }
];
