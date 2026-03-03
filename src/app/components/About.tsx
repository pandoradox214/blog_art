export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl text-center mb-12 text-gray-900">
          About the Artist
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Hello! I'm a passionate artist exploring the intersection of
            traditional and contemporary art forms. My work spans various
            mediums including painting, digital art, mixed media, and
            photography.
          </p>
          <p className="text-gray-700 mb-6">
            With over a decade of experience, I've developed a unique style that
            blends abstract expressionism with modern minimalism. Each piece
            tells a story, inviting viewers to find their own meaning and
            connection.
          </p>
          <p className="text-gray-700">
            My work has been featured in several galleries and private
            collections. I'm constantly experimenting with new techniques and
            materials to push the boundaries of visual expression.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2 text-gray-900">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl mb-2 text-gray-900">50+</div>
            <div className="text-gray-600">Artworks Created</div>
          </div>
          <div>
            <div className="text-4xl mb-2 text-gray-900">15+</div>
            <div className="text-gray-600">Exhibitions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
