import ethiopianLogo from "@/assets/logo-ethiopian-airlines.svg";
import flydubaiLogo from "@/assets/fly-dubai-1.svg";
import emiratesLogo from "@/assets/emirates-airlines.svg";
import qatarLogo from "@/assets/qatar-airways-1.svg";
import turkishLogo from "@/assets/turkish-airlines-logo.svg";
import kenyaLogo from "@/assets/kenya-airways-2.svg";
import lufthansaLogo from "@/assets/lufthansa.svg";
import egyptAirLogo from "@/assets/egypt-air-2.svg";
import etihadLogo from "@/assets/etihad-airways-1.svg";
import saudiLogo from "@/assets/saudi-arabian-airlines-1.svg";
import iataLogo from "@/assets/iata-1 (1).svg";
import TimeZoneBar from "./TimeZoneBar";

const partners = [
  { name: "Ethiopian Airlines", logo: ethiopianLogo, width: "w-32" },
  { name: "Flydubai", logo: flydubaiLogo, width: "w-28" },
  { name: "Emirates", logo: emiratesLogo, width: "w-32" },
  { name: "Qatar Airways", logo: qatarLogo, width: "w-36" },
  { name: "Turkish Airlines", logo: turkishLogo, width: "w-36" },
  { name: "Kenya Airways", logo: kenyaLogo, width: "w-32" },
  { name: "Lufthansa", logo: lufthansaLogo, width: "w-32" },
  { name: "EgyptAir", logo: egyptAirLogo, width: "w-28" },
  { name: "Etihad Airways", logo: etihadLogo, width: "w-32" },
  { name: "Saudi Arabian Airlines", logo: saudiLogo, width: "w-36" },
  { name: "IATA", logo: iataLogo, width: "w-24" }
];

const PartnersSection = () => {
  return (
    <section className="py-8 bg-sky-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Our Trusted Airline Partners
        </h2>
      </div>

      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex animate-marquee shrink-0 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center mr-16 cursor-default group"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className={`${partner.width} h-auto object-contain transition-all duration-300 drop-shadow-sm hover:scale-105`}
              />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee shrink-0 items-center" aria-hidden="true">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center mr-16 cursor-default group"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className={`${partner.width} h-auto object-contain transition-all duration-300 drop-shadow-sm hover:scale-105`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <TimeZoneBar />
      </div>
    </section>
  );
};

export default PartnersSection;
