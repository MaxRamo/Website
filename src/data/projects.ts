import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory management, payment processing, and an admin dashboard.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    category: 'fullstack',
    link: 'https://example.com',
    github: 'https://github.com/example/project'
  },
  {
    id: '2',
    title: 'AI-Powered Task Manager',
    description: 'Smart task management app that uses AI to prioritize and categorize tasks. Built with React Native and TensorFlow.js.',
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=1280',
    technologies: ['React Native', 'TensorFlow.js', 'TypeScript'],
    category: 'mobile',
    link: 'https://example.com'
  },
  {
    id: '3',
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for real-time data visualization using D3.js and WebSocket.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280',
    technologies: ['React', 'D3.js', 'WebSocket', 'TypeScript'],
    category: 'frontend',
    link: 'https://example.com',
    github: 'https://github.com/example/project'
  }
];