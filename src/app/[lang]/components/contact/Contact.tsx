"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Locale } from "../../../../../i18n.config";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContactPage = ({ lang, page }: { lang: Locale; page: any }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-decoration",
          {
            opacity: 0,
            scale: 0.8,
            rotation: -180,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );

      // Contact form animations
      gsap.from(".contact-form-title", {
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".form-group", {
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Contact info animations
      gsap.from(".contact-info-title", {
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".contact-info-item", {
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Map section animations
      gsap.from(".map-container", {
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
      });

      // Floating animation for decorative elements
      gsap.to(".floating-decoration", {
        y: "+=20",
        rotation: "+=5",
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Continuous rotation for spin elements
      gsap.to(".spin-decoration", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }, heroRef.current ?? undefined);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex flex-col bg-[#0A2A1A] relative overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative z-10 h-[60vh] max-h-[500px] min-h-[400px]">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A2A1A] opacity-80 z-10"></div>
          <Image
            src="/images/Full Header Screen 2.png"
            alt="Contact Us"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />

          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 z-20 hero-decoration">
            <Image
              src="/images/Balls Pattern.png"
              alt="Decoration"
              width={120}
              height={120}
              className="floating-decoration"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto h-full px-4 flex items-center justify-center relative z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 hero-title">
              {page.hero?.title || "CONTACT US"}
            </h1>
            <p className="text-white text-lg font-light hero-subtitle">
              {page.hero?.subtitle ||
                "Get in touch with us for any inquiries about the championship"}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 relative z-10">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-0 w-[100px] h-[100px] opacity-10 spin-decoration">
          <Image
            src="/images/Balls Pattern 2.png"
            alt=""
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              ref={contactFormRef}
              className="bg-[#0D3520] border border-[#1C3C2C] rounded-lg p-8"
            >
              <h2 className="text-white text-3xl font-bold mb-6 contact-form-title">
                {page.form?.title || "Send us a Message"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    {page.form?.fields?.name || "Full Name"} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A2A1A] border border-[#1C3C2C] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#BF9447] transition-colors duration-300"
                    placeholder={
                      page.form?.placeholders?.name || "Enter your full name"
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      {page.form?.fields?.email || "Email Address"} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0A2A1A] border border-[#1C3C2C] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#BF9447] transition-colors duration-300"
                      placeholder={
                        page.form?.placeholders?.email ||
                        "your.email@example.com"
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="phone"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      {page.form?.fields?.phone || "Phone Number"}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0A2A1A] border border-[#1C3C2C] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#BF9447] transition-colors duration-300"
                      placeholder={
                        page.form?.placeholders?.phone || "+966 XX XXX XXXX"
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="subject"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    {page.form?.fields?.subject || "Subject"} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A2A1A] border border-[#1C3C2C] rounded-lg text-white focus:outline-none focus:border-[#BF9447] transition-colors duration-300"
                  >
                    <option value="">
                      {page.form?.placeholders?.subject || "Select a subject"}
                    </option>
                    <option value="general">
                      {page.form?.subjects?.general || "General Inquiry"}
                    </option>
                    <option value="registration">
                      {page.form?.subjects?.registration || "Registration"}
                    </option>
                    <option value="media">
                      {page.form?.subjects?.media || "Media & Press"}
                    </option>
                    <option value="sponsorship">
                      {page.form?.subjects?.sponsorship || "Sponsorship"}
                    </option>
                    <option value="technical">
                      {page.form?.subjects?.technical || "Technical Support"}
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    {page.form?.fields?.message || "Message"} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0A2A1A] border border-[#1C3C2C] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#BF9447] transition-colors duration-300 resize-vertical"
                    placeholder={
                      page.form?.placeholders?.message ||
                      "Tell us how we can help you..."
                    }
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#BF9447] hover:bg-[#A37E3B] disabled:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {page.form?.buttons?.sending || "Sending..."}
                      </>
                    ) : (
                      page.form?.buttons?.send || "Send Message"
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div className="mt-4 p-4 bg-green-600/20 border border-green-600/50 rounded-lg">
                      <p className="text-green-400 text-sm">
                        {page.form?.messages?.success ||
                          "Message sent successfully! We'll get back to you soon."}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={contactInfoRef} className="space-y-8">
              <div>
                <h2 className="text-white text-3xl font-bold mb-6 contact-info-title">
                  {page.info?.title || "Get in Touch"}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed contact-info-item">
                  {page.info?.description ||
                    "We're here to help with any questions about the World Pool Championship. Reach out to us through any of the following channels."}
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse contact-info-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#BF9447] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {page.info?.address?.title || "Address"}
                    </h3>
                    <p className="text-gray-300">
                      {page.info?.address?.line1 ||
                        "King Abdulaziz Sports City"}
                    </p>
                    <p className="text-gray-300">
                      {page.info?.address?.line2 || "Jeddah, Saudi Arabia"}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse contact-info-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#BF9447] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {page.info?.phone?.title || "Phone"}
                    </h3>
                    <p className="text-gray-300">
                      {page.info?.phone?.number || "+966 12 XXX XXXX"}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse contact-info-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#BF9447] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {page.info?.email?.title || "Email"}
                    </h3>
                    <p className="text-gray-300">
                      {page.info?.email?.address ||
                        "info@worldpoolchampionship.com"}
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse contact-info-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#BF9447] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {page.info?.social?.title || "Follow Us"}
                    </h3>
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <a
                        href="#"
                        className="text-gray-300 hover:text-[#BF9447] transition-colors duration-300"
                      >
                        X
                      </a>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-[#BF9447] transition-colors duration-300"
                      >
                        Instagram
                      </a>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-[#BF9447] transition-colors duration-300"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-3xl font-bold mb-8 text-center">
            {page.map?.title || "Find Us"}
          </h2>

          <div className="map-container bg-[#0D3520] border border-[#1C3C2C] rounded-lg overflow-hidden">
            {/* Placeholder for map - Replace with actual map integration */}
            <div className="relative h-[400px] bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#BF9447] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {page.map?.location || "King Abdulaziz Sports City"}
                </h3>
                <p className="text-gray-300">
                  {page.map?.address || "Jeddah, Saudi Arabia"}
                </p>
                <button className="mt-4 bg-[#BF9447] hover:bg-[#A37E3B] text-white px-6 py-2 rounded-lg transition-colors duration-300">
                  {page.map?.directions || "Get Directions"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer can be added here similar to the home page */}
    </div>
  );
};

export default ContactPage;
