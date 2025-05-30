"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import type { Locale } from "../../../../../i18n.config";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LifeInJeddahPage = ({
  lang,
  page = {},
}: {
  lang: Locale;
  page?: any;
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  const attractionsRef = useRef<HTMLDivElement>(null);
  const cuisineRef = useRef<HTMLDivElement>(null);
  const shoppingRef = useRef<HTMLDivElement>(null);
  const beachesRef = useRef<HTMLDivElement>(null);
  const entertainmentRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const heroImages = [
    "/images/Mask group-3.png",
    "/images/Mask group-3.png",
    "/images/Mask group-3.png",
    "/images/Mask group-3.png",
  ];

  const attractions = [
    {
      id: 1,
      name: "Historic Jeddah",
      description: "Al-Balad UNESCO World Heritage Site with coral houses",
      image: "/images/Mask group-3.png",
      category: "Heritage",
    },
    {
      id: 2,
      name: "King Fahd Fountain",
      description: "World's tallest water fountain on the Red Sea",
      image: "/images/Mask group-3.png",
      category: "Landmark",
    },
    {
      id: 3,
      name: "Corniche",
      description: "Beautiful waterfront promenade with parks and cafes",
      image: "/images/Mask group-3.png",
      category: "Leisure",
    },
    {
      id: 4,
      name: "Red Sea Mall",
      description: "Premier shopping destination with luxury brands",
      image: "/images/Mask group-3.png",
      category: "Shopping",
    },
  ];

  const cuisineSpots = [
    {
      id: 1,
      name: "Al Nakheel Restaurant",
      cuisine: "Traditional Saudi",
      specialty: "Kabsa & Mandi",
      rating: 4.8,
      image: "/images/Mask group-3.png",
    },
    {
      id: 2,
      name: "Mama Noura",
      cuisine: "Lebanese",
      specialty: "Shawarma & Fattoush",
      rating: 4.7,
      image: "/images/Mask group-3.png",
    },
    {
      id: 3,
      name: "Herfy",
      cuisine: "Fast Food",
      specialty: "Local Burgers",
      rating: 4.5,
      image: "/images/Mask group-3.png",
    },
    {
      id: 4,
      name: "Fakieh Aquarium",
      cuisine: "Seafood",
      specialty: "Fresh Red Sea Fish",
      rating: 4.9,
      image: "/images/Mask group-3.png",
    },
  ];

  const beachImages = [
    "/images/2147021.jpg",
    "/images/2147021.jpg",
    "/images/2147021.jpg",
    "/images/2147021.jpg",
    "/images/2147021.jpg",
  ];

  const shoppingImages = [
    "/images/Mask group-3.png",
    "/images/Mask group-3.png",
    "/images/Mask group-3.png",
  ];

  const travelTips = [
    {
      icon: "🕌",
      title: "Prayer Times",
      description:
        "Be aware of prayer times when shops and restaurants may close temporarily",
    },
    {
      icon: "🌡️",
      title: "Weather",
      description:
        "Visit during cooler months (November-March) for the best experience",
    },
    {
      icon: "👕",
      title: "Dress Code",
      description:
        "Dress modestly, especially when visiting religious or cultural sites",
    },
    {
      icon: "💱",
      title: "Currency",
      description:
        "Saudi Riyal (SAR) is the local currency. Cards widely accepted",
    },
    {
      icon: "🚗",
      title: "Transportation",
      description:
        "Uber and Careem are popular. Consider renting a car for flexibility",
    },
    {
      icon: "🗣️",
      title: "Language",
      description:
        "Arabic is official, but English is widely spoken in tourist areas",
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
          ".hero-description",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // Culture section animations
      gsap.from(".culture-title", {
        scrollTrigger: {
          trigger: cultureRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".culture-card", {
        scrollTrigger: {
          trigger: cultureRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Attractions section animations
      gsap.from(".attractions-title", {
        scrollTrigger: {
          trigger: attractionsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".attraction-card", {
        scrollTrigger: {
          trigger: attractionsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      // Cuisine section animations
      gsap.from(".cuisine-title", {
        scrollTrigger: {
          trigger: cuisineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".cuisine-card", {
        scrollTrigger: {
          trigger: cuisineRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Shopping section animations
      gsap.from(".shopping-content", {
        scrollTrigger: {
          trigger: shoppingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".shopping-image", {
        scrollTrigger: {
          trigger: shoppingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
      });

      // Beaches section animations
      gsap.from(".beaches-title", {
        scrollTrigger: {
          trigger: beachesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".beaches-grid", {
        scrollTrigger: {
          trigger: beachesRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });

      // Entertainment section animations
      gsap.from(".entertainment-title", {
        scrollTrigger: {
          trigger: entertainmentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".entertainment-card", {
        scrollTrigger: {
          trigger: entertainmentRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Tips section animations
      gsap.from(".tips-title", {
        scrollTrigger: {
          trigger: tipsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".tip-card", {
        scrollTrigger: {
          trigger: tipsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.1,
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

      // Floating animations
      gsap.to(".floating-decoration", {
        y: "+=20",
        rotation: "+=5",
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".gentle-float", {
        y: "+=15",
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Hover animations
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
      {/* Hero Section with Swiper */}
      <section className="relative z-10 h-[100vh] max-h-[800px] min-h-[600px]">
        {/* Hero Background Swiper */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Jeddah Hero ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A1A]/80 to-transparent"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 z-10 floating-decoration">
          <Image
            src="/images/Balls Pattern.png"
            alt="Decoration"
            width={150}
            height={150}
            className="opacity-30"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto h-full px-4 flex items-center relative z-10">
          <div className="w-full lg:w-2/3">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-relaxed">
                <span className="text-white block font-light tracking-wide hero-subtitle">
                  Discover
                </span>
                <span className="text-[#BF9447] text-5xl md:text-6xl lg:text-7xl block font-bold tracking-wide leading-tight mt-2 hero-title">
                  LIFE IN JEDDAH
                </span>
              </h1>
            </div>

            <p className="text-white text-lg font-light tracking-wide hero-description max-w-2xl">
              Experience the vibrant culture, rich history, and modern lifestyle
              of Saudi Arabia's gateway to the world. From ancient souks to
              modern malls, from traditional cuisine to world-class
              entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Heritage Section */}
      <section ref={cultureRef} className="relative py-20 z-10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[20%] right-0 w-[150px] h-[150px] opacity-10 gentle-float">
            <Image
              src="/images/Balls Pattern 2.png"
              alt=""
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white culture-title">
            Culture & Heritage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="culture-card bg-[#0D3520] border border-[#1C3C2C] rounded-lg p-6 hover-scale">
              <div className="w-16 h-16 bg-[#BF9447] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🕌</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Islamic Architecture
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Explore magnificent mosques and traditional Islamic architecture
                that tells the story of Jeddah's spiritual heritage.
              </p>
            </div>

            <div className="culture-card bg-[#0D3520] border border-[#1C3C2C] rounded-lg p-6 hover-scale">
              <div className="w-16 h-16 bg-[#BF9447] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Historic Al-Balad
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Walk through the UNESCO World Heritage site with its traditional
                coral stone buildings and ancient merchant houses.
              </p>
            </div>

            <div className="culture-card bg-[#0D3520] border border-[#1C3C2C] rounded-lg p-6 hover-scale">
              <div className="w-16 h-16 bg-[#BF9447] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Arts & Culture
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Experience vibrant art galleries, cultural festivals, and
                traditional performances that celebrate Saudi heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions Section with Swiper */}
      <section
        ref={attractionsRef}
        className="py-20 relative bg-[#0A2A1A] z-10"
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/WPC2024-1080x1080.png"
            alt="Background"
            width={1080}
            height={1080}
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-white attractions-title">
              Top Attractions
            </h2>
            <div className="h-[1px] bg-[#1C3C2C] flex-grow ml-8"></div>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".Attractions-swiper-button-next",
                prevEl: ".Attractions-swiper-button-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              className="attractions-swiper"
            >
              {attractions.map((attraction) => (
                <SwiperSlide key={attraction.id}>
                  <div className="attraction-card bg-white rounded-lg overflow-hidden shadow-lg hover-scale h-full m-2">
                    <div className="h-48 relative">
                      <Image
                        src={attraction.image || "/placeholder.svg"}
                        alt={attraction.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#BF9447] text-white px-3 py-1 rounded-full text-sm font-medium">
                          {attraction.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#0A2A1A] mb-2">
                        {attraction.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Navigation Arrows */}
            <button className="Attractions-swiper-button-prev disabled:hidden absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button className="Attractions-swiper-button-next disabled:hidden absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Cuisine Section with Swiper */}
      <section ref={cuisineRef} className="py-20 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D3520] to-[#0A2A1A]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 cuisine-title">
            Culinary Delights
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl">
            From traditional Saudi dishes to international cuisine, Jeddah
            offers a feast for every palate.
          </p>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: ".Cuisine-swiper-button-next",
                prevEl: ".Cuisine-swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              className="cuisine-swiper"
            >
              {cuisineSpots.map((spot) => (
                <SwiperSlide key={spot.id}>
                  <div className="cuisine-card bg-white rounded-lg overflow-hidden shadow-lg hover-scale h-full m-2">
                    <div className="h-32 relative">
                      <Image
                        src={spot.image || "/placeholder.svg"}
                        alt={spot.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-[#0A2A1A]">
                          {spot.name}
                        </h3>
                        <div className="flex items-center">
                          <span className="text-yellow-500 text-sm">★</span>
                          <span className="text-gray-600 text-sm ml-1">
                            {spot.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-[#BF9447] font-medium mb-2">
                        {spot.cuisine}
                      </p>
                      <p className="text-gray-600 text-sm">{spot.specialty}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="Cuisine-swiper-button-prev disabled:hidden absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button className="Cuisine-swiper-button-next disabled:hidden absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Shopping & Entertainment Section with Swiper */}
      <section ref={shoppingRef} className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="shopping-content">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                SHOPPING & LIFESTYLE
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Experience world-class shopping from traditional souks to modern
                malls. Jeddah offers everything from luxury brands to authentic
                handicrafts and spices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#BF9447] rounded-full mr-3"></div>
                  <span className="text-white">
                    Red Sea Mall - Premium shopping experience
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#BF9447] rounded-full mr-3"></div>
                  <span className="text-white">
                    Al-Balad Souks - Traditional markets
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#BF9447] rounded-full mr-3"></div>
                  <span className="text-white">
                    Tahlia Street - Fashion and dining
                  </span>
                </div>
              </div>
            </div>

            <div className="shopping-image relative">
              <div className="relative">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".shopping-swiper-button-next",
                    prevEl: ".shopping-swiper-button-prev",
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="rounded-lg overflow-hidden h-80"
                >
                  {shoppingImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-80">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Shopping in Jeddah ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className="shopping-swiper-button-prev disabled:hidden absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button className="shopping-swiper-button-next disabled:hidden absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beaches & Recreation Section with Swiper */}
      <section ref={beachesRef} className="py-20 relative z-10 bg-[#0D3520]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 beaches-title">
            Beaches & Recreation
          </h2>

          <div className="beaches-grid mb-12 relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: ".Beaches-swiper-button-next",
                prevEl: ".Beaches-swiper-button-prev",
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="beaches-swiper"
            >
              {beachImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-64 rounded-lg overflow-hidden hover-scale">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Red Sea Beach ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="Beaches-swiper-button-prev disabled:hidden absolute left-4 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button className="Beaches-swiper-button-next disabled:hidden absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#BF9447] hover:bg-[#D4A855] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <div className="h-48 relative">
                <Image
                  src="/images/Mask group-3.png"
                  alt="Red Sea Diving"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2A1A] mb-2">
                  Pristine Coastline
                </h3>
                <p className="text-gray-600">
                  Crystal clear waters and coral reefs perfect for diving and
                  snorkeling.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <div className="h-48 relative">
                <Image
                  src="/images/Mask group-3.png"
                  alt="Corniche Park"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2A1A] mb-2">
                  Corniche Promenade
                </h3>
                <p className="text-gray-600">
                  Beautiful walkways with stunning Red Sea views and family
                  areas.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <div className="h-48 relative">
                <Image
                  src="/images/Mask group-3.png"
                  alt="Water Sports"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2A1A] mb-2">
                  Marine Activities
                </h3>
                <p className="text-gray-600">
                  Jet skiing, sailing, and deep-sea fishing in the Red Sea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      <section ref={entertainmentRef} className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 entertainment-title">
            Entertainment & Nightlife
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="entertainment-card bg-[#0D3520] border border-[#1C3C2C] rounded-lg p-8 hover-scale">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#BF9447] rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🎬</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Cinemas & Shows
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Enjoy the latest movies, live performances, and cultural shows
                at modern entertainment complexes throughout the city.
              </p>
            </div>

            <div className="entertainment-card bg-[#0D3520] border border-[#1C3C2C] rounded-lg p-8 hover-scale">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#BF9447] rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🎮</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Gaming & Sports
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                From bowling alleys to gaming centers, sports clubs to adventure
                parks, Jeddah offers endless entertainment options for all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section ref={tipsRef} className="py-20 relative z-10 bg-[#0A2A1A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 tips-title">
            Essential Travel Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelTips.map((tip, index) => (
              <div
                key={index}
                className="tip-card bg-white rounded-lg p-6 text-center hover-scale"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-bold text-[#0A2A1A] mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeInJeddahPage;
