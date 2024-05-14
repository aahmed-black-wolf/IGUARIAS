import Footer from '../layouts/Footer';
import Nav from '../layouts/Headers/Nav/Nav';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Serves from './Serves/Serves';
import Steps from './Steps/Steps';

export default function Landing() {
  return (
    <div className="relative">
      <Nav />
      <div className="flex flex-col ">
        <Hero />
        <Serves />
        <Steps />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
