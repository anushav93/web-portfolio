import { HiOutlineUser, HiOutlineCode, HiOutlineBriefcase, HiOutlineChatAlt } from 'react-icons/hi';
import { HeroCardData } from '../components/HeroCard';

export const heroCards: HeroCardData[] = [
  {
    id: 'experience',
    title: 'Professional Experience',
    subtitle: 'Sr. Software Engineer',
    description: 'Currently at HGS Digital, building scalable React applications with 7+ years of frontend development experience.',
    backgroundColor: 'bg-yellow-300',
    hoverColor: 'hover:bg-yellow-400',
    icon: HiOutlineBriefcase,
    delay: 0,
    modalContent: {
      title: 'Professional Experience',
      content: `
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">HGS Digital – Sr. Software Engineer</h3>
            <p class="text-neutral-600 font-medium mb-3">Chicago, IL | Dec 2018 – Present</p>
            <ul class="space-y-2 text-gray-700">
              <li>• Built and maintained scalable React & Next.js applications for B2B and customer-facing platforms</li>
              <li>• Owned reusable UI components with performance, accessibility, and consistency in mind</li>
              <li>• Delivered high-performance, SEO-optimized features, improving Core Web Vitals</li>
              <li>• Developed custom React integrations with Twilio UI for real-time communication workflows</li>
              <li>• Collaborated cross-functionally to own features end-to-end</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Audentio, LLC – Web Developer</h3>
            <p class="text-neutral-600 font-medium mb-3">Remote | Jan 2018 – Sep 2018</p>
            <ul class="space-y-2 text-gray-700">
              <li>• Built responsive, component-based UIs using React and SASS</li>
              <li>• Delivered polished, interactive interfaces aligned with design requirements</li>
            </ul>
          </div>
        </div>
      `
    }
  },
  {
    id: 'skills',
    title: 'Technical Expertise',
    subtitle: 'Building Scalable, Performant Frontend Systems',
    description: 'Expert in React, Next.js, TypeScript, Node.js, and AWS. Specialized in building scalable, high-performance web applications.',
    backgroundColor: 'bg-fuchsia-300',
    hoverColor: 'hover:bg-fuchsia-400',
    icon: HiOutlineCode,
    delay: 0.05,
    modalContent: {
      title: 'Technical Expertise',
      content: `
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Frontend Engineering</h3>
            <p class="text-gray-700">React, Next.js, JavaScript (ES6+), HTML5, CSS3, SASS, Tailwind CSS</p>
            <p class="text-gray-700 italic">Component-driven development, performance optimization, accessibility-first UI</p>
          </div>
            <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">State & Data Management</h3>
            <p class="text-gray-700">React State, Context, Redux (working knowledge)</p>
            <p class="text-gray-700 italic">Predictable data flow for data-heavy UIs</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Backend & Integrations</h3>
            <p class="text-gray-700">Node.js, AWS Lambda, RESTful APIs, Serverless Architecture</p>
            <p class="text-gray-700 italic">Secure API integration and scalable backend workflows</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Tooling & Build Systems</h3>
            <p class="text-gray-700">Vite, Webpack, npm, Git, Chrome DevTools, JIRA</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Engineering Practices</h3>
            <p class="text-gray-700">Accessibility (WCAG), Responsive Design, SEO Optimization, CI/CD, Unit Testing, Agile (Scrum)</p>
          </div>       
        </div>
      `
    }
  },
  {
    id: 'projects',
    title: 'Featured Projects',
    subtitle: 'Recent Work',
    description: 'Led development of enterprise applications, built 20+ reusable UI components, and created custom React plugins for enhanced user experiences.',
    backgroundColor: 'bg-indigo-300',
    hoverColor: 'hover:bg-indigo-400',
    icon: HiOutlineUser,
    delay: 0.1,
    modalContent: {
      title: 'Career Highlights',
      content: `
        <div class="space-y-4">
          <div class=" p-4 rounded-lg">
            <h3 class="font-bold text-gray-900 mb-2">Modern React Applications</h3>
            <p class="text-gray-700">Built and shipped scalable React & Next.js applications for customer-facing and B2B platforms, with a strong focus on performance and SEO.</p>
          </div>
          <div class=" p-4 rounded-lg">
            <h3 class="font-bold text-gray-900 mb-2">Reusable Component Systems</h3>
            <p class="text-gray-700">Designed and maintained a reusable UI component library (20+ components) using Tailwind CSS and SASS, improving consistency and development velocity.</p>
          </div>
          <div class=" p-4 rounded-lg">
            <h3 class="font-bold text-gray-900 mb-2">Custom Integrations</h3>
            <p class="text-gray-700">Developed custom React plugins and integrations using Twilio UI to support real-time communication workflows and client-specific requirements.</p>
          </div>
          <div class=" p-4 rounded-lg">
            <h3 class="font-bold text-gray-900 mb-2">Performance Optimization</h3>
            <p class="text-gray-700">Improved Core Web Vitals and accessibility through lazy loading, code splitting, and WCAG-compliant UI patterns.</p>
          </div>
        </div>
      `
    }
  },
  {
    id: 'contact',
    title: 'Get In Touch',
    subtitle: 'Open to Opportunities',
    description: 'Based in Chicago, IL. Currently available for exciting frontend development opportunities and challenging projects.',
    backgroundColor: 'bg-lime-300',
    hoverColor: 'hover:bg-lime-400',
    icon: HiOutlineChatAlt,
    delay: 0.15,
    modalContent: {
      title: 'Contact Information',
      content: `
        <div class="space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to work together?</h3>
            <p class="text-gray-700 mb-6">I'm always interested in discussing new opportunities and frontend challenges.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-neutral-50/50 p-4 rounded-lg text-center">
              <h4 class="font-bold text-gray-900 mb-2">Email</h4>
              <a href="mailto:anushaventrapragada93@gmail.com" class="text-neutral-600 hover:text-neutral-700">anushaventrapragada93@gmail.com</a>
            </div>
            <div class="bg-neutral-50/50 p-4 rounded-lg text-center">
              <h4 class="font-bold text-gray-900 mb-2">LinkedIn</h4>
              <a href="https://linkedin.com/in/anusha-v" target="_blank" class="text-neutral-600 hover:text-neutral-700">linkedin.com/in/anusha-v</a>
            </div>
            <div class="bg-neutral-50/50 p-4 rounded-lg text-center">
              <h4 class="font-bold text-gray-900 mb-2">Phone</h4>
              <a href="tel:8152174225" class="text-neutral-600 hover:text-neutral-700">(815) 217-4225</a>
            </div>
            <div class="bg-neutral-50/50 p-4 rounded-lg text-center">
              <h4 class="font-bold text-gray-900 mb-2">Location</h4>
              <span class="text-gray-700">Chicago, IL</span>
            </div>
          </div>
          <div class="text-center">
            <h4 class="font-bold text-gray-900 mb-3">Education</h4>
            <p class="text-gray-700">M.S., Computer Science – Northern Illinois University, 2017</p>
            <p class="text-gray-700">B.S., Computer Science – V.R. Siddhartha Engineering College, 2015</p>
          </div>
        </div>
      `
    }
  }
];
