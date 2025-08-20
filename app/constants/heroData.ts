import { HiOutlineUser, HiOutlineCode, HiOutlineBriefcase, HiOutlineChatAlt } from 'react-icons/hi';
import { HeroCardData } from '../components/HeroCard';

export const heroCards: HeroCardData[] = [
  {
    id: 'experience',
    title: 'Professional Experience',
    subtitle: 'Software Engineer',
    description: 'Currently at HGS Digital, building scalable React applications with 6+ years of frontend development experience.',
    backgroundColor: 'bg-yellow-300',
    hoverColor: 'hover:bg-yellow-400',
    icon: HiOutlineBriefcase,
    delay: 0,
    modalContent: {
      title: 'Professional Experience',
      content: `
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">HGS Digital – Software Engineer</h3>
            <p class="text-neutral-600 font-medium mb-3">Chicago, IL | Dec 2018 – Present</p>
            <ul class="space-y-2 text-gray-700">
              <li>• Constructed and maintained React and Next.js web applications, delivering expeditious, responsive, and SEO-optimized customer-facing features</li>
              <li>• Designed and implemented reusable UI components utilizing Tailwind CSS and SASS</li>
              <li>• Developed bespoke React plugins employing Twilio UI to satisfy diverse client requirements</li>
              <li>• Created and optimized serverless Node.js functions (AWS Lambda) for scalable backend logic</li>
              <li>• Enhanced performance and Core Web Vitals scores through lazy loading and code splitting</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Audentio, LLC – Web Developer</h3>
            <p class="text-neutral-600 font-medium mb-3">Remote | Jan 2018 – Sep 2018</p>
            <ul class="space-y-2 text-gray-700">
              <li>• Developed custom web applications in React and SASS</li>
              <li>• Produced responsive front-end components for client projects</li>
              <li>• Delivered interactive UI solutions improving usability and visual consistency</li>
            </ul>
          </div>
        </div>
      `
    }
  },
  {
    id: 'skills',
    title: 'Technical Expertise',
    subtitle: 'Full-Stack Capabilities',
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
            <h3 class="text-xl font-bold text-gray-900 mb-3">Languages & Frameworks</h3>
            <p class="text-gray-700">JavaScript (ES6+), React, Next.js, Node.js, Redux, HTML5, CSS3, SASS, Tailwind CSS</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Tools & Platforms</h3>
            <p class="text-gray-700">AWS Lambda, Twilio UI, npm, Webpack, Vite, JIRA, Git</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Practices</h3>
            <p class="text-gray-700">Responsive Design, Accessibility (WCAG), SEO Optimization, Agile (Scrum), CI/CD, Unit Testing</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Additional</h3>
            <p class="text-gray-700">RESTful APIs, Cross-browser Testing, Chrome DevTools, Serverless Architecture</p>
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
            <p class="text-gray-700">Delivered customer-facing applications using React and Next.js, improving site responsiveness and SEO across eCommerce projects.</p>
          </div>
          <div class=" p-4 rounded-lg">
            <h3 class="font-bold text-gray-900 mb-2">Component Library</h3>
            <p class="text-gray-700">Built 20+ reusable UI components with Tailwind CSS and SASS, standardizing design systems and accelerating development cycles.</p>
          </div>
          <div class=" p-4 rounded-lg">
            <h3 class="font-bold text-gray-900 mb-2">Custom Integrations</h3>
            <p class="text-gray-700">Created custom React plugins integrated with Twilio UI to address diverse client requirements, enhancing digital engagement.</p>
          </div>
          <div class=" p-4 rounded-lg">
            <h3 class="font-bold text-gray-900 mb-2">Performance Optimization</h3>
            <p class="text-gray-700">Boosted site performance and accessibility by implementing lazy loading, code splitting, and WCAG compliance.</p>
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
