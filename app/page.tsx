"use client";

import { useState } from "react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "corporate", "sports", "festivals", "conferences"];

  return (
    <div className="bg-black min-h-screen">
      {/* Background Gradients */}
      <div className="fixed inset-0 bg-gradient-radial from-blue-900/15 via-transparent to-transparent opacity-50 z-0"></div>
      <div className="fixed inset-0 bg-gradient-radial from-yellow-500/15 via-transparent to-transparent opacity-30 z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-xl border-b border-emerald-500/20 z-50 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-yellow-500 rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"></path>
              </svg>
            </div>
            <span className="text-white text-xl font-bold">AMIC Events</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#products"
                className="text-slate-300 text-sm hover:text-white transition-colors"
              >
                Products
              </a>
              <a
                href="#services"
                className="text-slate-300 text-sm hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-slate-300 text-sm hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-slate-300 text-sm hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="bg-gradient-to-r from-blue-900 to-yellow-500 text-white border-none px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity">
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-xs font-medium">
                CUSTOM APPAREL EXPERTS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900 bg-clip-text text-transparent">
              PREMIUM EVENT APPAREL
            </h1>

            <div className="border-l-3 border-emerald-500 pl-6 mb-8">
              <p className="text-xl text-slate-300 leading-relaxed">
                Transform your events with custom-designed apparel that makes
                lasting impressions. From corporate conferences to music
                festivals, we deliver quality that speaks volumes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-blue-900 to-yellow-500 text-white border-none px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium cursor-pointer hover:opacity-90 transition-opacity">
                START PROJECT
              </button>
              <button className="bg-transparent text-white border-2 border-emerald-500 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium cursor-pointer flex items-center justify-center gap-2 hover:bg-emerald-500/10 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
                <span className="hidden sm:inline">View Portfolio</span>
                <span className="sm:hidden">Portfolio</span>
              </button>
            </div>
            <div className="border-l-3 border-emerald-500 pl-4 sm:pl-6 mb-6 sm:mb-8">
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Transform your events with custom-designed apparel that makes lasting impressions.
                From corporate conferences to music festivals, we deliver quality that speaks volumes.
              </p>
            </div>
                <div className="text-2xl font-bold text-emerald-400">48hr</div>
                <div className="text-xs text-slate-400">Rush Orders</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-xs text-slate-400">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="bg-slate-900 rounded-lg p-3 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-xs ml-2">
                  Custom Design Studio
                </span>
              </div>
              <div className="relative w-full h-72 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/934083/pexels-photo-934083.jpeg"
                  alt="Custom sports event apparel showcase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -top-5 -right-5 bg-gradient-to-br from-blue-900/90 to-yellow-500/90 rounded-xl px-4 py-3 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-white text-xs font-medium">
                Quality Guaranteed
              </span>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-yellow-500/90 to-blue-900/90 rounded-xl px-4 py-3 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span className="text-white text-xs font-medium">
                Fast Turnaround
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">PRODUCT CATALOG</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Premium apparel solutions for every type of event and occasion
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm cursor-pointer capitalize transition-all ${
                  selectedCategory === category
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50"
                    : "bg-transparent text-slate-400 border border-slate-600 hover:border-emerald-500/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <ProductCard
              image="https://images.pexels.com/photos/8289384/pexels-photo-8289384.jpeg"
              title="Custom T-Shirts"
              description="Premium cotton tees with custom designs, perfect for any event"
              price="From $15"
              gradient="from-red-500 to-orange-500"
            />
            <ProductCard
              image="https://images.pexels.com/photos/3075367/pexels-photo-3075367.jpeg"
              title="Custom Hoodies"
              description="Comfortable hoodies with embroidered or printed designs"
              price="From $35"
              gradient="from-cyan-500 to-emerald-500"
            />
            <ProductCard
              image="https://images.pexels.com/photos/5739117/pexels-photo-5739117.jpeg"
              title="Accessories"
              description="Hats, bags, and promotional items to complete your brand"
              price="From $8"
              gradient="from-emerald-500 to-green-400"
            />
          </div>
        </div>
      </section>

      {/* Sports Showcase */}
      <section className="py-20 px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              SPORTS SHOWCASE
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Custom apparel solutions for sporting events and athletic teams
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ShowcaseCard
              image="https://images.pexels.com/photos/15729335/pexels-photo-15729335.jpeg"
              title="Basketball Championships"
              description="Custom jerseys, warm-up gear, and fan merchandise for tournament events"
            />
            <ShowcaseCard
              image="https://images.pexels.com/photos/15365073/pexels-photo-15365073.jpeg"
              title="Soccer Tournaments"
              description="Professional-grade uniforms and supporter apparel for soccer events"
            />
            <ShowcaseCard
              image="https://images.pexels.com/photos/2424426/pexels-photo-2424426.jpeg"
              title="Marathon Events"
              description="Performance running gear and commemorative apparel for race participants"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-8 relative z-10 bg-gradient-to-r from-teal-900/20 to-emerald-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">OUR SERVICES</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              End-to-end solutions for all your custom apparel needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <ServiceCard
              icon={<StarIcon />}
              title="Custom Design"
              description="Our expert designers work with you to create unique, eye-catching designs that perfectly represent your brand and event theme."
            />
            <ServiceCard
              icon={<CheckIcon />}
              title="Fast Production"
              description="State-of-the-art printing and embroidery equipment ensures quick turnaround times without compromising on quality."
            />
            <ServiceCard
              icon={<TruckIcon />}
              title="Event Logistics"
              description="Complete logistics support including inventory management, on-site delivery, and real-time order tracking."
            />
            <ServiceCard
              icon={<SupportIcon />}
              title="24/7 Support"
              description="Dedicated account managers and round-the-clock support ensure your event apparel needs are always met."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-emerald-500/20 py-16 px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"></path>
                </svg>
              </div>
              <span className="text-white text-xl font-bold">AMIC Events</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premium custom apparel solutions for events that demand
              excellence.
            </p>
            <div className="flex gap-3">
              <SocialButton />
              <SocialButton />
            </div>
          </div>

          <FooterSection
            title="PRODUCTS"
            links={["T-Shirts", "Hoodies", "Accessories", "Corporate Wear"]}
          />
          <FooterSection
            title="SERVICES"
            links={[
              "Custom Design",
              "Rush Orders",
              "Event Logistics",
              "Bulk Pricing",
            ]}
          />
          <FooterSection
            title="CONTACT"
            links={["Get Quote", "Support", "About Us", "Careers"]}
          />
        </div>

        <div className="text-center mt-12 pt-8 border-t border-emerald-500/20">
          <p className="text-slate-400 text-sm">
            © 2024 AMIC Events. All rights reserved. Premium custom apparel for
            © 2024 EventWear. All rights reserved. Premium custom apparel for
            exceptional events.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Component helpers
function ProductCard({
  image,
  title,
  description,
  price,
  gradient,
}: {
  image: string;
  title: string;
  description: string;
  price: string;
  gradient: string;
}) {
  return (
    <div className="bg-slate-900/50 border border-slate-600 rounded-2xl p-6 relative overflow-hidden">
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
      ></div>
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-emerald-400 text-lg font-bold">{price}</span>
        <button className="bg-transparent text-emerald-400 border border-emerald-400 px-3 py-1.5 rounded text-xs cursor-pointer hover:bg-emerald-400/10 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}

function ShowcaseCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl overflow-hidden">
      <div className="relative w-full h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{description}</p>
      </div>
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
    <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-8">
      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function FooterSection({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-white text-sm font-bold mb-4">{title}</h4>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-slate-400 text-sm hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

function SocialButton() {
  return (
    <button className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-2 cursor-pointer hover:bg-emerald-500/20 transition-colors">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="rgb(16, 185, 129)">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </button>
  );
}

// Icon components
function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path>
    </svg>
  );
}