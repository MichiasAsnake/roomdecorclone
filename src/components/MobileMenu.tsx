"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, Close } from '@mui/icons-material';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900"
        aria-label="Toggle menu"
      >
        {isOpen ? <Close /> : <Menu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6"
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/how-it-works"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                How it works
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 