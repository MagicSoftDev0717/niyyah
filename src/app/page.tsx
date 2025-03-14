// import Image from "next/image";
import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/AboutUs";
import Services from "@/components/Home/Services";
import Clock from "@/components/Home/Clock";
import AI_Business from "@/components/Home/AI_Business";
import AR_Net from "@/components/Home/Ar_Net";
import Insights from "@/components/Home/Insight";
import Check from "@/components/Home/Check";
import Faith from "@/components/Home/Faith";
export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col row-start-2 items-center sm:items-start">
      <Hero />
      <AboutUs />
      <Services />
      <Clock />
      <AI_Business />
      <AR_Net />
      <Insights />
      <Check />
      <Faith />
    </main>

    // </div>
  );
}
