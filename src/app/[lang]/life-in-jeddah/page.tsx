"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LiveInJeddahPage = () => {
  const attractions = [
    {
      id: 1,
      name: "Historic Jeddah",
      description: "UNESCO World Heritage Site with traditional architecture",
      image: "/images/Mask group-3.png",
      category: "Heritage",
    },
    {
      id: 2,
      name: "King Fahd Fountain",
      description: "World's tallest fountain reaching 312 meters high",
      image: "/images/Mask group-3.png",
      category: "Landmark",
    },
    {
      id: 3,
      name: "Red Sea Mall",
      description: "Premier shopping destination with luxury brands and dining",
      image: "/images/Mask group-3.png",
      category: "Shopping",
    },
    {
      id: 4,
      name: "Corniche",
      description: "Beautiful waterfront promenade along the Red Sea",
      image: "/images/Mask group-3.png",
      category: "Recreation",
    },
  ];

  const restaurants = [
    {
      id: 1,
      name: "Al Baik",
      cuisine: "Fast Food",
      description: "Legendary local fast food chain",
      rating: 4.8,
      image: "/images/Mask group-3.png",
    },
    {
      id: 2,
      name: "Najd Village",
      cuisine: "Traditional Saudi",
      description: "Authentic Saudi cuisine in traditional setting",
      rating: 4.6,
      image: "/images/Mask group-3.png",
    },
    {
      id: 3,
      name: "The Globe",
      cuisine: "International",
      description: "Fine dining with panoramic city views",
      rating: 4.7,
      image: "/images/Mask group-3.png",
    },
  ];

  const experiences = [
    {
      id: 1,
      title: "Desert Safari",
      description: "Adventure through the Arabian desert with camel rides",
      duration: "Half Day",
      price: "From 200 SAR",
      image: "/images/Mask group-3.png",
    },
    {
      id: 2,
      title: "Red Sea Diving",
      description: "Explore vibrant coral reefs and marine life",
      duration: "Full Day",
      price: "From 350 SAR",
      image: "/images/Mask group-3.png",
    },
    {
      id: 3,
      title: "Cultural Walking Tour",
      description: "Discover the history of Al-Balad old town",
      duration: "3 Hours",
      price: "From 150 SAR",
      image: "/images/Mask group-3.png",
    },
  ];

  return (
    <div className="live-in-jeddah-page min-h-screen flex flex-col bg-[#0A2A1A] relative overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative z-10 h-[100vh] max-h-[800px] min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Saudi Flag.png"
            alt="Jeddah Skyline"
            width={1920}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A1A]/80 via-[#0A2A1A]/40 to-transparent"></div>
        </div>

        <div className="container mx-auto h-full px-4 flex items-center relative z-10">
          <div className="w-full lg:w-1/2 flex flex-col items-start animate-slideRight">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-sans">
                <span className="text-white block font-light tracking-wide mb-2">
                  {"Experience"}
                </span>
                <span className="text-[#BF9447] text-5xl lg:text-7xl block font-bold tracking-wide">
                  {"LIVE IN JEDDAH"}
                </span>
              </h1>
            </div>
            <p className="text-white text-lg font-light tracking-wide mb-8 max-w-lg">
              {
                "Discover the vibrant culture, stunning architecture, and endless adventures that await you in the Bride of the Red Sea."
              }
            </p>
            <Link
              href="#attractions"
              className="bg-[#BF9447] hover:bg-[#A37E3B] text-white block p-4 text-lg font-medium transition-colors duration-300 rounded-full"
            >
              {"Explore Jeddah"}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeIn delay-200">
              <div className="text-[#BF9447] text-4xl font-bold mb-2">4M+</div>
              <div className="text-white text-sm uppercase tracking-wide">
                Population
              </div>
            </div>
            <div className="animate-fadeIn delay-300">
              <div className="text-[#BF9447] text-4xl font-bold mb-2">30°C</div>
              <div className="text-white text-sm uppercase tracking-wide">
                Average Temperature
              </div>
            </div>
            <div className="animate-fadeIn delay-400">
              <div className="text-[#BF9447] text-4xl font-bold mb-2">
                1000+
              </div>
              <div className="text-white text-sm uppercase tracking-wide">
                Years of History
              </div>
            </div>
            <div className="animate-fadeIn delay-500">
              <div className="text-[#BF9447] text-4xl font-bold mb-2">365</div>
              <div className="text-white text-sm uppercase tracking-wide">
                Days of Sunshine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions Section */}
      <section id="attractions" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4 tracking-wide">
              {"TOP ATTRACTIONS"}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              {
                "Discover the most iconic landmarks and hidden gems that make Jeddah unique"
              }
            </p>
          </div>

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
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              navigation={{
                nextEl: ".attractions-button-next",
                prevEl: ".attractions-button-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="attractions-swiper"
            >
              {attractions.map((attraction) => (
                <SwiperSlide key={attraction.id}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                    <div className="relative" style={{ height: "250px" }}>
                      <Image
                        src={"/images/Mask group-3.png"}
                        alt={attraction.name}
                        fill
                        className="object-cover h-64 w-full"
                      />
                      <div className="absolute top-4 right-6 bg-[#BF9447] text-white p-2 rounded-full text-xs font-medium">
                        {attraction.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-[#0A2A1A] text-xl font-bold mb-2">
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

            {/* Custom Navigation */}
            <div className="attractions-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#BF9447] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#A37E3B] transition-colors">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="attractions-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#BF9447] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#A37E3B] transition-colors">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-20 bg-[#0D3520] relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8 animate-fadeIn">
            <h2 className="text-white text-3xl lg:text-4xl font-bold">
              {"DINING EXPERIENCES"}
            </h2>
            <Link
              href={`/${"en"}/restaurants`}
              className="bg-[#BF9447] hover:bg-[#A37E3B] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300"
            >
              {"View All"}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                className={`bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 animate-slideUp delay-${
                  (index + 2) * 100
                }`}
              >
                <div className="relative h-48">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[#0A2A1A] text-xl font-bold">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[#BF9447] text-sm font-medium">
                        ★ {restaurant.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#BF9447] text-sm font-medium mb-2">
                    {restaurant.cuisine}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {restaurant.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fadeIn">
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4 tracking-wide">
              {"UNIQUE EXPERIENCES"}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {
                "Create unforgettable memories with these exclusive Jeddah adventures"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`bg-[#0D3520] border border-[#1C3C2C] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 animate-slideUp delay-${
                  (index + 2) * 100
                }`}
              >
                <div className="relative h-64">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-6">
                    <span className="bg-[#BF9447] text-white p-2 rounded-full text-xs font-medium">
                      {experience.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {experience.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#BF9447] font-bold">
                      {experience.price}
                    </span>
                    <button className="bg-[#BF9447] hover:bg-[#A37E3B] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Heritage Section */}
      <section className="py-20 bg-[#0D3520] relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideRight">
              <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6 tracking-wide">
                {"RICH CULTURE & HERITAGE"}
              </h2>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                {
                  "Jeddah is a city where ancient traditions meet modern innovation. From the historic Al-Balad district to contemporary art galleries, experience the cultural tapestry that defines this magnificent city."
                }
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#BF9447] rounded-full mr-4"></div>
                  <span className="text-white">
                    UNESCO World Heritage Sites
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#BF9447] rounded-full mr-4"></div>
                  <span className="text-white">
                    Traditional Souks & Markets
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#BF9447] rounded-full mr-4"></div>
                  <span className="text-white">Contemporary Art Scene</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#BF9447] rounded-full mr-4"></div>
                  <span className="text-white">
                    Cultural Festivals & Events
                  </span>
                </div>
              </div>
              <Link
                href={`/${"en"}/culture`}
                className="bg-[#BF9447] hover:bg-[#A37E3B] text-white px-8 py-3 text-lg font-medium transition-colors duration-300 rounded-full"
              >
                Explore Culture
              </Link>
            </div>

            <div className="relative animate-slideLeft">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <Image
                    src="/images/Mask group-3.png"
                    alt="Traditional Architecture"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <Image
                    src="/images/Mask group-3.png"
                    alt="Local Market"
                    width={300}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <Image
                    src="/images/Mask group-3.png"
                    alt="Art Gallery"
                    width={300}
                    height={150}
                    className="rounded-lg"
                  />
                  <Image
                    src="/images/Mask group-3.png"
                    alt="Cultural Festival"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather & Best Time to Visit */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4 tracking-wide">
              {"WEATHER & BEST TIME TO VISIT"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slideUp delay-200">
              <div className="bg-[#0D3520] border border-[#1C3C2C] rounded-lg p-6">
                <div className="text-[#BF9447] text-2xl font-bold mb-2">
                  Spring
                </div>
                <div className="text-white text-sm mb-2">Mar - May</div>
                <div className="text-white/80 text-xs">
                  Perfect weather, 20-30°C
                </div>
              </div>
            </div>
            <div className="text-center animate-slideUp delay-300">
              <div className="bg-[#0D3520] border border-[#1C3C2C] rounded-lg p-6">
                <div className="text-[#BF9447] text-2xl font-bold mb-2">
                  Summer
                </div>
                <div className="text-white text-sm mb-2">Jun - Aug</div>
                <div className="text-white/80 text-xs">
                  Hot & humid, 30-40°C
                </div>
              </div>
            </div>
            <div className="text-center animate-slideUp delay-400">
              <div className="bg-[#0D3520] border border-[#1C3C2C] rounded-lg p-6">
                <div className="text-[#BF9447] text-2xl font-bold mb-2">
                  Autumn
                </div>
                <div className="text-white text-sm mb-2">Sep - Nov</div>
                <div className="text-white/80 text-xs">
                  Comfortable, 25-35°C
                </div>
              </div>
            </div>
            <div className="text-center animate-slideUp delay-500">
              <div className="bg-[#0D3520] border border-[#1C3C2C] rounded-lg p-6">
                <div className="text-[#BF9447] text-2xl font-bold mb-2">
                  Winter
                </div>
                <div className="text-white text-sm mb-2">Dec - Feb</div>
                <div className="text-white/80 text-xs">
                  Ideal weather, 15-25°C
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-20 bg-[#0D3520] relative">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-12 text-center animate-fadeIn">
            {"JEDDAH IN PICTURES"}
          </h2>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/Mask group-3.png"
            alt="Jeddah Night"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0A2A1A]/80"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fadeIn">
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6 tracking-wide">
              {"READY TO EXPLORE JEDDAH?"}
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {
                "Join us for the World Pool Championship and discover why Jeddah is one of the world's most captivating destinations."
              }
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <Link
                href={`/${"en"}/plan-visit`}
                className="bg-[#BF9447] hover:bg-[#A37E3B] text-white p-4 text-lg font-medium transition-colors duration-300 rounded-full"
              >
                Plan Your Visit
              </Link>
              <Link
                href={`/${"en"}/championship`}
                className="border-2 border-[#BF9447] text-[#BF9447] hover:bg-[#BF9447] hover:text-white p-4 text-lg font-medium transition-colors duration-300 rounded-full"
              >
                Back to Championship
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#1C3C2C] relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#A3A3A3] text-sm hover:text-[#BF9447] transition-colors duration-300">
            {new Date().getFullYear()}{" "}
            {"Live in Jeddah - World Pool Championship. All Rights Reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LiveInJeddahPage;
