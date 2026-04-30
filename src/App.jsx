export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* NAV */}
      <header className="sticky top-0 backdrop-blur bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">itsJohnDev</h1>
          <nav className="space-x-4 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="space-y-4">
          <p className="text-slate-400">Hello, I am</p>
          <h2 className="text-4xl md:text-6xl font-bold">John</h2>
          <p className="text-xl text-slate-300 max-w-2xl">
            Backend / Cloud / DevOps engineer focused on building reliable,
            scalable systems with clean operational simplicity.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-xl border border-slate-600 hover:border-slate-400 text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800"
      >
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-slate-300 leading-relaxed">
          I build backend and cloud systems with a focus on reliability,
          scalability, and operational clarity. My work spans cloud platforms
          like AWS and GCP, containerized workloads with Docker and Kubernetes,
          and infrastructure-as-code using tools like Terraform. I prefer
          simple, maintainable architectures over unnecessary complexity,
          following a KISS approach whenever possible. I learn through patterns
          and intent rather than memorization, which helps me adapt quickly as
          tools and platforms evolve. My goal is always to design systems that
          are easy to deploy, monitor, and scale in real-world environments.
        </p>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800"
      >
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-slate-300">
          {[
            "AWS",
            "GCP",
            "Docker",
            "Kubernetes (GKE)",
            "Terraform / IaC",
            "CI/CD",
            "Node.js",
            "System Design",
            "Observability (Logs / Metrics)",
            "NoSQL",
            "SQL",
            "Python",
            "Flask",
            "Django",
            "Angular",
            "React",
            "Vue",
            "CSS",
            "Tailwind CSS",
          ].map((skill) => (
            <div
              key={skill}
              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800"
      >
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Flask GCP File Upload API",
              desc: "Problem: needed a simple, secure file upload service. Architecture: Flask API → GCP Cloud Storage with IAM-controlled access. Stack: Python, Flask, GCP, Docker, CI/CD, Service Accounts. Outcome: automated deployments with secure uploads and minimal manual infra handling.",
              link: "https://github.com/itsJohnDev/flask-file-api",
            },
            {
              title: "Node.js GCP File Upload API",
              desc: "Problem: backend service for handling file uploads at scale. Architecture: Node API integrated with GCP storage and IAM roles. Stack: Node.js, GCP, Docker, CI/CD pipelines, Service Accounts. Outcome: consistent deployment flow with secure, role-based access to storage resources.",
              link: "https://github.com/itsJohnDev/node-api-cloudrun",
            },
            {
              title: "Dotify (Spotify-like API)",
              desc: "Problem: simulate a music platform backend. Architecture: REST API with NoSQL data modeling for scalability. Stack: Node.js, NoSQL DB. Outcome: implemented core features like users, playlists, and content handling with scalable schema design.",
              link: "https://github.com/itsJohnDev/Dotify-API",
            },
            {
              title: "AWS Serverless e-Commerce App (Ongoing)",
              desc: "Problem: scalable multi-store backend system. Architecture: event-driven microservices using AWS serverless stack. Stack: AWS Lambda, API Gateway, DynamoDB, SQS, SNS, EventBridge, Cognito, S3, SES, CloudWatch. Outcome: modular microservices with authentication, async processing, and scalable data persistence.",
              link: "https://github.com/itsJohnDev/AWS-e-commerce",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600"
            >
              <h4 className="font-semibold">{project.title}</h4>
              <p className="text-sm text-slate-400 mt-2">{project.desc}</p>
              <a
                href={project.link}
                className="text-blue-400 text-sm mt-2 inline-block"
              >
                GitHub Link
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-800"
      >
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-slate-300 mb-4">
          Open for backend, cloud, or DevOps opportunities.
        </p>
        <div className="text-slate-400 text-sm space-y-1">
          <p>Email: johncarloaguilar.pinlac@gmail.com</p>
          <p>Phone: +63-916-638-0468 </p>
          <p>
            LinkedIn: https://www.linkedin.com/in/john-carlo-pinlac-9898693b7/
          </p>
          <p>GitHub: https://github.com/itsJohnDev</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-xs text-slate-500 py-10 border-t border-slate-800">
        Built with React + Vite + Tailwind
      </footer>
    </div>
  );
}
