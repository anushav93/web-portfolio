import PageTemplate from '../components/PageTemplate';

export default function About() {
  return (
    <PageTemplate>
      {/* Work Experience Section */}
      <div className="space-y-24">
        <section>
          <div className=" py-4 z-10">
            <h2 className="text-3xl font-medium border-b border-neutral-200 pb-4">Work Experience</h2>
          </div>
          
          <div className="space-y-16 mt-8">
            {/* HGS Digital */}
            <div className="grid grid-cols-timeline gap-8 hover:bg-neutral-300/50 duration-300 ease-in-out p-4 rounded-lg transition-all">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-medium">Web Developer – HGS Digital </h3>
                  <span className="text-sm text-neutral-500">Chicago, IL</span>
                </div>
                <div className="text-neutral-500">2018 - present</div>
                <ul className="list-disc pl-4 space-y-2 text-neutral-700">
                  <li>Led an end-to-end Twilio project, overseeing architecture, development, testing, and production deployment for IVR flows and AWS serverless integration.</li>
                  <li>Designed and built custom Twilio plugins using React, Redux, and AWS Lambda (Node.js), improving customer interaction efficiency.</li>
                  <li>Created IVR flows for Twilio and Amazon Connect, enhancing automation and streamlining user experiences.</li>
                  <li>Developed serverless web applications using React, Next.js, and Tailwind CSS, ensuring performance, scalability, and security.</li>
                  <li>Built modern, accessible UI components with SASS/CSS, optimizing responsiveness across devices.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-sm text-neutral-500">React</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-sm text-neutral-500">Next.js</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-sm text-neutral-500">AWS</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-sm text-neutral-500">Twilio</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-sm text-neutral-500">Amazon Connect</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-sm text-neutral-500">Contentful</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-sm text-neutral-500">Node.js</span>
                </div>
              </div>
            </div>

            {/* Audentio */}
            <div className="grid grid-cols-timeline gap-8 hover:bg-neutral-300/50 duration-300 ease-in-out p-4 rounded-lg transition-all">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-medium">Web Developer – Audentio </h3>
                  <span className="text-sm text-neutral-500">Rockford, IL</span>
                </div>
                <div className="text-neutral-500">2018</div>
                <ul className="list-disc pl-4 space-y-2 text-neutral-700">
                  <li>Created custom form solutions in React, improving data collection and user experience.</li>
                  <li>Collaborated with designers and backend engineers to build and optimize web applications for speed and usability.</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-sm text-neutral-500">React</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-sm text-neutral-500">JavaScript</span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-sm text-neutral-500">SCSS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <div className="py-4 z-10">
            <h2 className="text-3xl font-medium border-b border-neutral-200 pb-4">Education</h2>
          </div>
          
          <div className="space-y-16 mt-8">
            {/* Northern Illinois University */}
            <div className="grid grid-cols-timeline gap-8 hover:bg-neutral-300/50 duration-300 ease-in-out p-4 rounded-lg transition-all">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-medium">Northern Illinois University </h3>
                  <span className="text-sm text-neutral-500">Dekalb, IL</span>
                </div>
                <div className="text-neutral-500">2015 - 2017</div>
                <p className="text-neutral-700">Master's in Computer Science</p>
              </div>
            </div>

            {/* V.R. Siddhartha Engineering College */}
            <div className="grid grid-cols-timeline gap-8 hover:bg-neutral-300/50 duration-300 ease-in-out p-4 rounded-lg transition-all">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-medium">V.R. Siddhartha Engineering College </h3>
                  <span className="text-sm text-neutral-500">Vijayawada, India</span>
                </div>
                <div className="text-neutral-500">2011 - 2015</div>
                <p className="text-neutral-700">Bachelor's in Computer Science</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
