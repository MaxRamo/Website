import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Layout />, level: 90 },
    { name: 'Backend Development', icon: <Database />, level: 85 },
    { name: 'Mobile Development', icon: <Smartphone />, level: 80 },
    { name: 'System Architecture', icon: <Code2 />, level: 85 }
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-400">Passionate about creating innovative digital solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
              <p className="text-gray-400 mb-6">
                With over 5 years of experience in web development, I've had the privilege of working
                with various technologies and frameworks. My journey began with frontend development,
                and I've since expanded my expertise to full-stack development.
              </p>
              <p className="text-gray-400">
                I'm passionate about creating elegant solutions to complex problems and constantly
                learning new technologies to stay at the forefront of web development.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-purple-500">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-purple-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-semibold mb-8 text-center">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  role: 'Senior Full Stack Developer',
                  company: 'Tech Innovations Inc.',
                  period: '2022 - Present',
                  description: 'Leading development of enterprise-level web applications.'
                },
                {
                  role: 'Frontend Developer',
                  company: 'Digital Solutions Ltd.',
                  period: '2020 - 2022',
                  description: 'Developed responsive web applications using React and TypeScript.'
                }
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <p className="text-purple-400">{experience.company}</p>
                  <p className="text-sm text-gray-400 mt-1">{experience.period}</p>
                  <p className="mt-4 text-gray-300">{experience.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;