import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          This will be the highlight of my portfolio website, showcasing my best works and artistic journey. Explore my gallery to see a curated selection of my recent creations, each piece reflecting my passion and growth as an artist.
        </p>
        <a
          href="#gallery"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          View Gallery
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
