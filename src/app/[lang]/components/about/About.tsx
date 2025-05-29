"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Locale } from "../../../../../i18n.config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AboutPage = ({ lang, page }: { lang: Locale; page: any }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A2A1A] relative overflow-hidden">
      {/* Hero Section */}
      <p className="hidden">{lang}</p>
      <section
        className={`relative z-10 h-[100vh] max-h-[800px] min-h-[600px]`}
      >
        {/* Hero Background Image */}
        <div className={`absolute inset-0 z-0 rtl:rotate-180 rtl:scale-y-[-1]`}>
          <div className="absolute inset-0 bg-[#0A2A1A] md:hidden opacity-80 z-0"></div>
          <Image
            src="/images/Full Header Screen 2.png"
            alt="Pool Championship"
            width={1920}
            height={1080}
            className="w-full h-[100vh] object-cover"
            priority
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#0A2A1A]/40 to-[#0A2A1A]/40`}
          ></div>

          {/* Triangular decoration */}
          <div
            className={`absolute bottom-0 right-0 rtl:right-auto rtl:left-0 z-10`}
          >
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
          className={`container mx-auto h-full px-4 flex items-center justify-end rtl:justify-start relative z-10 animate-staggered`}
        >
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className={`mb-6`}>
              <h1 className="text-4xl lg:text-5xl">
                <span className={`text-white block font-light tracking-wide`}>
                  {page.about?.subtitle || "THE STORY BEHIND"}
                </span>
                <span
                  className={`text-[#BF9447] text-5xl lg:text-7xl block font-bold tracking-wide`}
                >
                  {page.about?.title || "WORLD POOL CHAMPIONSHIP"}
                </span>
              </h1>
            </div>

            <p className={`text-white text-lg font-light tracking-wide`}>
              {page.hero?.location || "Taking Place in Jeddah, Saudi Arabia"}
              <br />
              {page.hero?.date || "3 - 8 June 2024"}
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 relative">
        <div
          className={`absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-[80%] h-[80%] opacity-30 animate-fadeIn delay-300`}
        >
          <Image
            src="/images/Saudi Flag.png"
            alt="Saudi Flag"
            width={800}
            height={800}
            className="object-contain rtl:transform rtl:scale-x-[-1]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideRight">
              <h2 className="text-[#BF9447] text-4xl font-bold mb-6">
                {page.about?.historyTitle || "OUR HISTORY"}
              </h2>
              <div className="space-y-4 text-white">
                <p>
                  {page.about?.historyText1 ||
                    "Founded in 1990, the World Pool Championship has grown to become the premier event in professional pool. What started as a small gathering of enthusiasts has transformed into a global phenomenon that attracts the world's best players and thousands of fans annually."}
                </p>
                <p>
                  {page.about?.historyText2 ||
                    "Our journey began in London, with just 32 competitors. Today, we host over 128 players from 40+ countries in state-of-the-art venues, with millions watching worldwide. The championship has pioneered innovations like instant replay technology and standardized tournament rules."}
                </p>
                <p>
                  {page.about?.historyText3 ||
                    "Through three decades, we've witnessed legendary moments that have defined the sport and inspired generations of players to pick up a cue."}
                </p>
              </div>
            </div>
            <div className="animate-slideLeft">
              <Image
                src="/images/Mask group-3.png"
                alt="Championship History"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#0D3520] relative">
        <div className="absolute bottom-0 right-0 w-1/4 opacity-20">
          <Image
            src="/images/Balls Pattern 2.png"
            alt="Decoration"
            width={300}
            height={300}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#BF9447] text-4xl font-bold mb-6">
              {page.about?.missionTitle || "OUR MISSION"}
            </h2>
            <p className="text-white text-xl leading-relaxed mb-8">
              {page.about?.missionStatement ||
                "To elevate the sport of pool to new heights by creating world-class competitive experiences, fostering player development, and building a global community of passionate fans."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: page.about?.goal1 || "Competitive Excellence",
                  description:
                    page.about?.goalDesc1 ||
                    "Maintain the highest standards of competition with fair rules and world-class venues",
                },
                {
                  title: page.about?.goal2 || "Global Growth",
                  description:
                    page.about?.goalDesc2 ||
                    "Expand the sport's reach to new audiences and developing nations",
                },
                {
                  title: page.about?.goal3 || "Player Development",
                  description:
                    page.about?.goalDesc3 ||
                    "Nurture young talent through academies and development programs",
                },
              ].map((goal, index) => (
                <div
                  key={index}
                  className="bg-[#1C3C2C] p-6 rounded-lg border border-[#BF9447]/30 animate-fadeIn"
                  style={{ animationDelay: `${200 * index}ms` }}
                >
                  <h3 className="text-[#BF9447] text-xl font-bold mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-white">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-white text-4xl font-bold text-center">
            {page.about?.keyFigures || "BY THE NUMBERS"}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "30+", label: page.about?.stat1 || "Years of History" },
              {
                value: "40+",
                label: page.about?.stat2 || "Countries Represented",
              },
              {
                value: "$5M+",
                label: page.about?.stat3 || "Total Prize Money",
              },
              { value: "128", label: page.about?.stat4 || "Elite Competitors" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-staggered"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[#BF9447] text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-3xl font-bold mb-8 text-center">
            {page.organizers?.title || "ORGANIZED BY"}
          </h2>

          <div className="flex flex-wrap justify-center gap-12">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="w-40 h-40 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center"
              />
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-[#BF9447] text-2xl font-bold mb-6">
              {page.about?.partnership || "IN PARTNERSHIP WITH"}
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="w-32 h-32 bg-gray-200 border-2 border-dashed rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#1C3C2C] relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#A3A3A3] text-sm">
            {new Date().getFullYear()}{" "}
            {page.footer?.copyright ||
              "World Pool Championship. All Rights Reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
