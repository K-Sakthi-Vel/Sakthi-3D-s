export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Sakthi 3D's. All rights reserved.
        </p>
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
