"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Locale } from "../../../../../i18n.config";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface Match {
  id: number;
  player1: {
    name: string;
    image: string;
    country: string;
    ranking: number;
  };
  player2: {
    name: string;
    image: string;
    country: string;
    ranking: number;
  };
  status: "live" | "upcoming" | "completed";
  time?: string;
  date?: string;
  round: string;
  venue: string;
  score?: {
    player1: number;
    player2: number;
  };
}

const MatchsPage = ({ lang, page }: { lang: Locale; page: any }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const liveMatchsRef = useRef<HTMLDivElement>(null);
  const upcomingMatchsRef = useRef<HTMLDivElement>(null);
  const completedMatchsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"live" | "upcoming" | "completed">(
    "live"
  );

  // Sample matchs data
  const matchs: Match[] = [
    {
      id: 1,
      player1: {
        name: "Ahmed Al-Rashid",
        image: "/images/Player Photo.png",
        country: "Saudi Arabia",
        ranking: 1,
      },
      player2: {
        name: "John Martinez",
        image: "/images/Player 2 Photo.png",
        country: "Spain",
        ranking: 3,
      },
      status: "live",
      round: "Semi-Final",
      venue: "Main Arena",
      score: { player1: 7, player2: 5 },
    },
    {
      id: 2,
      player1: {
        name: "Li Wei",
        image: "/images/Player Photo.png",
        country: "China",
        ranking: 2,
      },
      player2: {
        name: "Marco Silva",
        image: "/images/Player 2 Photo.png",
        country: "Brazil",
        ranking: 4,
      },
      status: "live",
      round: "Semi-Final",
      venue: "Arena 2",
      score: { player1: 4, player2: 6 },
    },
    {
      id: 3,
      player1: {
        name: "David Johnson",
        image: "/images/Player Photo.png",
        country: "USA",
        ranking: 5,
      },
      player2: {
        name: "Erik Larsson",
        image: "/images/Player 2 Photo.png",
        country: "Sweden",
        ranking: 8,
      },
      status: "upcoming",
      time: "7:00 PM",
      date: "June 5, 2024",
      round: "Quarter-Final",
      venue: "Main Arena",
    },
    {
      id: 4,
      player1: {
        name: "Pierre Dubois",
        image: "/images/Player Photo.png",
        country: "France",
        ranking: 6,
      },
      player2: {
        name: "Hiroshi Tanaka",
        image: "/images/Player 2 Photo.png",
        country: "Japan",
        ranking: 7,
      },
      status: "upcoming",
      time: "9:00 PM",
      date: "June 5, 2024",
      round: "Quarter-Final",
      venue: "Arena 2",
    },
    {
      id: 5,
      player1: {
        name: "Roberto Carlos",
        image: "/images/Player Photo.png",
        country: "Argentina",
        ranking: 9,
      },
      player2: {
        name: "Michael Brown",
        image: "/images/Player 2 Photo.png",
        country: "UK",
        ranking: 12,
      },
      status: "completed",
      round: "Round of 16",
      venue: "Arena 3",
      score: { player1: 9, player2: 4 },
    },
    {
      id: 6,
      player1: {
        name: "Alexander Petrov",
        image: "/images/Player Photo.png",
        country: "Russia",
        ranking: 10,
      },
      player2: {
        name: "Giuseppe Romano",
        image: "/images/Player 2 Photo.png",
        country: "Italy",
        ranking: 11,
      },
      status: "completed",
      round: "Round of 16",
      venue: "Main Arena",
      score: { player1: 6, player2: 9 },
    },
  ];

  const filteredMatchs = matchs.filter((match) => match.status === activeTab);

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
          "-=0.5"
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

      // Tab animations
      gsap.from(".match-tabs", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });

      // Match cards animations
      // gsap.from(".match-card", {
      //   scrollTrigger: {
      //     trigger: ".matchs-container",
      //     start: "top 80%",
      //     toggleActions: "play none none reverse",
      //   },
      //   opacity: 0,
      //   y: 50,
      //   duration: 0.8,
      //   stagger: 0.2,
      //   ease: "power2.out",
      // });

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

  const renderMatchCard = (match: Match) => {
    const isLive = match.status === "live";
    const isCompleted = match.status === "completed";

    return (
      <div
        key={match.id}
        className={`match-card ${
          isLive
            ? "bg-white"
            : isCompleted
            ? "bg-[#0D3520] border border-[#1C3C2C]"
            : "bg-[#0D3520] border border-[#1C3C2C]"
        } rounded-lg p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
      >
        {/* Match Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-medium">
            <span className={`${isLive ? "text-[#0A2A1A]" : "text-white"}`}>
              {match.round}
            </span>
            <span
              className={`mx-2 ${isLive ? "text-gray-500" : "text-gray-400"}`}
            >
              •
            </span>
            <span className={`${isLive ? "text-gray-600" : "text-gray-300"}`}>
              {match.venue}
            </span>
          </div>
          {isLive && (
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
              LIVE
            </span>
          )}
          {match.status === "upcoming" && match.time && (
            <span className="bg-[#BF9447] text-white px-3 py-1 rounded-full text-xs font-semibold">
              {match.time}
            </span>
          )}
          {isCompleted && (
            <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              FINISHED
            </span>
          )}
        </div>

        {/* Players */}
        <div className="flex justify-between items-center">
          {/* Player 1 */}
          <div className="flex flex-col items-center w-2/5">
            <div className="w-20 h-20 bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
              <Image
                src={match.player1.image}
                alt={match.player1.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <h3
              className={`font-bold text-lg text-center ${
                isLive ? "text-[#0A2A1A]" : "text-white"
              }`}
            >
              {match.player1.name}
            </h3>
            <p
              className={`text-sm ${
                isLive ? "text-gray-600" : "text-gray-300"
              }`}
            >
              {match.player1.country}
            </p>
            <p
              className={`text-xs ${
                isLive ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Rank #{match.player1.ranking}
            </p>
          </div>

          {/* VS Section */}
          <div className="flex flex-col items-center w-1/5">
            <div className="px-4 py-2 rounded-lg bg-[#BF9447] mb-2">
              <span className="text-white font-bold text-sm">VS</span>
            </div>
            {match.score && (
              <div
                className={`text-2xl font-bold ${
                  isLive ? "text-[#0A2A1A]" : "text-white"
                }`}
              >
                {match.score.player1} - {match.score.player2}
              </div>
            )}
            {match.status === "upcoming" && match.date && (
              <div
                className={`text-center text-sm ${
                  isLive ? "text-gray-600" : "text-gray-300"
                }`}
              >
                {match.date}
              </div>
            )}
          </div>

          {/* Player 2 */}
          <div className="flex flex-col items-center w-2/5">
            <div className="w-20 h-20 bg-[#0A2A1A] rounded-full mb-3 overflow-hidden">
              <Image
                src={match.player2.image}
                alt={match.player2.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <h3
              className={`font-bold text-lg text-center ${
                isLive ? "text-[#0A2A1A]" : "text-white"
              }`}
            >
              {match.player2.name}
            </h3>
            <p
              className={`text-sm ${
                isLive ? "text-gray-600" : "text-gray-300"
              }`}
            >
              {match.player2.country}
            </p>
            <p
              className={`text-xs ${
                isLive ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Rank #{match.player2.ranking}
            </p>
          </div>
        </div>

        {/* Match Actions */}
        <div className="mt-6 flex justify-center">
          <Link
            href={`/${lang}/matchs/${match.id}`}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              isLive
                ? "bg-[#0A2A1A] text-white hover:bg-[#454545]"
                : "bg-[#BF9447] text-white hover:bg-[#A37E3B]"
            }`}
          >
            {isLive
              ? "Watch Live"
              : isCompleted
              ? "View Results"
              : "Match Details"}
          </Link>
        </div>
      </div>
    );
  };

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
            alt="Matchs"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 z-20 floating-decoration">
          <Image
            src="/images/Balls Pattern.png"
            alt="Decoration"
            width={120}
            height={120}
          />
        </div>

        <div className="absolute top-1/4 left-10 z-20 spin-decoration opacity-20">
          <Image
            src="/images/Balls Pattern 2.png"
            alt="Decoration"
            width={100}
            height={100}
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto h-full px-4 flex items-center justify-center relative z-20">
          <div className="text-center">
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-[#BF9447] mb-4 tracking-wide">
              MATCHS
            </h1>
            <p className="hero-subtitle text-white text-lg md:text-xl font-light tracking-wide">
              {page.matchs?.subtitle || "Follow the Championship Action"}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative z-10 flex-grow">
        <div className="container mx-auto px-4">
          {/* Match Tabs */}
          <div className="match-tabs flex justify-center mb-12">
            <div className="bg-[#0D3520] rounded-lg p-2 border border-[#1C3C2C]">
              {(["live", "upcoming", "completed"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md text-sm font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#BF9447] text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-[#1C3C2C]"
                  }`}
                >
                  {tab === "live" && (
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  )}
                  {tab}
                  <span className="ml-2 text-xs opacity-75">
                    ({matchs.filter((m) => m.status === tab).length})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Matchs Container */}
          <div className="matchs-container">
            {filteredMatchs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredMatchs.map(renderMatchCard)}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 opacity-50">
                  <Image
                    src="/images/Play Circle.png"
                    alt="No matchs"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  No {activeTab} matchs
                </h3>
                <p className="text-gray-400">
                  {activeTab === "live" && "No matchs are currently live."}
                  {activeTab === "upcoming" && "No upcoming matchs scheduled."}
                  {activeTab === "completed" && "No completed matchs to show."}
                </p>
              </div>
            )}
          </div>

          {/* Tournament Bracket Link */}
          <div className="text-center mt-16">
            <Link
              href={`/${lang}/bracket`}
              className="inline-flex items-center bg-[#BF9447] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#A37E3B] transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              View Tournament Bracket
            </Link>
          </div>
        </div>
      </section>

      {/* Background Decorations */}
      <div className="absolute bottom-1/4 left-0 w-full h-32 opacity-10 z-0">
        <Image
          src="/images/Saudi Flag.png"
          alt="Background"
          width={800}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MatchsPage;
