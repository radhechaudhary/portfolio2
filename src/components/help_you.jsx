import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMobileAlt, faServer, faCloudUploadAlt, faBug, faRocket } from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    icon: <FontAwesomeIcon icon={faLaptopCode} className="text-3xl text-blue-400 mb-3" />,
    title: 'Web Development',
    desc: 'Modern, responsive websites built using React.js and Tailwind CSS.',
  },
  {
    icon: <FontAwesomeIcon icon={faMobileAlt} className="text-3xl text-pink-400 mb-3" />,
    title: 'Mobile App Development',
    desc: 'Cross-platform apps using React Native with smooth UI and real-time features.',
  },
  {
    icon: <FontAwesomeIcon icon={faServer} className="text-3xl text-orange-400 mb-3" />,
    title: 'Backend & APIs',
    desc: 'Node.js + Express-based secure APIs with PostgreSQL or Firebase integration.',
  },
  {
    icon: <FontAwesomeIcon icon={faCloudUploadAlt} className="text-3xl text-teal-300 mb-3" />,
    title: 'Deployment',
    desc: 'Launch apps on Vercel, Railway, or Firebase with secure configs.',
  },
  {
    icon: <FontAwesomeIcon icon={faBug} className="text-3xl text-red-400 mb-3" />,
    title: 'Bug Fixing / Feature Dev',
    desc: 'Need help fixing a bug or adding a new feature? I’ll jump in and sort it out.',
  },
  {
    icon: <FontAwesomeIcon icon={faRocket} className="text-3xl text-purple-400 mb-3" />,
    title: 'Performance & Optimization',
    desc: 'Write clean, optimized code with scalable architecture and best practices.',
  },
]

function HowICanHelp() {
  return (
    <section id="services" className="w-full bg-[#2b2b2b]  text-white py-16 px-6 md:px-20">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">💼 How Can I Help You?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Whether you're launching a product or upgrading an existing one, I can help you design, develop, and deploy modern web and mobile solutions tailored to your needs.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-400  transition relative"
              initial={{scale:1, filter:"drop-shadow(0px 0px 0px #99a1af)"}}
              whileHover={{ filter:"drop-shadow(0px 0px 150px #99a1af)",scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              {service.icon}
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default HowICanHelp
