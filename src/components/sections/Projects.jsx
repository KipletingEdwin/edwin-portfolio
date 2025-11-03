import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto py-4">
        <h2
          className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 
            bg-clip-text text-transparent text-center"
        >

          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3> Cloud Platform </h3>
                <p>
                    Scalable cloud infrastructure management with real-time monitoring and automated scaling
                </p>
            </div>

        </div>



      </div>
    </section>
  );
};

export default Projects;
