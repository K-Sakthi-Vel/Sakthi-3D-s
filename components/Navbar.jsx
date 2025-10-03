"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-4xl font-bold text-orange-600">
            <img src="/assets/logo.png" alt="Sakthi 3D's" className="h-20 inline-block mr-2"/>
            Sakthi 3D's
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link
              href="#shop"
              className="hover:text-blue-600 transition-colors"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#show"
              className="hover:text-blue-600 transition-colors"
            >
              Show
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col space-y-2 py-3 px-4 text-gray-700 font-medium">
            <li>
              <Link
                href="#shop"
                className="block hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#show"
                className="block hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
