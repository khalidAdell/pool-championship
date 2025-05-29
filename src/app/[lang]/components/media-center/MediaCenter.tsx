"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Locale } from "../../../../../i18n.config";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface MediaItem {
  id: number;
  type: "video" | "photo" | "press-release" | "interview";
  title: string;
  description?: string;
  thumbnail: string;
  date: string;
  category: string;
  featured?: boolean;
  videoUrl?: string;
  duration?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MediaCenterPage = ({ lang, page }: { lang: Locale; page: any }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);
  const pressRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample media data
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "video",
      title: "Championship Opening Ceremony Highlights",
      description:
        "Experience the grand opening ceremony of the World Pool Championship 2024 in Jeddah.",
      thumbnail: "/images/Mask group-3.png",
      date: "2024-06-03",
      category: "Highlights",
      featured: true,
      duration: "5:42",
    },
    {
      id: 2,
      type: "video",
      title: "Player Interview: Championship Preparation",
      description:
        "Exclusive interview with top players discussing their preparation strategies.",
      thumbnail: "/images/Mask group-3.png",
      date: "2024-06-02",
      category: "Interviews",
      duration: "12:15",
    },
    {
      id: 3,
      type: "photo",
      title: "Championship Venue Setup",
      description:
        "Behind the scenes photos of the championship venue preparation.",
      thumbnail: "/images/Mask group-3.png",
      date: "2024-06-01",
      category: "Behind the Scenes",
    },
    {
      id: 4,
      type: "video",
      title: "Best Shots Compilation",
      description:
        "Amazing shots and trick plays from the championship matches.",
      thumbnail: "/images/Mask group-3.png",
      date: "2024-06-04",
      category: "Highlights",
      featured: true,
      duration: "8:30",
    },
    {
      id: 5,
      type: "press-release",
      title: "World Pool Championship 2024 Announces Record Participation",
      description:
        "Official press release about the record number of participants this year.",
      thumbnail: "/images/Mask group-3.png",
      date: "2024-05-30",
      category: "Press Release",
    },
    {
      id: 6,
      type: "photo",
      title: "Championship Gallery - Day 1",
      description:
        "Photo collection from the first day of championship matches.",
      thumbnail: "/images/Mask group-3.png",
      date: "2024-06-03",
      category: "Match Photos",
    },
    {
      id: 7,
      type: "interview",
      title: "Championship Director Exclusive Interview",
      description:
        "In-depth conversation with the championship organizing committee.",
      thumbnail: "/images/Mask group-3.png",
      date: "2024-05-28",
      category: "Interviews",
    },
    {
      id: 8,
      type: "video",
      title: "Championship Skills Challenge",
      description: "Players showcase their skills in various challenge rounds.",
      thumbnail: "/images/Mask group-3.png",
      date: "2024-06-05",
      category: "Special Events",
      duration: "15:20",
    },
  ];

  const filterCategories = [
    { key: "all", label: "All Media" },
    { key: "video", label: "Videos" },
    { key: "photo", label: "Photos" },
    { key: "press-release", label: "Press Releases" },
    { key: "interview", label: "Interviews" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.type === activeFilter);

  const featuredVideos = mediaItems.filter(
    (item) => item.type === "video" && item.featured
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-decoration",
          {
            opacity: 0,
            scale: 0.8,
            rotation: -180,
            duration: 1.5,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        );

      // Filter buttons animation
      gsap.from(".filter-button", {
        scrollTrigger: {
          trigger: ".filters-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Featured videos section
      gsap.from(".featured-title", {
        scrollTrigger: {
          trigger: videosRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".featured-video-card", {
        scrollTrigger: {
          trigger: videosRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Media grid animation
      gsap.from(".media-grid-title", {
        scrollTrigger: {
          trigger: ".media-grid-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".media-card", {
        scrollTrigger: {
          trigger: ".media-grid-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // Press releases section
      gsap.from(".press-title", {
        scrollTrigger: {
          trigger: pressRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".press-card", {
        scrollTrigger: {
          trigger: pressRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      -(
        // Floating animations
        gsap.to(".floating-decoration", {
          y: "+=20",
          rotation: "+=5",
          duration: 3,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        })
      );

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

  const openVideoModal = (video: MediaItem) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex flex-col bg-[#0A2A1A] relative overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative z-10 h-[60vh] min-h-[400px] flex items-center justify-center">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A2A1A]/80 z-10"></div>
          <Image
            src="/images/Full Header Screen 2.png"
            alt="Media Center"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 floating-decoration">
          <Image
            src="/images/Balls Pattern.png"
            alt="Decoration"
            width={100}
            height={100}
            className="opacity-30"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-5xl md:text-7xl font-bold text-[#BF9447] mb-4 hero-title">
            MEDIA CENTER
          </h1>
          <p className="text-white text-xl md:text-2xl font-light hero-subtitle">
            Latest Videos, Photos & Press Releases
          </p>
        </div>
      </section>
      {/* Filter Section */}
      <section className="py-12 relative z-10 filters-section">
        <div className="container mx-auto px-4">
          <div className="filter-button flex flex-wrap justify-center gap-4 mb-8">
            {filterCategories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover-scale ${
                  activeFilter === category.key
                    ? "bg-[#BF9447] text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Videos Section */}
      <section ref={videosRef} className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-4xl font-bold mb-8 featured-title">
            Featured Videos
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                className="featured-video-card bg-white/5 rounded-lg overflow-hidden shadow-lg hover-scale cursor-pointer"
                onClick={() => openVideoModal(video)}
              >
                <div className="relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={600}
                    height={350}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="p-2 rounded-full bg-[#BF9447]">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {video.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#BF9447] text-sm font-medium">
                      {video.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(video.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Media Grid Section */}
      <section className="py-16 relative z-10 media-grid-section">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-4xl font-bold mb-8 media-grid-title">
            All Media
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="media-card bg-white/5 rounded-lg overflow-hidden shadow-lg hover-scale cursor-pointer"
                onClick={() =>
                  item.type === "video" ? openVideoModal(item) : null
                }
              >
                <div className="relative">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  {item.type === "video" && (
                    <>
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="p-2 rounded-full bg-[#BF9447]">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      {item.duration && (
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {item.duration}
                        </div>
                      )}
                    </>
                  )}
                  <div className="absolute top-2 left-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        item.type === "video"
                          ? "bg-red-600 text-white"
                          : item.type === "photo"
                          ? "bg-blue-600 text-white"
                          : item.type === "press-release"
                          ? "bg-green-600 text-white"
                          : "bg-purple-600 text-white"
                      }`}
                    >
                      {item.type.replace("-", " ").toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#BF9447] text-sm font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Press Releases Section */}
      <section ref={pressRef} className="py-16 relative z-10 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-4xl font-bold press-title">
              Latest Press Releases
            </h2>
            <Link
              href={`/${lang}/press-releases`}
              className="bg-[#BF9447] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#A37E3B] transition-colors duration-300"
            >
              View All
            </Link>
          </div>

          <div className="space-y-6">
            {mediaItems
              .filter((item) => item.type === "press-release")
              .map((item) => (
                <div
                  key={item.id}
                  className="press-card bg-white rounded-lg p-6 shadow-lg hover-scale"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-[#BF9447] text-white px-3 py-1 rounded text-sm font-medium">
                          Press Release
                        </span>
                        <span className="text-gray-500 text-sm">
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-[#0A2A1A] text-2xl font-bold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <Link
                        href={`/${lang}/press-releases/${item.id}`}
                        className="inline-block bg-[#0A2A1A] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#154230] transition-colors duration-300"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 animate-fadeInUp">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-[#BF9447] hover:text-white text-[#0A2A1A] rounded-full flex items-center justify-center shadow transition-all duration-200"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Video or Thumbnail */}
            <div className="aspect-video bg-black rounded-t-2xl overflow-hidden flex items-center justify-center">
              {/* Replace with <video> if you have videoUrl */}
              <Image
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-[#BF9447] bg-opacity-90 rounded-full p-4 shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {selectedVideo.duration && (
                <span className="absolute bottom-3 right-4 bg-black/70 text-white px-3 py-1 rounded text-xs font-semibold">
                  {selectedVideo.duration}
                </span>
              )}
            </div>
            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0A2A1A] mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
              <div className="flex flex-wrap gap-4 justify-between items-center">
                <span className="inline-block bg-[#BF9447]/10 text-[#BF9447] px-3 py-1 rounded-full text-sm font-medium">
                  {selectedVideo.category}
                </span>
                <span className="text-gray-400 text-sm">
                  {new Date(selectedVideo.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-10 floating-decoration opacity-20">
        <Image
          src="/images/Balls Pattern 2.png"
          alt="Decoration"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};

export default MediaCenterPage;
