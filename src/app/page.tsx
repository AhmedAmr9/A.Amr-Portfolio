"use client";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { useState, useEffect } from "react";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/60">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-wide">
            Ahmed <span className="text-blue-500">Amr</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            <a
              href="/Ahmed Amr - System Developer.pdf"
              className="btn-primary2"
              target="_blank"
            >
              Download CV
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-white text-xl hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur border-t border-white/10 animate-fade-in">
            <nav className="flex flex-col items-center gap-4 py-4 text-sm">
              <a href="#about" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
              <a
                href="/Ahmed Amr - System Developer.pdf"
                className="btn-primary2"
                download
                onClick={() => setMenuOpen(false)}
              >
                Download CV
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className={`mx-auto max-w-6xl px-11 md:px-4 py-20 md:py-28 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`animate-slide-in-left`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for Work
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              System Developer building
              <span className="text-blue-500"> Web & Mobile </span>
              experiences.
            </h1>
            <p className="mt-5 text-white/70 max-w-xl text-lg leading-relaxed">
              I design, develop, and ship scalable apps. Strong focus on clean UI,
              solid architecture, and smooth user experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="btn-primary hover:scale-105 transition-transform"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-secondary hover:scale-105 transition-transform"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className={`flex mt-16 md:mt-0 justify-center md:justify-end animate-slide-in-right`}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-blue-600/40 blur-2xl animate-pulse" />
              <Image
                src="/Ahmed-Profile.png"
                alt="Ahmed Amr - System Developer"
                width={280}
                height={340}
                className="relative w-56 h-70 md:w-70 md:h-85 rounded-2xl object-cover border border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-11 md:px-5 py-16 md:py-20">
        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">About</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <p className="md:col-span-2 text-white/80 leading-relaxed text-lg">
              I&apos;m Ahmed Amr, a System Developer specializing in JavaScript/TypeScript,
              React/Next.js, Node.js, and modern tooling. I love crafting clean,
              performant interfaces and robust backends. With a passion for problem-solving
              and user experience, I build scalable applications that make a difference.
            </p>
            <div className="grid gap-2 text-sm text-white/70">
              <div className="flex items-center justify-between border border-white/10 rounded-lg p-3 hover:border-blue-500/50 transition-colors">
                <span>Frontend</span><span className="text-white">React, Next.js, Tailwind</span>
              </div>
              <div className="flex items-center justify-between border border-white/10 rounded-lg p-3 hover:border-blue-500/50 transition-colors">
                <span>Backend</span><span className="text-white">Node.js, Express, MongoDB</span>
              </div>
              <div className="flex items-center justify-between border border-white/10 rounded-lg p-3 hover:border-blue-500/50 transition-colors">
                <span>DevOps</span><span className="text-white">Vercel, CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills & Technologies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ name: 'React/Next.js', level: 'Expert', color: 'from-blue-500 to-cyan-500' }, { name: 'Node.js', level: 'Advanced', color: 'from-green-500 to-emerald-500' }, { name: 'TypeScript', level: 'Advanced', color: 'from-blue-600 to-blue-800' }, { name: 'MongoDB', level: 'Intermediate', color: 'from-green-600 to-green-800' }, { name: 'Tailwind CSS', level: 'Expert', color: 'from-teal-500 to-cyan-500' }, { name: 'Express.js', level: 'Advanced', color: 'from-gray-600 to-gray-800' }, { name: 'Git/GitHub', level: 'Advanced', color: 'from-orange-500 to-red-500' }, { name: 'Vercel', level: 'Intermediate', color: 'from-black to-gray-800' }].map((skill, index) => (
              <div key={skill.name} className={`card p-4 hover:scale-105 transition-all duration-300 animate-scale-in`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`h-2 bg-gradient-to-r ${skill.color} rounded-full mb-3`}></div>
                <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-white/70">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Coffee Socks Shop */}
            <a href="https://socks-two.vercel.app/" target="_blank" className="group card p-5 hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <div className="h-40 rounded-xl bg-gradient-to-br from-blue-600/30 to-white/10 mb-4 group-hover:from-blue-500/40 transition-all duration-300" />
              <h3 className="text-lg font-semibold mb-2">Coffee Socks Shop</h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">
                E-commerce platform for coffee-themed socks. Built with Next.js, Tailwind CSS, and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-teal-500/20 text-teal-300 rounded text-xs">Tailwind</span>
              </div>
              <div className="text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">Visit Project →</div>
            </a>

            {/* Supplements Store */}
            <div className="card p-5 animate-scale-in" style={{ animationDelay: '400ms' }}>
              <div className="h-40 rounded-xl bg-gradient-to-br from-emerald-500/25 to-white/10 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Supplements Store</h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">
                Full-stack e-commerce platform for health supplements with user authentication and payment integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Node.js</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">MongoDB</span>
              </div>
              <div className="text-white/50 text-sm">Coming Soon</div>
            </div>

            {/* Portfolio Website */}
            <div className="card p-5 animate-scale-in" style={{ animationDelay: '600ms' }}>
              <div className="h-40 rounded-xl bg-gradient-to-br from-purple-500/25 to-white/10 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Portfolio Website</h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">
                Modern, responsive portfolio website showcasing projects and skills with smooth animations and SEO optimization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-teal-500/20 text-teal-300 rounded text-xs">Tailwind</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">TypeScript</span>
              </div>
              <div className="text-blue-400 text-sm font-medium">Current Project</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">What People Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{ name: "Sarah Johnson", role: "Product Manager", content: "Ahmed delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise helped us achieve our goals ahead of schedule.", avatar: "SJ" }, { name: "Michael Chen", role: "Tech Lead", content: "Working with Ahmed was a great experience. He has strong problem-solving skills and writes clean, maintainable code. Highly recommended!", avatar: "MC" }, { name: "Emily Rodriguez", role: "Startup Founder", content: "Ahmed helped us build our MVP from scratch. His full-stack expertise and understanding of user experience were invaluable to our success.", avatar: "ER" }].map((testimonial, index) => (
              <div key={testimonial.name} className="card p-6 hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {'★'.repeat(5)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Get In Touch</h2>
     <p className="text-white/70 text-center mb-16 max-w-2xl mx-auto">
  I&apos;m always interested in new opportunities and exciting projects.
  Let&apos;s discuss how we can work together to bring your ideas to life.
</p>


          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-xl font-semibold mb-6 text-center">Send me a message</h3>
              <ContactForm />
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-xl font-semibold mb-6 text-center">Connect with me</h3>
              <div className="space-y-4">
                <a href="mailto:ahmed.amr61991@gmail.com" className="flex items-center gap-6 p-4 card hover:scale-105 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-4xl md:text-4xl group-hover:scale-110 transition-transform">📧</div>
                  <div className="text-sm md:text-base">
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-white/70">ahmed.amr61991@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/ahmed-amr-341b8b290" target="_blank" className="flex items-center gap-6 p-4 card hover:scale-105 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-4xl md:text-4xl group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"> <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"/><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"/><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"/><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"/> </svg>
                  </div>
                  <div className="text-sm md:text-base">
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <p className="text-white/70">Connect professionally</p>
                  </div>
                </a>

                <a href="https://github.com/AhmedAmr9" target="_blank" className="flex items-center gap-6 p-4 card hover:scale-105 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-white text-4xl md:text-4xl group-hover:scale-110 transition-transform">
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="40px" height="40px"> <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/> </svg>                  </div>
                  <div className="text-sm md:text-base">
                    <h4 className="font-semibold text-white">GitHub</h4>
                    <p className="text-white/70">Check out my code</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 mt-20">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs md:text-sm text-white/60">
              © {new Date().getFullYear()} Ahmed Amr — All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
