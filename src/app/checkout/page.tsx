"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const packages = {
  "artificial-roses": {
    name: "Artificial Roses Package",
    price: 599,
    description: "An elegant option at an affordable price, adding a touch of sophistication to your room with an artificial rose bouquet",
  },
  "natural-roses": {
    name: "Natural Roses Package",
    price: 799,
    description: "Indulge in the beauty of natural roses and their fragrant aroma to create a luxurious and unforgettable romantic atmosphere",
  },
  "natural-roses-cake": {
    name: "Natural Roses + Cake Package",
    price: 999,
    description: "Enhance your experience with our luxurious package that combines the elegance of natural roses with the deliciousness of a cake",
  },
  "vip": {
    name: "VIP Package",
    price: 1299,
    description: "Make your occasion even more special and luxurious with our VIP package",
  },
};

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const packageId = searchParams.get("package") as keyof typeof packages;
  const selectedPackage = packages[packageId];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the payment processing
    console.log("Form submitted:", formData);
    alert("Thank you for your order! We will contact you shortly.");
  };

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-playfair mb-6">Package Not Found</h1>
          <p className="mb-8">The selected package could not be found.</p>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-playfair mb-6">Checkout</h1>
        
        {/* Package Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-jakarta font-semibold mb-4">Order Summary</h2>
          <div className="border-b pb-4 mb-4">
            <h3 className="font-jakarta font-semibold">{selectedPackage.name}</h3>
            <p className="text-gray-600 mt-2">{selectedPackage.description}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-jakarta">Total Amount:</span>
            <span className="text-2xl font-bold">{selectedPackage.price} Dhs</span>
          </div>
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-jakarta font-semibold mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Special Instructions
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-8">
            <Button type="submit" className="w-full">
              Complete Purchase
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 