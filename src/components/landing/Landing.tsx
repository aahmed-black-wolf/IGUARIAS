import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Serves from './Serves/Serves';
import Steps from './Steps/Steps';

export default function Landing() {
  return (
    <div className="relative">
      <div className="flex flex-col ">
        <Hero />
        <Serves />
        <Steps />
        <Contact />
      </div>
    </div>
  );
}
