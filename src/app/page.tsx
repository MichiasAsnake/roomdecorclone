"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Pinterest, Facebook } from "@mui/icons-material";
import MobileMenu from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold">
            HAVENLY
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">How it works</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <Button>Get Started</Button>
          </div>
          <MobileMenu />
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 px-4"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Stunning interior design services, now within reach
            </h1>
            <Button size="lg">Get Started</Button>
          </div>
          <div className="mt-12">
            <Image
              src="/hero-image.jpg"
              alt="Modern living room design"
              width={1200}
              height={600}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Match with one of our talented designers</h3>
              <p className="text-gray-600">Take our style quiz and connect with a designer who gets your style and budget</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Collaborate 1:1 with your designer</h3>
              <p className="text-gray-600">Work with your designer online and share your inspiration and feedback</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Bring your design home</h3>
              <p className="text-gray-600">Shop your design with exclusive discounts and white glove service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Decoration Packages Section */}
      <section className="py-20 px-4 bg-[#F8F7F2]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-playfair text-center mb-12">
            Decoration Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Artificial Roses Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="aspect-square relative">
                <Image
                  src="/roses2.jpg"
                  alt="Artificial Roses Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-jakarta font-semibold mb-2">Artificial Roses</h3>
                <p className="text-gray-600 mb-4">An elegant option at an affordable price, adding a touch of sophistication to your room with an artificial rose bouquet</p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>• Elegant arrangement of artificial roses on the bed</li>
                  <li>• Unique balloons with decorative ribbons</li>
                  <li>• A phrase on the wall with "the occasion type" in a beautiful style</li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">599 Dhs</span>
                </div>
                <Link href="/checkout?package=artificial-roses" className="w-full">
                  <Button className="w-full">Purchase Package</Button>
                </Link>
              </div>
            </motion.div>

            {/* Natural Roses Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="aspect-square relative">
                <Image
                  src="/roses1.jpg"
                  alt="Natural Roses Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-jakarta font-semibold mb-2">Natural Roses</h3>
                <p className="text-gray-600 mb-4">Indulge in the beauty of natural roses and their fragrant aroma to create a luxurious and unforgettable romantic atmosphere</p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>• Arrangement of natural roses on the bed and bathtub</li>
                  <li>• Unique balloons with decorative ribbons</li>
                  <li>• LED candlelight in the room</li>
                  <li>• Writing sticker on the bed sheets</li>
                  <li>• Non-Alcoholic drink</li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">799 Dhs</span>
                </div>
                <Link href="/checkout?package=natural-roses" className="w-full">
                  <Button className="w-full">Purchase Package</Button>
                </Link>
              </div>
            </motion.div>

            {/* Natural Roses + Cake Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="aspect-square relative">
                <Image
                  src="/roses3.jpg"
                  alt="Natural Roses + Cake Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-jakarta font-semibold mb-2">Natural Roses + Cake</h3>
                <p className="text-gray-600 mb-4">Enhance your experience with our luxurious package that combines the elegance of natural roses with the deliciousness of a cake</p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>• Arrangement of natural roses on the bed and bathtub</li>
                  <li>• Unique balloons with decorative ribbons</li>
                  <li>• LED candlelight in the room</li>
                  <li>• Writing sticker on the bed sheets</li>
                  <li>• Cake with custom messages</li>
                  <li>• Rose bouquet (50 roses included)</li>
                  <li>• Non-Alcoholic drink</li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">999 Dhs</span>
                </div>
                <Link href="/checkout?package=natural-roses-cake" className="w-full">
                  <Button className="w-full">Purchase Package</Button>
                </Link>
              </div>
            </motion.div>

            {/* VIP Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="aspect-square relative">
                <Image
                  src="/roses4.jpg"
                  alt="VIP Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-jakarta font-semibold mb-2">VIP Package</h3>
                <p className="text-gray-600 mb-4">Make your occasion even more special and luxurious with our VIP package</p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>• Arrangement of natural roses on the bed and bathtub</li>
                  <li>• Helium balloons with decorative ribbons</li>
                  <li>• LED candlelight in the room</li>
                  <li>• Writing sticker on the bed sheets</li>
                  <li>• Cake with custom messages</li>
                  <li>• Rose bouquet (50 roses included)</li>
                  <li>• Surprise gift box</li>
                  <li>• Non-Alcoholic drink</li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">1299 Dhs</span>
                </div>
                <Link href="/checkout?package=vip" className="w-full">
                  <Button className="w-full">Purchase Package</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Explore real client before & afters.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square"
            >
              <Image
                src="/portfolio-1.jpg"
                alt="Modern living room transformation"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square"
            >
              <Image
                src="/portfolio-2.jpg"
                alt="Contemporary bedroom design"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative aspect-square"
            >
              <Image
                src="/portfolio-3.jpg"
                alt="Minimalist kitchen redesign"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold mb-12">What our clients say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600 mb-4">
                    "Working with Havenly was an absolute dream. They transformed my space into something I never thought possible!"
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/testimonial-1.jpg"
                        alt="Client"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Andrea Montgomery</p>
                      <p className="text-sm text-gray-500">New York, NY</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600 mb-4">
                    "The designer really understood my style and helped me create a space that feels uniquely mine."
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/testimonial-2.jpg"
                        alt="Client"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">HAVENLY</h3>
              <p className="text-gray-400">Making beautiful design accessible to everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link href="/press" className="text-gray-400 hover:text-white">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Pinterest />
                  <span className="sr-only">Pinterest</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
