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
  techStack: TechStack[];
}

export const projects: Project[] = [
  {
    title: 'TerraSearch – Drone Landslide Detection',
    description:
      'Integrating GPR, Lidar, and thermal data to develop a YOLOv5-based detection pipeline for drone-based landslide detection.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Vercel_logo.svg/1200px-Vercel_logo.svg.png', // Vercel logo
    link: 'https://github.com/Arun-kushwaha007/TerraSearch',
    slug: 'terra-search',
    techStack: [
      { name: 'Vercel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Vercel_logo.svg/1200px-Vercel_logo.svg.png' },
      { name: 'YOLOv5', logo: 'https://raw.githubusercontent.com/ultralytics/yolov5/main/logo.png' },
      { name: 'TensorFlow', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/TensorFlow_logo.svg/1200px-TensorFlow_logo.svg.png' }
    ]
  },
  {
    title: 'Deadline',
    description:
      'A task and deadline management app to keep track of important deadlines and tasks using React and Node.js.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', // React logo
    link: 'https://github.com/Arun-kushwaha007/Deadline',
    slug: 'deadline',
    techStack: [
      { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Node.js_logo_2015.svg' }
    ]
  },
  {
    title: 'Video to Audio Python Microservices App on Kubernetes',
    description:
      'A Python-based microservices application that converts video files to audio, deployed using Kubernetes.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png', // Python logo
    link: 'https://github.com/Arun-kushwaha007/Video-to-Audio-Python-Microservices-App-on-Kubernetes',
    slug: 'video-to-audio',
    techStack: [
      { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' },
      { name: 'Kubernetes', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo.svg' }
    ]
  },
  {
    title: 'AI-based FIR Analyzer',
    description:
      'NLP-based FIR analysis tool developed during RJPolice Hackathon. Achieved 85%+ precision in analyzing FIR documents.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png', // Python logo
    link: 'https://github.com/Arun-kushwaha007/RJPOLICE_HACK_991_The-Crusade_4',
    slug: 'ai-fir-analyzer',
    techStack: [
      { name: 'NLP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Natural_language_processing.svg/1200px-Natural_language_processing.svg.png' }, 
      { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' }
    ]
  },
  {
    title: 'Dog Holiday Run',
    description:
      'Canvas-based 2D game built with vanilla JS, demoed to 200+ attendees at a campus tech fest.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/JavaScript-logo.png/800px-JavaScript-logo.png', // JavaScript logo
    link: 'https://github.com/Arun-kushwaha007/Dog-Hoiday-Run',
    slug: 'dog-holiday-run',
    techStack: [
      { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/JavaScript-logo.png/800px-JavaScript-logo.png' },
      { name: 'Canvas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/HTML5_Canvas_Logo.svg/800px-HTML5_Canvas_Logo.svg.png' }
    ]
  },
  {
    title: 'Endless Runner Game',
    description:
      '2D mobile game developed in Unity with physics-based gameplay and optimized for 60 FPS.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Unity_Logo.svg/768px-Unity_Logo.svg.png', // Unity logo
    link: 'https://github.com/Arun-kushwaha007/Endless-Runner-Game-Unity',
    slug: 'endless-runner-game',
    techStack: [
      { name: 'Unity', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Unity_Logo.svg/768px-Unity_Logo.svg.png' },
      { name: 'C#', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/CSharp_Logo.svg/200px-CSharp_Logo.svg.png' }
    ]
  },
  {
    title: 'Electrothon 6.0',
    description:
      'Organized and managed the logistics for Electrothon 6.0 hackathon with 350+ participants and 40+ projects.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Vercel_logo.svg/1200px-Vercel_logo.svg.png', // Event logo
    link: 'https://github.com/Arun-kushwaha007/electrothon_6.O',
    slug: 'electrothon-6',
    techStack: [
      { name: 'Event Management', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Vercel_logo.svg/1200px-Vercel_logo.svg.png' }
    ]
  },
  {
    title: 'Stack Overflow Clone',
    description:
      'A MERN stack application with Google OAuth, JWT authentication, and real-time chat using Socket.io.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png', // React logo
    link: 'https://github.com/Arun-kushwaha007/Stack-Overflow-Clone',
    slug: 'stack-overflow-clone',
    techStack: [
      { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/MongoDB_Logo.svg/800px-MongoDB_Logo.svg.png' },
      { name: 'Express', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Expressjs.png/1000px-Expressjs.png' },
      { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png' },
      { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Node.js_logo_2015.svg/1200px-Node.js_logo_2015.svg.png' },
      { name: 'Socket.io', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Socket.io_logo.svg/1200px-Socket.io_logo.svg.png' }
    ]
  },
  {
    title: 'Real-Time Chat App',
    description:
      'A real-time chat application built with Socket.io, enabling instant communication between users.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Socket.io_logo.svg/1200px-Socket.io_logo.svg.png', // Socket.io logo
    link: 'https://github.com/Arun-kushwaha007/RealTime-Chat-app',
    slug: 'realtime-chat',
    techStack: [
      { name: 'Socket.io', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Socket.io_logo.svg/1200px-Socket.io_logo.svg.png' },
      { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Node.js_logo_2015.svg/1200px-Node.js_logo_2015.svg.png' }
    ]
  },
  {
    title: 'Hand Tracking Using Computer Vision',
    description:
      'A project to implement hand tracking using computer vision techniques with OpenCV and Python.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png', // Python logo
    link: 'https://github.com/Arun-kushwaha007/Hand-Tracking-using-Computer-vision',
    slug: 'hand-tracking',
    techStack: [
      { name: 'OpenCV', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/OpenCV_logo.svg/500px-OpenCV_logo.svg.png' },
      { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' }
    ]
  }
];
