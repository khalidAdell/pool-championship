"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Locale } from "../../../../../i18n.config";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomePage = ({ lang, page }: { lang: Locale; page: any }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const skillSectionRef = useRef<HTMLDivElement>(null);
  const matchesRef = useRef<HTMLDivElement>(null);
  const playersRef = useRef<HTMLDivElement>(null);
  const participantsRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const organizersRef = useRef<HTMLDivElement>(null);

  const participants = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Lead Developer",
      company: "Tech Innovations",
      initials: "AJ",
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "UX Designer",
      company: "Creative Minds",
      initials: "MG",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Data Scientist",
      company: "Quantum Analytics",
      initials: "DC",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Product Manager",
      company: "Future Labs",
      initials: "SW",
    },
    {
      id: 5,
      name: "James Wilson",
      role: "DevOps Engineer",
      company: "Cloud Solutions",
      initials: "JW",
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "AI Researcher",
      company: "Neural Networks Inc",
      initials: "ED",
    },
    {
      id: 7,
      name: "Michael Brown",
      role: "Frontend Architect",
      company: "WebCraft Studios",
      initials: "MB",
    },
    {
      id: 8,
      name: "Olivia Taylor",
      role: "Security Specialist",
      company: "CyberShield",
      initials: "OT",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const tl = gsap.timeline();

      tl.from(".hero-subtitle", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-details",
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

      // Skill section animations with ScrollTrigger
      gsap.from(".skill-title", {
        scrollTrigger: {
          trigger: skillSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".skill-subtitle", {
        scrollTrigger: {
          trigger: skillSectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".skill-player", {
        scrollTrigger: {
          trigger: skillSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".skill-flag", {
        scrollTrigger: {
          trigger: skillSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power2.out",
      });

      // Matches section animations
      gsap.from(".matches-title", {
        scrollTrigger: {
          trigger: matchesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".live-title", {
        scrollTrigger: {
          trigger: matchesRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".match-card", {
        scrollTrigger: {
          trigger: matchesRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      gsap.from(".upcoming-title", {
        scrollTrigger: {
          trigger: ".upcoming-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".upcoming-card", {
        scrollTrigger: {
          trigger: ".upcoming-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Players section animations
      gsap.from(".players-header", {
        scrollTrigger: {
          trigger: playersRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".player-card", {
        scrollTrigger: {
          trigger: playersRef.current,
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

      // News section animations
      gsap.from(".news-header", {
        scrollTrigger: {
          trigger: newsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".main-news-card", {
        scrollTrigger: {
          trigger: newsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".video-news-card", {
        scrollTrigger: {
          trigger: newsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Participants section animations
      gsap.from(".participants-title", {
        scrollTrigger: {
          trigger: participantsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".participant-card", {
        scrollTrigger: {
          trigger: participantsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });

      // About section animations
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-description", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(".about-button", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(".about-images", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 100,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Gallery section animations
      gsap.from(".gallery-title", {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".gallery-image", {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.8,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      // Organizers section animations
      gsap.from(".organizers-title", {
        scrollTrigger: {
          trigger: organizersRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".organizers-divider", {
        scrollTrigger: {
          trigger: organizersRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".organizers-image", {
        scrollTrigger: {
          trigger: organizersRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
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

      // Gentle floating for about images
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
      <section className={`relative z-10 h-[100vh]`}>
        {/* Hero Background Image */}
        <div className={`absolute inset-0 z-0 rtl:rotate-180 rtl:scale-y-[-1]`}>
          <div className="absolute inset-0 bg-[#0A2A1A] lg:hidden opacity-80 z-0"></div>
          <Image
            src="/images/Full Header Screen 2.png"
            alt="Pool Championship"
            width={1920}
            height={1080}
            className="w-full lg:object-contain object-cover lg:h-auto h-[100dvh] min-h-[100dvh]"
            priority
          />

          {/* Triangular decoration */}
          <div className={`absolute bottom-0 right-0 z-10`}>
            <Image
              src="/images/Balls Pattern.png"
              alt="Decoration"
              width={150}
              height={150}
              className=""
            />
          </div>
        </div>

        {/* Hero Content */}
        <div
          ref={heroContentRef}
          className={`container mx-auto h-full px-4 flex items-center justify-end z-10`}
        >
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-2">
            <div className={`mb-6`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl leading-relaxed">
                <span
                  className={`text-white block font-light tracking-wide hero-subtitle`}
                >
                  {page.hero?.subtitle || "Experience The Best"}
                </span>
                <span
                  className={`text-[#BF9447] text-5xl md:text-6xl block font-bold tracking-wide leading-tight mt-2 hero-title`}
                >
                  {page.hero?.title || "POOL GAME EVER."}
                </span>
              </h1>
            </div>

            <p
              className={`text-white text-lg font-light tracking-wide hero-details`}
            >
              {page.hero?.location || "Taking Place in Jeddah, Saudi Arabia"}
              <br />
              {page.hero?.date || "3 - 8 June 2024"}
            </p>
          </div>
        </div>
      </section>

      {/* A Game of Skill and Speed Section */}
      <section ref={skillSectionRef} className="relative pb-0 z-10 md:mt-40">
        {/* Triangular decoration */}
        <div className={`absolute bottom-0 left-0 z-10`}>
          <Image
            src="/images/Balls Pattern 2.png"
            alt="Decoration"
            width={150}
            height={150}
            className=""
          />
        </div>

        {/* Saudi flag in background with primary color overlay */}
        <div
          className={`absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-[80%] h-[80%] opacity-30 skill-flag`}
        >
          <Image
            src="/images/Saudi Flag.png"
            alt="Saudi Flag"
            width={800}
            height={800}
            className="object-contain rtl:transform rtl:scale-x-[-1]"
          />
        </div>

        <div className="relative z-20">
          <div className="flex flex-col md:flex-row items-center">
            <div
              className={`w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8 rtl:pr-0 rtl:md:pr-0 rtl:pl-0 rtl:md:pl-8 leading-16`}
            >
              <div className="p-6 rounded-xl max-w-lg">
                <h2
                  className={`text-[#BF9447] text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-wide uppercase skill-title`}
                >
                  {page.skillSection?.title || "A GAME OF SKILL AND SPEED"}
                </h2>
                <p
                  className={`text-white text-base font-medium leading-relaxed tracking-wide uppercase skill-subtitle`}
                >
                  {page.skillSection?.subtitle ||
                    "GET YOUR CHANCE TO WATCH THESE TALENTED PLAYERS."}
                </p>
              </div>
            </div>
            {/* Player image */}
            <div className={`skill-player w-full md:w-1/2 flex justify-end`}>
              <Image
                src="/images/Mask Group 10.png"
                alt="Pool Player"
                width={800}
                height={800}
                className="object-contain rtl:transform rtl:scale-x-[-1]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Matches Section */}
      <section ref={matchesRef} className="relative py-16 z-10">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute bottom-[20%] left-0 rtl:left-auto rtl:right-0 w-[150px] h-[150px] opacity-10 spin-decoration">
            <Image
              src="/images/Balls Pattern 2.png"
              alt=""
              width={150}
              height={150}
              className="object-contain rtl:transform rtl:scale-x-[-1]"
            />
          </div>
        </div>

        <h2 className="text-4xl font-semibold text-center mb-8 text-white matches-title">
          {page.matches?.matches || "Matches"}
        </h2>

        <div className="container mx-auto px-4 relative">
          <h3
            className={`text-white text-3xl font-bold mb-8 ml-4 rtl:ml-0 rtl:mr-4 live-title`}
          >
            {page.matches?.live || "Live"}
          </h3>

          <div className="relative mb-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".match-swiper-button-next",
                prevEl: ".match-swiper-button-prev",
              }}
              breakpoints={{
                800: {
                  slidesPerView: 2,
                },
              }}
            >
              {/* Live Match Card 1 */}
              <SwiperSlide className="match-card">
                <div
                  className={`bg-white rounded-xl md:p-6 p-4 m-2 shadow-lg transition-transform hover:scale-[1.02]`}
                >
                  <div className="flex justify-between items-center">
                    {/* Player 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                        <Image
                          src="/images/Player Photo.png"
                          alt="Player 1"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[#0A2A1A] font-bold text-lg">
                        {page.matches?.playerName || "Player Name"}
                      </span>
                    </div>

                    {/* VS and Live indicator */}
                    <div className="flex flex-col items-center">
                      <div className="px-4 py-2 rounded-xl bg-[#BF9447] flex items-center justify-center mb-3">
                        <span className="text-white font-bold text-sm">VS</span>
                      </div>
                      <span className="bg-red-700 text-white px-6 py-2 rounded-full text-xs font-semibold">
                        {page.matches?.live || "Live"}
                      </span>
                    </div>

                    {/* Player 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                        <Image
                          src="/images/Player 2 Photo.png"
                          alt="Player 2"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[#0A2A1A] font-bold text-lg">
                        {page.matches?.playerName || "Player Name"}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Live Match Card 2 */}
              <SwiperSlide className="match-card">
                <div
                  className={`bg-white rounded-xl md:p-6 p-4 m-2 shadow-lg transition-transform hover:scale-[1.02]`}
                >
                  <div className="flex justify-between items-center">
                    {/* Player 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                        <Image
                          src="/images/Player Photo.png"
                          alt="Player 1"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[#0A2A1A] font-bold text-lg">
                        {page.matches?.playerName || "Player Name"}
                      </span>
                    </div>

                    {/* VS and Live indicator */}
                    <div className="flex flex-col items-center">
                      <div className="px-4 py-2 rounded-xl bg-[#BF9447] flex items-center justify-center mb-3">
                        <span className="text-white font-bold text-sm">VS</span>
                      </div>
                      <span className="bg-red-700 text-white px-6 py-2 rounded-full text-xs font-semibold">
                        {page.matches?.live || "Live"}
                      </span>
                    </div>

                    {/* Player 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                        <Image
                          src="/images/Player 2 Photo.png"
                          alt="Player 2"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[#0A2A1A] font-bold text-lg">
                        {page.matches?.playerName || "Player Name"}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Navigation Arrows */}
            <button className="match-swiper-button-prev disabled:hidden absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button className="match-swiper-button-next disabled:hidden absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="upcoming-section">
            <h3
              className={`text-white text-3xl font-bold mb-8 ml-4 rtl:ml-0 rtl:mr-4 upcoming-title`}
            >
              {page.matches?.upcoming || "Upcoming"}
            </h3>

            <div className="relative mb-10">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".upcoming-swiper-button-next",
                  prevEl: ".upcoming-swiper-button-prev",
                }}
                breakpoints={{
                  800: {
                    slidesPerView: 2,
                  },
                }}
              >
                {/* Upcoming Match Card 1 */}
                <SwiperSlide className="upcoming-card">
                  <div
                    className={`bg-[#0D3520] border border-[#1C3C2C] rounded-xl md:p-6 p-4 m-2 shadow-lg transition-transform hover:scale-[1.02]`}
                  >
                    <div className="flex justify-between items-center">
                      {/* Player 1 */}
                      <div className="flex flex-col items-center">
                        <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                          <Image
                            src="/images/Player Photo.png"
                            alt="Player 1"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-white font-bold md:text-lg">
                          {page.matches?.playerName || "Player Name"}
                        </span>
                      </div>

                      {/* VS and Time indicator */}
                      <div className="flex flex-col items-center">
                        <div className="px-4 py-2 rounded-xl bg-[#BF9447] flex items-center justify-center mb-3">
                          <span className="text-white font-bold text-sm">
                            VS
                          </span>
                        </div>
                        <span className="bg-gray-200/20 text-white px-4 py-2 rounded-full text-xs font-medium">
                          7:00 PM
                        </span>
                      </div>

                      {/* Player 2 */}
                      <div className="flex flex-col items-center">
                        <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                          <Image
                            src="/images/Player 2 Photo.png"
                            alt="Player 2"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-white font-bold md:text-lg">
                          {page.matches?.playerName || "Player Name"}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Upcoming Match Card 2 */}
                <SwiperSlide className="upcoming-card">
                  <div
                    className={`bg-[#0D3520] border border-[#1C3C2C] rounded-xl md:p-6 p-4 m-2 shadow-lg transition-transform hover:scale-[1.02]`}
                  >
                    <div className="flex justify-between items-center">
                      {/* Player 1 */}
                      <div className="flex flex-col items-center">
                        <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                          <Image
                            src="/images/Player Photo.png"
                            alt="Player 1"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-white font-bold md:text-lg">
                          {page.matches?.playerName || "Player Name"}
                        </span>
                      </div>

                      {/* VS and Time indicator */}
                      <div className="flex flex-col items-center">
                        <div className="px-4 py-2 rounded-xl bg-[#BF9447] flex items-center justify-center mb-3">
                          <span className="text-white font-bold text-sm">
                            VS
                          </span>
                        </div>
                        <span className="bg-gray-200/20 text-white px-4 py-2 rounded-full text-xs font-medium">
                          7:00 PM
                        </span>
                      </div>

                      {/* Player 2 */}
                      <div className="flex flex-col items-center">
                        <div className="w-[80px] h-[80px] bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
                          <Image
                            src="/images/Player 2 Photo.png"
                            alt="Player 2"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-white font-bold md:text-lg">
                          {page.matches?.playerName || "Player Name"}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* Navigation Arrows */}
              <button className="upcoming-swiper-button-prev disabled:hidden absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button className="upcoming-swiper-button-next disabled:hidden absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Players Section */}
      <section ref={playersRef} className="py-16 relative bg-[#0A2A1A] z-10">
        <div className={`absolute inset-0 opacity-60 z-10`}>
          <Image
            src="/images/WPC2024-1080x1080.png"
            alt="WPC 2024 Background"
            width={1380}
            height={1380}
            className="object-contain"
            style={{ transform: "translateY(-20%)" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`flex items-center justify-between mb-10 players-header`}
          >
            <div className="flex items-center">
              <div>
                <h3 className="text-white text-3xl font-bold mr-4 rtl:mr-0 rtl:ml-4">
                  {page.players?.topPlayers || "Top Players"}
                </h3>
              </div>
              <div className={`h-[1px] bg-[#1C3C2C] flex-grow ml-4`}></div>
            </div>
            <div className="transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <Link
                href={`/${lang}/players`}
                className="see-all-button bg-[#BF9447] text-white px-6 py-3 text-sm font-medium rounded-xl"
              >
                {page.common?.viewAll || "See All"}
              </Link>
            </div>
          </div>
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".player-swiper-button-next",
                prevEl: ".player-swiper-button-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {/* Player 1 */}
              <SwiperSlide>
                <div className={`mx-auto player-card w-fit p-4 rounded-none`}>
                  <Image
                    src="/images/Top Player Full.png"
                    alt="Top Player"
                    width={400}
                    height={400}
                    className="transition-transform hover:scale-[1.08] pb-4"
                  />
                </div>
              </SwiperSlide>
              {/* Player 2 */}
              <SwiperSlide>
                <div className={`mx-auto player-card w-fit p-4 rounded-none`}>
                  <Image
                    src="/images/Top Playe Full.png"
                    alt="Top Player"
                    width={400}
                    height={400}
                    className="transition-transform hover:scale-[1.08] pb-4"
                  />
                </div>
              </SwiperSlide>

              {/* Player 3 */}
              <SwiperSlide>
                <div className={`mx-auto player-card w-fit p-4 rounded-none`}>
                  <Image
                    src="/images/Top Playe Full-1.png"
                    alt="Top Player"
                    width={400}
                    height={400}
                    className="transition-transform hover:scale-[1.08] pb-4"
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            {/* player Navigation Arrows */}
            <button className="player-swiper-button-prev disabled:hidden absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button className="player-swiper-button-next disabled:hidden absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Popular News Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bottom-0 z-0 opacity-60">
          <Image
            src="/images/Sparks.png"
            alt="Sparks Background"
            fill
            className="object-cover"
          />
        </div>
        <section className="py-16 relative z-10" ref={newsRef}>
          <div className="container mx-auto px-4 relative z-10 mb-10">
            <div
              className={`news-header flex items-center justify-between mb-10`}
            >
              <h2 className={`text-white text-3xl font-bold`}>
                {page.news?.popularNews || "Popular News"}
              </h2>
              <div className="transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <Link
                  href={`/${lang}/news`}
                  className="see-all-button bg-[#BF9447] text-white px-6 py-3 text-sm font-medium rounded-xl"
                >
                  {page.news?.seeMore || "See More"}
                </Link>
              </div>
            </div>

            <div className="main-news-card flex flex-col lg:flex-row gap-8">
              {/* Main News - Left Side */}
              <div
                className={`w-full lg:w-7/12 transition-transform hover:scale-[1.02]`}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                  <div className="relative">
                    <Image
                      src="/images/Mask group-1.png"
                      alt="News"
                      width={800}
                      height={400}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#0A2A1A] text-2xl font-bold mb-2">
                      {page.news?.headline || "Headline May Be Written Here."}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {page.news?.details ||
                        "Details Here Details Here Details Here Details Here Details Here Details Here Details Here"}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">12-5-2024</span>
                      <Link
                        href={`/${lang}/news/1`}
                        className="bg-[#0A2A1A] hover:bg-[#454545] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                      >
                        {page.common?.readMore || "Read More"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video News - Right Side */}
              <div className={`w-full lg:w-5/12 flex flex-col gap-6 h-[460px]`}>
                {/* Video 1 */}
                <div
                  className={`bg-white rounded-3xl overflow-hidden shadow-lg flex transition-transform hover:scale-[1.02]`}
                >
                  <div className="w-1/2 relative">
                    <Image
                      src="/images/Mask group-2.png"
                      alt="Video"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 p-4 flex flex-col justify-between">
                    <h3 className="text-[#0A2A1A] font-bold">
                      {page.news?.videoTitle ||
                        "Video Title May Be Written Here."}
                    </h3>
                    <div className="text-gray-500 text-sm">12-5-2024</div>
                  </div>
                </div>

                {/* Video 2 */}
                <div
                  className={`bg-white rounded-3xl overflow-hidden shadow-lg flex transition-transform hover:scale-[1.02]`}
                >
                  <div className="w-1/2 relative">
                    <Image
                      src="/images/Mask group-2.png"
                      alt="Video"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 p-4 flex flex-col justify-between">
                    <h3 className="text-[#0A2A1A] font-bold">
                      {page.news?.videoTitle ||
                        "Video Title May Be Written Here."}
                    </h3>
                    <div className="text-gray-500 text-sm">12-5-2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={participantsRef}
          className="container relative mx-auto p-4 mt-8 z-10"
        >
          <h2 className="text-white text-3xl font-bold mb-8 z-10 participants-title">
            {page.participants?.title || "Participants"}
          </h2>
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              className="participants-swiper"
            >
              {participants.map((person) => (
                <SwiperSlide key={person.id}>
                  <div className="flex flex-col items-center justify-center participant-card">
                    <div className="w-32 h-32 mb-4 border border-[#BF9447] rounded-full">
                      <Image
                        src={"/images/Play Circle.png"}
                        alt={person.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-full p-2 transition-transform hover:scale-[1.1]"
                      />
                    </div>
                    <div className="text-white text-lg font-semibold text-center">
                      {person.name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <button className="custom-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button className="custom-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="about-description w-full mb-8 lg:mb-0 z-10">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-wide uppercase">
                {page.about?.title || "ABOUT"}
              </h2>
              <p className="text-white text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                {page.about?.description ||
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}
              </p>
              <div>
                <Link
                  href={`/${lang}/about`}
                  className="inline-block rounded-xl bg-[#BF9447] text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium hover:bg-[#A37E3B] transition-colors duration-300"
                >
                  {page.common?.readMore || "Read More"}
                </Link>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="relative lg:col-start-2">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                {/* Circle background */}
                <div className="absolute ltr:right-[-50px] rtl:left-[-50px] top-4 z-0 gentle-float">
                  <Image
                    src="/images/Mask Group 8.png"
                    alt="Circle Background"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>

                {/* Billiard table image - positioned to extend to screen edge */}
                <div className="about-images absolute ltr:right-[-100px] rtl:left-[-100px] top-0 z-10 rtl:transform rtl:scale-x-[-1]">
                  <Image
                    src="/images/58878.png"
                    alt="Pool Table"
                    width={500}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 relative z-10 bg-[#0A2A1A]" ref={galleryRef}>
        <div className="container mx-auto px-4">
          <h2
            className={`gallery-title text-white text-4xl font-bold mb-10 ml-4 rtl:ml-0 rtl:mr-4`}
          >
            {page.gallery?.title || "Gallery"}
          </h2>

          {/* Gallery Layout */}
          <div className="relative gallery-image">
            {/* Event image (large triangle - left) */}
            <div
              className={`absolute min-w-[20rem] w-[70%] top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2`}
            >
              <Image
                src="/images/Mask group-4.png"
                alt="Event"
                width={900}
                height={600}
                className="w-full h-auto transition-transform hover:scale-[1.05]"
              />
            </div>

            {/* Restaurant image (top right) */}
            <div
              className={`absolute min-w-[12rem] w-[40%] top-1/2 left-[40%] -translate-x-[10%] -translate-y-[100%]`}
            >
              <Image
                src="/images/Mask group-5.png"
                alt="Restaurant"
                width={600}
                height={400}
                className="w-full h-auto transition-transform hover:scale-[1.05]"
              />
            </div>
            {/* Championship image (bottom) */}
            <div
              className={`absolute min-w-[8rem] w-[30%] top-1/2 left-[40%] translate-x-[35%] -translate-y-[10%]`}
            >
              <Image
                src="/images/Mask group-6.png"
                alt="Pool Championship"
                width={600}
                height={300}
                className="w-full h-auto transition-transform hover:scale-[1.05]"
              />
            </div>
            {/* Stadium image (bottom right) */}
            <div
              className={`absolute min-w-[10rem] w-[35%] top-1/2 left-[40%] translate-x-[60%] -translate-y-[80%]`}
            >
              <Image
                src="/images/Mask group-7.png"
                alt="Stadium"
                width={600}
                height={400}
                className="w-full h-auto transition-transform hover:scale-[1.05]"
              />
            </div>

            {/* Spacer div to maintain section height */}
            <div className="h-[650px]"></div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 sm:hidden">
          <h2
            className={`text-white text-4xl font-bold mb-10 ml-4 rtl:ml-0 rtl:mr-4`}
          >
            {page.gallery?.title || "Gallery"}
          </h2>
          <div className="gallery-image">
            <Image
              src="/images/Mask group-4.png"
              alt="Event"
              width={900}
              height={600}
              className="w-full h-auto transition-transform hover:scale-[1.1]"
            />
          </div>
          <div className="gallery-image">
            <Image
              src="/images/Mask group-5.png"
              alt="Restaurant"
              width={600}
              height={400}
              className="w-full h-auto transition-transform hover:scale-[1.1]"
            />
          </div>
          <div className="gallery-image">
            <Image
              src="/images/Mask group-6.png"
              alt="Pool Championship"
              width={600}
              height={300}
              className="w-full h-auto transition-transform hover:scale-[1.1]"
            />
          </div>
          <div className="gallery-image">
            <Image
              src="/images/Mask group-7.png"
              alt="Stadium"
              width={600}
              height={400}
              className="w-full h-auto transition-transform hover:scale-[1.1]"
            />
          </div>
        </div> */}
      </section>

      {/* Organizers Section */}
      <section className="py-16 relative z-10" ref={organizersRef}>
        <div className="container mx-auto px-4">
          <div className={`mb-10`}>
            <h2
              className={`organizers-title text-white text-3xl font-bold mb-4`}
            >
              {page.organizers?.title || "Organizers"}
            </h2>
            <div className={`organizers-divider h-[1px] bg-[#1C3C2C]`}></div>
          </div>
          <div
            className={`organizers-image grid grid-cols-2 md:grid-cols-4  gap-6 items-center`}
          >
            {[...Array(12)].map((_, index) => (
              <div key={index}>
                <div className="group transition-transform hover:scale-105">
                  <Image
                    src={`/images/Organizer ${index + 1}.png`}
                    alt={`Organizer ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full max-w-[250px] max-h-[250px] object-contain mx-auto transition duration-100 group-hover:grayscale group-hover:invert-[0.5]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
