import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1280')] bg-cover bg-center opacity-30 z-[-1]" />
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Crafting Digital
              <span className="text-purple-500"> Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full-stack developer specializing in creating beautiful, functional, and scalable web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
              >
                View My Work
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-purple-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-gray-400">Delivering end-to-end solutions for digital success</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-12 h-12 text-purple-500" />,
                title: 'Frontend Development',
                description: 'Creating responsive and interactive user interfaces with modern frameworks'
              },
              {
                icon: <Code className="w-12 h-12 text-purple-500" />,
                title: 'Backend Development',
                description: 'Building robust and scalable server-side applications'
              },
              {
                icon: <Smartphone className="w-12 h-12 text-purple-500" />,
                title: 'Mobile Development',
                description: 'Developing cross-platform mobile applications'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;