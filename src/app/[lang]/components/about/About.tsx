"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Locale } from "../../../../../i18n.config";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AboutPage = ({ lang, page }: { lang: Locale; page: any }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const venueRef = useRef<HTMLDivElement>(null);
  const rulesRef = useRef<HTMLDivElement>(null);
  const prizesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    {
      date: "June 3, 2024",
      title: "Opening Ceremony",
      description: "Grand opening with international players introduction",
    },
    {
      date: "June 4-5, 2024",
      title: "Qualifying Rounds",
      description: "Initial rounds to determine top competitors",
    },
    {
      date: "June 6-7, 2024",
      title: "Semi-Finals",
      description: "Intense matches leading to the championship finals",
    },
    {
      date: "June 8, 2024",
      title: "Grand Finals",
      description: "Crown the World Pool Champion with closing ceremony",
    },
  ];

  const championshipRules = [
    {
      title: "Game Format",
      description:
        "9-Ball and 8-Ball tournaments with international standard rules",
    },
    {
      title: "Equipment Standards",
      description:
        "Official WPA approved tables, cues, and balls for all matches",
    },
    {
      title: "Match Duration",
      description:
        "Best of 9 frames for preliminary rounds, best of 11 for finals",
    },
    {
      title: "Player Conduct",
      description: "Strict adherence to professional conduct and sportsmanship",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const heroTl = gsap.timeline();

      heroTl
        .from(".about-hero-title", {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          ".about-hero-subtitle",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".about-hero-decoration",
          {
            opacity: 0,
            scale: 0.8,
            rotation: -180,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );

      // History section animations
      gsap.from(".history-title", {
        scrollTrigger: {
          trigger: historyRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".history-content", {
        scrollTrigger: {
          trigger: historyRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(".history-image", {
        scrollTrigger: {
          trigger: historyRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out",
      });

      // Vision section animations
      gsap.from(".vision-title", {
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".vision-card", {
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Venue section animations
      gsap.from(".venue-title", {
        scrollTrigger: {
          trigger: venueRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".venue-content", {
        scrollTrigger: {
          trigger: venueRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".venue-image", {
        scrollTrigger: {
          trigger: venueRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power2.out",
      });

      // Rules section animations
      gsap.from(".rules-title", {
        scrollTrigger: {
          trigger: rulesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".rule-card", {
        scrollTrigger: {
          trigger: rulesRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Timeline section animations
      gsap.from(".timeline-title", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -50 : 50),
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Prizes section animations
      gsap.from(".prizes-title", {
        scrollTrigger: {
          trigger: prizesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".prize-card", {
        scrollTrigger: {
          trigger: prizesRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      // Footer animations
      gsap.from(".footer-skyline", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".footer-copyright", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      // Floating animations for decorative elements
      gsap.to(".floating-decoration", {
        y: "+=20",
        rotation: "+=5",
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".spin-decoration", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".gentle-float", {
        y: "+=15",
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Hover animations for interactive elements
      gsap.utils.toArray(".hover-scale").forEach((element) => {
        const el = element as HTMLElement;
        el.addEventListener("mouseenter", () => {
          gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
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
      <section className="relative z-10 h-[60vh] min-h-[400px] flex items-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A2A1A] opacity-60 z-10"></div>
          <Image
            src="/images/Full Header Screen 2.png"
            alt="About Pool Championship"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 z-20 about-hero-decoration">
          <Image
            src="/images/Balls Pattern.png"
            alt="Decoration"
            width={100}
            height={100}
            className="floating-decoration"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 about-hero-title">
              {page.about?.heroTitle || "ABOUT THE"}
              <span className="block text-[#BF9447]">
                {page.about?.heroSubtitle || "CHAMPIONSHIP"}
              </span>
            </h1>
            <p className="text-white text-xl font-light leading-relaxed about-hero-subtitle">
              {page.about?.heroDescription ||
                "Discover the legacy, vision, and excitement behind the World Pool Championship 2024"}
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section ref={historyRef} className="py-20 relative z-10">
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20 spin-decoration">
          <Image
            src="/images/Balls Pattern 2.png"
            alt=""
            width={128}
            height={128}
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="history-content">
              <h2 className="text-4xl md:text-5xl font-bold text-[#BF9447] mb-6 history-title">
                {page.about?.historyTitle || "OUR HISTORY"}
              </h2>
              <div className="space-y-6 text-white text-lg leading-relaxed">
                <p>
                  {page.about?.historyP1 ||
                    "The World Pool Championship has been the pinnacle of professional pool competition for over three decades. What began as a small gathering of enthusiasts has evolved into the most prestigious billiards tournament in the world."}
                </p>
                <p>
                  {page.about?.historyP2 ||
                    "Our championship has witnessed legendary matches, crowned iconic champions, and set the standard for excellence in cue sports. Each year, we bring together the finest players from around the globe to compete for the ultimate prize."}
                </p>
                <p>
                  {page.about?.historyP3 ||
                    "The 2024 edition marks a new chapter as we host this spectacular event in the beautiful city of Jeddah, Saudi Arabia, combining traditional excellence with modern hospitality."}
                </p>
              </div>
            </div>
            <div className="relative h-[400px] history-image">
              <div className="absolute inset-0 gentle-float">
                <Image
                  src="/images/58878.png"
                  alt="Pool History"
                  width={500}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section ref={visionRef} className="py-20 relative z-10 bg-[#0D3520]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 vision-title">
            {page.about?.visionTitle || "VISION & MISSION"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-[#0A2A1A] border border-[#1C3C2C] rounded-lg p-8 text-center hover-scale vision-card">
              <div className="w-16 h-16 bg-[#BF9447] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-[#BF9447] text-2xl font-bold mb-4">
                {page.about?.visionCardTitle || "VISION"}
              </h3>
              <p className="text-white leading-relaxed">
                {page.about?.visionCardText ||
                  "To be the world's premier pool championship, inspiring excellence and sportsmanship in cue sports globally."}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#0A2A1A] border border-[#1C3C2C] rounded-lg p-8 text-center hover-scale vision-card">
              <div className="w-16 h-16 bg-[#BF9447] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-[#BF9447] text-2xl font-bold mb-4">
                {page.about?.missionCardTitle || "MISSION"}
              </h3>
              <p className="text-white leading-relaxed">
                {page.about?.missionCardText ||
                  "To provide a world-class platform for elite pool players to showcase their skills and compete at the highest level."}
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-[#0A2A1A] border border-[#1C3C2C] rounded-lg p-8 text-center hover-scale vision-card">
              <div className="w-16 h-16 bg-[#BF9447] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[#BF9447] text-2xl font-bold mb-4">
                {page.about?.valuesCardTitle || "VALUES"}
              </h3>
              <p className="text-white leading-relaxed">
                {page.about?.valuesCardText ||
                  "Excellence, integrity, respect, and passion drive everything we do in organizing this championship."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section ref={venueRef} className="py-20 relative z-10">
        <div className="absolute bottom-10 right-10 z-0 opacity-10 floating-decoration">
          <Image
            src="/images/Balls Pattern.png"
            alt=""
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="venue-image order-2 lg:order-1">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/Mask group-4.png"
                  alt="Championship Venue"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
            <div className="venue-content order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#BF9447] mb-6 venue-title">
                {page.about?.venueTitle || "THE VENUE"}
              </h2>
              <div className="space-y-6 text-white text-lg leading-relaxed">
                <p>
                  {page.about?.venueP1 ||
                    "Located in the heart of Jeddah, our championship venue combines state-of-the-art facilities with the warm hospitality that Saudi Arabia is known for."}
                </p>
                <p>
                  {page.about?.venueP2 ||
                    "The venue features multiple professional-grade pool tables, spectator seating for over 1,000 fans, and modern amenities to ensure the best experience for players and audience alike."}
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="w-12 h-12 bg-[#BF9447] rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#BF9447] font-bold">
                      Jeddah, Saudi Arabia
                    </p>
                    <p className="text-gray-300">June 3-8, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Championship Rules Section */}
      <section ref={rulesRef} className="py-20 relative z-10 bg-[#0D3520]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 rules-title">
            {page.about?.rulesTitle || "CHAMPIONSHIP RULES"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {championshipRules.map((rule, index) => (
              <div
                key={index}
                className="bg-[#0A2A1A] border border-[#1C3C2C] rounded-lg p-6 hover-scale rule-card"
              >
                <h3 className="text-[#BF9447] text-xl font-bold mb-4">
                  {rule.title}
                </h3>
                <p className="text-white leading-relaxed">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Timeline */}
      <section ref={timelineRef} className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#BF9447] text-center mb-16 timeline-title">
            {page.about?.timelineTitle || "TOURNAMENT TIMELINE"}
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#BF9447] hidden md:block"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`timeline-item flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-5/12">
                    <div
                      className={`bg-[#0D3520] border border-[#1C3C2C] rounded-lg p-6 hover-scale ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="text-[#BF9447] font-bold text-lg mb-2">
                        {event.date}
                      </div>
                      <h3 className="text-white text-xl font-bold mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-[#BF9447] rounded-full border-4 border-[#0A2A1A]"></div>
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section ref={prizesRef} className="py-20 relative z-10 bg-[#0D3520]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 prizes-title">
            {page.about?.prizesTitle || "PRIZE POOL"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Place */}
            <div className="bg-gradient-to-b from-[#BF9447] to-[#A37E3B] rounded-lg p-8 text-center hover-scale prize-card">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">1st Place</h3>
              <p className="text-white text-4xl font-bold mb-2">$100,000</p>
              <p className="text-white/80">Champion Trophy & Title</p>
            </div>

            {/* Second Place */}
            <div className="bg-gradient-to-b from-[#C0C0C0] to-[#A8A8A8] rounded-lg p-8 text-center hover-scale prize-card">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🥈</span>
              </div>
              <h3 className="text-[#0A2A1A] text-2xl font-bold mb-4">
                2nd Place
              </h3>
              <p className="text-[#0A2A1A] text-4xl font-bold mb-2">$50,000</p>
              <p className="text-[#0A2A1A]/80">Runner-up Trophy</p>
            </div>

            {/* Third Place */}
            <div className="bg-gradient-to-b from-[#CD7F32] to-[#B8692C] rounded-lg p-8 text-center hover-scale prize-card">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🥉</span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">3rd Place</h3>
              <p className="text-white text-4xl font-bold mb-2">$25,000</p>
              <p className="text-white/80">Bronze Medal</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-white text-lg">
              {page.about?.totalPrize || "Total Prize Pool: $300,000"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
