import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white/5 transition-colors hover:bg-white/10"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime} min read
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-purple-400">
          {post.title}
        </h3>
        <p className="mt-2 text-gray-400">{post.excerpt}</p>
      </div>
    </motion.article>
  );
};

export default BlogCard;