'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  ChevronDown,
  Code,
  Database,
  Cloud,
  Cpu
} from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container-max">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold gradient-text"
            >
              Yujun Zheng
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="gradient-text">Yujun</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A results-driven Software Engineer with over 4 years of comprehensive experience 
                in software designing, development and testing.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="btn-primary flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary"
                >
                  Get In Touch
                </button>
              </div>
              <div className="flex space-x-4">
                <a href="mailto:zhengyujun@outlook.com" className="text-gray-400 hover:text-primary-600 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://github.com" className="text-gray-400 hover:text-primary-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-primary-600 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Code className="text-primary-600 mb-2" size={32} />
                    <h3 className="font-semibold text-gray-900">Full Stack</h3>
                    <p className="text-sm text-gray-600">Java, Python, JS</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Database className="text-primary-600 mb-2" size={32} />
                    <h3 className="font-semibold text-gray-900">Data Systems</h3>
                    <p className="text-sm text-gray-600">MySQL, Redis, Kafka</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Cloud className="text-primary-600 mb-2" size={32} />
                    <h3 className="font-semibold text-gray-900">Cloud & DevOps</h3>
                    <p className="text-sm text-gray-600">AWS, Docker, K8s</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Cpu className="text-primary-600 mb-2" size={32} />
                    <h3 className="font-semibold text-gray-900">IoT & Hardware</h3>
                    <p className="text-sm text-gray-600">Raspberry Pi, Arduino</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce-slow"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about building scalable systems and solving complex problems through technology
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With a strong foundation in Computer Science, IoT, and Electrical Engineering, 
                I've built a diverse skill set spanning full-stack development, test automation, 
                and IoT systems. My experience ranges from working with billion-user systems at TikTok 
                to developing innovative IoT solutions for smart homes.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm passionate about leveraging cutting-edge technologies to solve complex problems 
                and drive business value. My expertise includes Java, Python, JavaScript, AWS, 
                and various IoT platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'AWS', 'Docker', 'Kubernetes', 'React', 'Spring Boot', 'MySQL', 'Redis', 'Kafka', 'MQTT'].map((skill) => (
                  <span key={skill} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Education</h4>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h5 className="font-semibold text-gray-900">Master of Science in Computer Science (Artificial Intelligence)</h5>
                  <p className="text-primary-600 font-medium">Georgia Institute of Technology</p>
                  <p className="text-gray-600">Online • Expected 2027</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h5 className="font-semibold text-gray-900">Master of Science in Cyber-Physical Systems</h5>
                  <p className="text-primary-600 font-medium">Northeastern University</p>
                  <p className="text-gray-600">Boston, MA • Dec 2021</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h5 className="font-semibold text-gray-900">Bachelor of Science in Information Engineering</h5>
                  <p className="text-primary-600 font-medium">Shanghai Jiao Tong University</p>
                  <p className="text-gray-600">Shanghai, China • July 2018</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building scalable systems and delivering high-quality solutions across diverse industries
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
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
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                    <p className="text-primary-600 font-semibold">{job.company}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-600">{job.period}</p>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions spanning IoT, automation, and intelligent systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-primary-600 mr-4" size={24} />
                      <a href="mailto:zhengyujun@outlook.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                        zhengyujun@outlook.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="text-primary-600 mr-4" size={24} />
                      <a href="mailto:yujun.zheng@gatech.edu" className="text-gray-600 hover:text-primary-600 transition-colors">
                        yujun.zheng@gatech.edu
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-primary-600 mr-4" size={24} />
                      <a href="tel:+18578004553" className="text-gray-600 hover:text-primary-600 transition-colors">
                        +1 (857) 800-4553
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-primary-600 mr-4" size={24} />
                      <a href="tel:+8618800256317" className="text-gray-600 hover:text-primary-600 transition-colors">
                        +86 18800256317
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
                  <div className="space-y-4">
                    <a 
                      href="mailto:zhengyujun@outlook.com" 
                      className="flex items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <Mail className="text-primary-600 mr-4" size={24} />
                      <div>
                        <p className="font-semibold text-gray-900">Send Email</p>
                        <p className="text-sm text-gray-600">Get in touch via email</p>
                      </div>
                    </a>
                    <a 
                      href="https://linkedin.com/in/yujun-zheng" 
                      className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="text-blue-600 mr-4" size={24} />
                      <div>
                        <p className="font-semibold text-gray-900">LinkedIn</p>
                        <p className="text-sm text-gray-600">Connect on LinkedIn</p>
                      </div>
                    </a>
                    <a 
                      href="https://github.com/yujunzheng" 
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Github className="text-gray-600 mr-4" size={24} />
                      <div>
                        <p className="font-semibold text-gray-900">GitHub</p>
                        <p className="text-sm text-gray-600">View my code</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-max text-center">
          <p className="text-gray-400">
            © 2024 Yujun Zheng. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
