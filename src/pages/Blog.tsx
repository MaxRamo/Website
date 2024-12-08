import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blog-posts';

const categories = ['All', 'Technology', 'Opinion', 'Tutorial'] as const;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');

  const filteredPosts = blogPosts.filter(
    post => selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-400">Thoughts, tutorials, and insights about web development</p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;