'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-blue-600">Hubit</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Courses</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Banner Image Section */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Students learning IT skills"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg">
              Empower Your Future with IT Skills
            </h2>
            <p className="text-lg md:text-xl drop-shadow-md">
              Transform your career with our comprehensive training programs
            </p>
          </div>
        </div>
      </section>

      <main>
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-extrabold sm:text-6xl mb-6">
              Short IT Training Courses
            </h2>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
              Master digital marketing, frontend, backend, graphic design, video editing, accounting, and hardware networking with our intensive short programs.
            </p>
            <div>
              <a href="#courses" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Explore Courses
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div id="courses" className="mt-16">
            <h3 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Digital Marketing</h4>
                <p className="text-gray-600 leading-relaxed">Learn SEO, social media, PPC, and more in this short course.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">💻</div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Frontend Development</h4>
                <p className="text-gray-600 leading-relaxed">Master HTML, CSS, JavaScript, and frameworks like React.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">🔧</div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Backend Development</h4>
                <p className="text-gray-600 leading-relaxed">Build server-side applications with Node.js, databases, and APIs.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Graphic Design</h4>
                <p className="text-gray-600 leading-relaxed">Master design principles, tools like Photoshop, Illustrator, and create stunning visuals.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">🎬</div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Video Editing</h4>
                <p className="text-gray-600 leading-relaxed">Learn Premiere Pro, After Effects, and create professional video content.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Office Accounting</h4>
                <p className="text-gray-600 leading-relaxed">Master Excel, QuickBooks, and essential accounting software for business.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">🖥️</div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Hardware & Networking</h4>
                <p className="text-gray-600 leading-relaxed">Learn computer hardware, network setup, troubleshooting, and IT infrastructure.</p>
              </div>
            </div>
          </div>

          <div id="about" className="mt-20 text-center bg-white p-12 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">About Hubit</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hubit is dedicated to providing high-quality, short IT training courses to help you advance your career in the fast-paced tech industry.
            </p>
          </div>

          <div id="contact" className="mt-20 text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white p-12 rounded-xl">
            <h3 className="text-4xl font-bold mb-6">Contact Us</h3>
            <p className="text-lg mb-4">
              Ready to start your learning journey?
            </p>
            <p className="text-lg">
              Email: info@hubit.com | Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2026 Hubit. All rights reserved.</p>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-20"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
