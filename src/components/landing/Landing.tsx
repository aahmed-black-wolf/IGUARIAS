import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Steps from "./Steps/Steps";

export default function Landing() {
  return (
    <div className="relative">
      <div className="flex flex-col ">
        <Hero />
        <Service />
        <About />
        <Steps />
        <Contact />
      </div>
    </div>
  );
}
