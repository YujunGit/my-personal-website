export const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact'
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Yujun',
    description: 'A results-driven Software Engineer with over 4 years of comprehensive experience in software designing, development and testing.',
    downloadResume: 'Download Resume',
    getInTouch: 'Get In Touch',
    cards: [
      { title: 'Full Stack', description: 'Java, Python, JS' },
      { title: 'Data Systems', description: 'MySQL, Redis, Kafka' },
      { title: 'Cloud & DevOps', description: 'AWS, Docker, K8s' },
      { title: 'IoT & Hardware', description: 'Raspberry Pi, Arduino' }
    ]
  },
  about: {
    title: 'About Me',
    subtitle: 'Passionate about building scalable systems and solving complex problems through technology',
    journey: 'My Journey',
    journeyText1: 'With a strong foundation in Computer Science, IoT, and Electrical Engineering, I\'ve built a diverse skill set spanning full-stack development, test automation, and IoT systems. My experience ranges from working with billion-user systems at TikTok to developing innovative IoT solutions for smart homes.',
    journeyText2: 'I\'m passionate about leveraging cutting-edge technologies to solve complex problems and drive business value. My expertise includes Java, Python, JavaScript, AWS, and various IoT platforms.',
    education: 'Education',
    educationItems: [
      {
        degree: 'Master of Science in Computer Science (Artificial Intelligence)',
        school: 'Georgia Institute of Technology',
        detail: 'Online • Expected 2027'
      },
      {
        degree: 'Master of Science in Cyber-Physical Systems',
        school: 'Northeastern University',
        detail: 'Boston, MA • Dec 2021'
      },
      {
        degree: 'Bachelor of Science in Information Engineering',
        school: 'Shanghai Jiao Tong University',
        detail: 'Shanghai, China • July 2018'
      }
    ]
  },
  experience: {
    title: 'Professional Experience',
    subtitle: 'Building scalable systems and delivering high-quality solutions across diverse industries',
    jobs: [
      {
        company: 'TikTok',
        position: 'SDET II, Privacy & Security',
        period: 'Sep 2024 - Feb 2025',
        location: 'San Jose, CA, US',
        highlights: [
          'Delivered high-quality assurance for big data systems serving 1 billion users',
          'Developed Python-based test automation framework with 90% API coverage',
          'Built demo services in Go for functional testing of Purpose Limitation SDK',
          'Enhanced monitoring dashboards with real-time insights and anomaly detection'
        ],
        technologies: ['Python', 'Go', 'RPC', 'HTTP', 'Big Data', 'CI/CD']
      },
      {
        company: 'Marlabs LLC (IDEXX)',
        position: 'Full Stack Software Programmer',
        period: 'Feb 2023 - Aug 2024',
        location: 'Remote',
        highlights: [
          'Implemented user session management using Redis distributed storage',
          'Built product and order management pages with Thymeleaf and AJAX',
          'Optimized stock deduction efficiency using Redis atomic operations',
          'Achieved 10x throughput increase through stress testing and optimization'
        ],
        technologies: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'RabbitMQ', 'Thymeleaf']
      },
      {
        company: 'RND4IMPACT Inc.',
        position: 'Software Developer',
        period: 'May 2022 - Feb 2023',
        location: 'Remote',
        highlights: [
          'Implemented end-to-end IoT solutions using Python and Java',
          'Designed data management strategies with custom JSON formats',
          'Integrated TLS and authentication mechanisms for IoT security',
          'Developed MQTT and CoAP servers with cloud visualization'
        ],
        technologies: ['Python', 'Java', 'MQTT', 'CoAP', 'IoT', 'MySQL', 'TLS']
      }
    ]
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'Innovative solutions spanning IoT, automation, and intelligent systems',
    items: [
      {
        title: 'Smart Home Control System',
        description: 'End-to-end IoT solution with MQTT/CoAP communication, TLS security, and cloud visualization.',
        technologies: ['Python', 'Java', 'MQTT', 'CoAP', 'MySQL', 'TLS'],
        highlights: ['Device-to-cloud communication', 'Real-time data visualization', 'Security integration']
      },
      {
        title: 'Intelligent Bicycle Suites',
        description: 'Complete AR helmet system with sensors, speed detection, and collision avoidance.',
        technologies: ['C++', 'Python', 'Raspberry Pi', 'Arduino', 'Bluetooth'],
        highlights: ['AR helmet display', 'Speed & cadence detection', 'Collision avoidance']
      },
      {
        title: 'Advanced Security System',
        description: 'Multi-modal recognition system with face, character, and marker detection capabilities.',
        technologies: ['C++', 'OpenCV', 'Deep Learning', 'Node.js', 'MySQL'],
        highlights: ['Face recognition', 'Character recognition', 'Real-time processing']
      }
    ]
  },
  contact: {
    title: 'Get In Touch',
    subtitle: 'I\'m always interested in new opportunities and exciting projects. Let\'s connect!',
    contactInfo: 'Contact Information',
    connectWithMe: 'Connect With Me',
    sendEmail: 'Send Email',
    sendEmailDesc: 'Get in touch via email',
    linkedin: 'LinkedIn',
    linkedinDesc: 'Connect on LinkedIn',
    github: 'GitHub',
    githubDesc: 'View my code'
  },
  footer: {
    copyright: '© 2024 Yujun Zheng. Built with Next.js and Tailwind CSS.'
  }
}
