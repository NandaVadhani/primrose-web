"use client";

import {
  Gift,
  PartyPopper,
  CalendarDays,
  Mic2,
  Users2,
  Flower,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-pink-100 via-indigo-100 to-blue-100 py-24 text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-serif font-bold text-indigo-700 mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg text-gray-700"
        >
          We offer complete planning and coordination for all your memorable events.
        </motion.p>
      </motion.section>

      {/* Services List */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center py-20 bg-indigo-600 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Have Something Else in Mind?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          We love unique ideas! Reach out to us with your vision, and we’ll help make it real.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </motion.section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Primrose Events. All rights reserved.
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

const services = [
  {
    icon: <Gift className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Weddings",
    description:
      "From proposals to receptions, we design unforgettable wedding experiences that reflect your story.",
  },
  {
    icon: <PartyPopper className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Birthday Parties",
    description:
      "Celebrate birthdays with custom themes, decorations, entertainment, and cake magic!",
  },
  {
    icon: <CalendarDays className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Corporate Events",
    description:
      "Conferences, product launches, and team-building retreats planned to perfection.",
  },
  {
    icon: <Mic2 className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Live Shows & Performances",
    description:
      "End-to-end management of stage shows, concerts, and cultural events.",
  },
  {
    icon: <Users2 className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Private Gatherings",
    description:
      "Plan your intimate celebrations, reunions, and house parties with elegance and ease.",
  },
  {
    icon: <Flower className="w-10 h-10 text-indigo-600 mx-auto mb-4" />,
    title: "Themed Decor & Styling",
    description:
      "Custom floral, lighting, and decor designs tailored to your mood board and budget.",
  },
];
