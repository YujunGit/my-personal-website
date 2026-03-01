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
import { useLanguage } from '../lib/context/LanguageContext'
import { LanguageToggle } from '../components/LanguageToggle'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

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
            <div className="hidden md:flex items-center space-x-8">
              {[t.nav.about, t.nav.experience, t.nav.projects, t.nav.contact].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(['about', 'experience', 'projects', 'contact'][index])}
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <LanguageToggle />
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
              {/* Avatar and Title Row */}
              <div className="flex items-center gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <img
                    src="/avatar.jpg"
                    alt="Yujun Zheng"
                    className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-full shadow-lg border-3 border-white"
                  />
                </motion.div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  {t.hero.greeting}{' '}
                  <span className="gradient-text">{t.hero.name}</span>
                </h1>
              </div>
              
              {/* Description and Actions */}
              <div className="text-center lg:text-left">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t.hero.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                  <button className="btn-primary flex items-center gap-2">
                    <Download size={20} />
                    {t.hero.downloadResume}
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="btn-secondary"
                  >
                    {t.hero.getInTouch}
                  </button>
                </div>
                <div className="flex space-x-4 justify-center lg:justify-start">
                  <a href="mailto:zhengyujun@outlook.com" className="text-gray-400 hover:text-primary-600 transition-colors">
                    <Mail size={24} />
                  </a>
                  <a href="https://github.com/YujunGit" className="text-gray-400 hover:text-primary-600 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com" className="text-gray-400 hover:text-primary-600 transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[Code, Database, Cloud, Cpu].map((Icon, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <Icon className="text-primary-600 mb-2" size={32} />
                      <h3 className="font-semibold text-gray-900">{t.hero.cards[index].title}</h3>
                      <p className="text-sm text-gray-600">{t.hero.cards[index].description}</p>
                    </motion.div>
                  ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.about.journey}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.about.journeyText1}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t.about.journeyText2}
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
              <h4 className="text-xl font-semibold text-gray-900 mb-6">{t.about.education}</h4>
              <div className="space-y-6">
                {t.about.educationItems.map((item, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <h5 className="font-semibold text-gray-900">{item.degree}</h5>
                    <p className="text-primary-600 font-medium">{item.school}</p>
                    <p className="text-gray-600">{item.detail}</p>
                  </div>
                ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.experience.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.experience.subtitle}
            </p>
          </motion.div>

          <div className="space-y-8">
            {t.experience.jobs.map((job, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.projects.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.projects.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.contactInfo}</h3>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.connectWithMe}</h3>
                  <div className="space-y-4">
                    <a 
                      href="mailto:zhengyujun@outlook.com" 
                      className="flex items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <Mail className="text-primary-600 mr-4" size={24} />
                      <div>
                        <p className="font-semibold text-gray-900">{t.contact.sendEmail}</p>
                        <p className="text-sm text-gray-600">{t.contact.sendEmailDesc}</p>
                      </div>
                    </a>
                    <a 
                      href="https://linkedin.com/in/yujun-zheng" 
                      className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="text-blue-600 mr-4" size={24} />
                      <div>
                        <p className="font-semibold text-gray-900">{t.contact.linkedin}</p>
                        <p className="text-sm text-gray-600">{t.contact.linkedinDesc}</p>
                      </div>
                    </a>
                    <a 
                      href="https://github.com/YujunGit" 
                      className="flex items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                    >
                      <Github className="text-primary-600 mr-4" size={24} />
                      <div>
                        <p className="font-semibold text-gray-900">{t.contact.github}</p>
                        <p className="text-sm text-gray-600">{t.contact.githubDesc}</p>
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
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  )
}
