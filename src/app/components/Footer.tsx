export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
