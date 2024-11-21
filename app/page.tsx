import Section from "@/components/layout/Section";
import SectionTitle from "@/components/layout/SectionTitle";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>
      {/* About Section */}
      <Section id="about" className="bg-[#030014]">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-center text-gray-300 max-w-3xl mx-auto">
          I am a full-stack developer with expertise in modern web technologies, building performant, accessible, and scalable web applications.
        </p>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-[#1e014d]">
        <SectionTitle>My Skills</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
          <Card className="p-5 bg-[#240144]">
            <h3 className="text-lg font-semibold">JavaScript</h3>
            <p className="text-sm text-gray-300 mt-2">Modern ES6+ development.</p>
          </Card>
          <Card className="p-5 bg-[#240144]">
            <h3 className="text-lg font-semibold">React</h3>
            <p className="text-sm text-gray-300 mt-2">Building interactive UIs.</p>
          </Card>
          <Card className="p-5 bg-[#240144]">
            <h3 className="text-lg font-semibold">Node.js</h3>
            <p className="text-sm text-gray-300 mt-2">Backend APIs and services.</p>
          </Card>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-[#030014]">
        <SectionTitle>My Projects</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
          <Card className="p-5 bg-[#240144]">
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="text-sm text-gray-300 mt-2">Description of the project.</p>
          </Card>
          <Card className="p-5 bg-[#240144]">
            <h3 className="text-lg font-semibold">Project 2</h3>
            <p className="text-sm text-gray-300 mt-2">Description of the project.</p>
          </Card>
          <Card className="p-5 bg-[#240144]">
            <h3 className="text-lg font-semibold">Project 3</h3>
            <p className="text-sm text-gray-300 mt-2">Description of the project.</p>
          </Card>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-[#1e014d]">
        <SectionTitle>Contact Me</SectionTitle>
        <div className="text-center">
          <Button>Contact Me</Button>
        </div>
      </Section>
    </main>
  );
}

