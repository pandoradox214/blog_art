import { useState } from "react";
import { X } from "lucide-react";

interface Artwork {
  id: number;
  title: string;
  medium: string;
  year: string;
  imageUrl: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Abstract Expressions",
    medium: "Acrylic on Canvas",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1748285279107-13e8799eab76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwYXJ0d29ya3xlbnwxfHx8fDE3NzI0NjUzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Digital Dreams",
    medium: "Digital Art",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1767473408016-6c7c9f3d0473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwYXJ0fGVufDF8fHx8MTc3MjUzNTcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "Watercolor Wonderland",
    medium: "Watercolor",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1705599773422-c1066356f801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzcyNDM1OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "Sculptural Forms",
    medium: "Mixed Media",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1767478253343-0253c6367041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBzY3VscHR1cmV8ZW58MXx8fHwxNzcyNTQ5MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    title: "Minimalist Harmony",
    medium: "Acrylic on Canvas",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1761156254622-7b66649b1f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJ0JTIwZGVzaWdufGVufDF8fHx8MTc3MjQ2NTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    title: "Vibrant Energy",
    medium: "Oil on Canvas",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1618913001611-2054733f4aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFydHdvcmslMjBjYW52YXN8ZW58MXx8fHwxNzcyNTQ5MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    title: "Portrait Study",
    medium: "Photography",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1665076034878-1bf3eb03a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwYXJ0JTIwcGhvdG9ncmFwaHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI1MzM3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 8,
    title: "Landscape Vista",
    medium: "Oil on Canvas",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1694636941182-9e9fd8b3edb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzI0ODkxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 9,
    title: "Collage Composition",
    medium: "Mixed Media",
    year: "2023",
    imageUrl: "https://images.unsplash.com/photo-1697559009030-9c80ed149478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG1lZGlhJTIwY29sbGFnZXxlbnwxfHx8fDE3NzI0ODIxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-gray-900">
          My Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A curated selection of my recent works. Click on any piece to view it
          in detail.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              onClick={() => setSelectedArtwork(artwork)}
              className="group cursor-pointer overflow-hidden rounded-lg bg-gray-100 aspect-square relative"
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl mb-1">{artwork.title}</h3>
                  <p className="text-sm text-gray-200">
                    {artwork.medium} · {artwork.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <button
            onClick={() => setSelectedArtwork(null)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedArtwork.imageUrl}
              alt={selectedArtwork.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl sm:text-3xl mb-2">
                {selectedArtwork.title}
              </h3>
              <p className="text-gray-300">
                {selectedArtwork.medium} · {selectedArtwork.year}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
