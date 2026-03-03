import { Mail, Instagram, Twitter, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900">Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Interested in collaborating or purchasing artwork? I'd love to hear
          from you.
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:your.email@example.com"
            className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Email"
          >
            <Mail size={24} className="text-gray-700" />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} className="text-gray-700" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={24} className="text-gray-700" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} className="text-gray-700" />
          </a>
        </div>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}
