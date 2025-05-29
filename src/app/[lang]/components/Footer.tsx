import Image from "next/image";

const Footer = ({ page }: { page: any }) => {
  return (
    <footer
      className={`bg-[#0A2A1A] py-8 border-t border-[#1C3C2C] relative z-10`}
    >
      <div className={`mb-6 transition-transform`}>
        <Image
          src="/images/Jeddah Skyline.png"
          alt="Jeddah Skyline"
          width={1000}
          height={100}
          className="col-span-full w-full h-auto"
          unoptimized
        />
      </div>
      <div className={`footer-copyright container mx-auto px-4 text-center`}>
        <p className="text-[#A3A3A3] text-sm hover:text-[#BF9447] transition-colors duration-300">
          {new Date().getFullYear()}{" "}
          {page.footer?.copyright ||
            "World Pool Championship. All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
